import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import { repository } from '@loopback/repository';
import { Usuario } from '../models';
import { CambioContrasena } from '../models/cambio-contrasena.model';
import { UsuarioRepository } from '../repositories';
const generator = require('generate-password');
var CryptoJS = require("crypto-js");
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports flase for 587 
  auth: {
    user: 'misionticequipo1@gmail.com', // generated ethereal user
    pass: 'Proyectoeq1.', // generated ethereal password

  },
});

const accountSid = 'AC5bdd2b10dbf693891595dab689092cb0';
const authToken = 'eb82203476cddd9ee9164ea3e39a84f6';

const client = require('twilio')(accountSid, authToken);

@injectable({scope: BindingScope.TRANSIENT})
export class AdminContrasenasService {
  constructor(
    @repository(UsuarioRepository)
    public usuarioRepository : UsuarioRepository
  ) {}

  /*
   * Add service methods here
   */

  crearContrasena(){
  let  contrasena  =  generator.generate ( { 
    length : 8 , 
    numbers : true,
    upperCase: true 
    } ) ;
  return contrasena
  }

  cifrarTexto(texto:string){
    let textoCifrado = CryptoJS.MD5(texto).toString();
    return textoCifrado;
  }

  async cambiarContrasena(loginContrasena : CambioContrasena) : Promise<boolean>{
    let user = await this.usuarioRepository.findOne({
      where:{
        _id: loginContrasena.id_user,
        clave : this.cifrarTexto(loginContrasena.clave_actual)
      }
    });
    if(user){
      user.clave = this.cifrarTexto(loginContrasena.clave_nueva);
      await this.usuarioRepository.updateById(loginContrasena.id_user, user)
      this.notificarEmail(user.nombre,user.correo,loginContrasena.clave_nueva, "CH");
      return true
    }else{
      return false;
    }

  }

  async recuperarContrasena(correo : string) : Promise<Usuario | null>{
    let user = await this.usuarioRepository.findOne({
      where:{
        correo : correo
      }
    });
    if(user){
      let contrasena = this.crearContrasena();
      user.clave = this.cifrarTexto(contrasena);
      await this.usuarioRepository.updateById(user._id, user)
      this.notificarEmail(user.nombre,user.correo,contrasena, "RC");
      return user;
    }else{
      return null;
    }

  }

  async notificarEmail(nombre: string, correo : string, clave: string, opc:string) : Promise<boolean>{
    var res = false;
    var sms="";
    var asunto="";

    if(opc =="CR"){
      sms= '<table align="center" width=60%><tr><td><center><b><font size="6px" color="blue" face="Comic Sans MS">Bienvenido a Inmobiliaria EQ1</font></b></center</td></tr><tr><td><font size="3px" face="Comic Sans MS"><br>Hola '+nombre+',<br><br>Ahora haces parte de la familia Inmobiliaria EQ1, tu cuenta se ha generado con éxito, estos son tus datos de acceso:<br><br></font></td></tr><td><font size="3px" color="red" face="Comic Sans MS"><b>Usuario: </b></font><font size="3px" face="Comic Sans MS">'+correo+'</font><br><font size="3px" color="red" face="Comic Sans MS"><b>Contraseña: </b></font><font size="3px" face="Comic Sans MS">'+clave+'</font></font><br><br></td></tr><tr><td><font size="3px" face="Comic Sans MS">Puedes acceder a la página y a nuestros servicios dando clic en el siguiente link: <a href="http://www.google.com">Inmobiliaria EQ1</a></font></td></tr></table>';
      asunto = 'Confimación cuenta creada ✔';
    }else if (opc == "CH"){
      sms = '<table align="center" width=60%><tr><td><center><b><font size="6px" color="blue" face="Comic Sans MS">Bienvenido a Inmobiliaria EQ1</font></b></center</td></tr><tr><td><font size="3px" face="Comic Sans MS"><br>Hola '+nombre+',<br><br>Tu cambio de contraseña ha sido éxitoso, Puedes continuar usando nuestros servicios accediendo con las siguientes credenciales: <br><br></font></td></tr><td><font size="3px" color="red" face="Comic Sans MS"><b>Usuario: </b></font><font size="3px" face="Comic Sans MS">'+correo+'</font><br><font size="3px" color="red" face="Comic Sans MS"><b>Contraseña: </b></font><font size="3px" face="Comic Sans MS">'+clave+'</font></font><br><br></td></tr><tr><td><font size="3px" face="Comic Sans MS">Puedes acceder a la página y a nuestros servicios dando clic en el siguiente link: <a href="http://www.google.com">Inmobiliaria EQ1</a></font></td></tr></table>';
      asunto = 'Confimación cambio de contraseña ✔'
    }else if( opc =="RC"){
      sms = '<table align="center" width=60%><tr><td><center><b><font size="6px" color="blue" face="Comic Sans MS">Bienvenido a Inmobiliaria EQ1</font></b></center</td></tr><tr><td><font size="3px" face="Comic Sans MS"><br>Hola '+nombre+',<br><br>Has solicitado la recuperación de tu cuenta y todo ha salido muy bien!!!, Puedes continuar usando nuestros servicios accediendo con las siguientes credenciales: <br><br></font></td></tr><td><font size="3px" color="red" face="Comic Sans MS"><b>Usuario: </b></font><font size="3px" face="Comic Sans MS">'+correo+'</font><br><font size="3px" color="red" face="Comic Sans MS"><b>Contraseña: </b></font><font size="3px" face="Comic Sans MS">'+clave+'</font></font><br><br></td></tr><tr><td><font size="3px" face="Comic Sans MS">Puedes acceder a la página y a nuestros servicios dando clic en el siguiente link: <a href="http://www.google.com">Inmobiliaria EQ1</a></font></td></tr></table>';
      asunto = 'Solicitud Recuperación de Cuenta ✔'
    }

    var constructMail = {
      from: 'misionticequipo1@gmail.com',
      to: correo,
      subject: asunto,
      html: sms,
    };

    transporter.sendMail(constructMail, function(error:any, info:any){
        if (error){
            console.log(error);
            //res.send(500, err.message);
        } else {
            console.log("Email send");
            //res.status(200).jsonp(req.body);
            res= true;
        }
    });
    return res;
  }

  async notificacionSms(nombre: string, correo : string, clave: string, destino:string) : Promise<boolean>{

  client.messages.create({
    body: 'Hola '+nombre+', bienvenid@ a InmobiliariaEq1.com, estas son tus credenciales de acceso Usuario: '+correo+' Clave: '+clave,
    from: '+17014017414',
    to: '+57'+destino
  }).then((message: any) => console.log(message));

  return true;
  }


}

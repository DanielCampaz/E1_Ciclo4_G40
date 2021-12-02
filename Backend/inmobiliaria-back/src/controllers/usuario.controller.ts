import { service } from '@loopback/core';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Login, Usuario} from '../models';
import { CambioContrasena } from '../models/cambio-contrasena.model';
import {UsuarioRepository} from '../repositories';
import { AdminContrasenasService } from '../services';

export class UsuarioController {
  constructor(
    @repository(UsuarioRepository)
    public usuarioRepository : UsuarioRepository,
    @service(AdminContrasenasService)
    public servicioContrasena : AdminContrasenasService
  ) {}

  @post('/usuarios')
  @response(200, {
    description: 'Usuario model instance',
    content: {'application/json': {schema: getModelSchemaRef(Usuario)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuario, {
            title: 'NewUsuario',
            exclude: ['_id'],
          }),
        },
      },
    })
    usuario: Omit<Usuario, '_id'>,
  ): Promise<Usuario> {
    let contrasena= this.servicioContrasena.crearContrasena();
    let contrasenaCifrada = this.servicioContrasena.cifrarTexto(contrasena);

    usuario.clave = contrasenaCifrada;
    let newUser=  await this.usuarioRepository.create(usuario);
    if (newUser){
      this.servicioContrasena.notificarEmail(newUser.nombre,newUser.correo,contrasena, "CR");   
      this.servicioContrasena.notificacionSms(newUser.nombre, newUser.correo, contrasena, newUser.telefono);
    }
    return newUser;
  }

  @get('/usuarios/count')
  @response(200, {
    description: 'Usuario model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Usuario) where?: Where<Usuario>,
  ): Promise<Count> {

    return this.usuarioRepository.count(where);
  }

  @get('/usuarios')
  @response(200, {
    description: 'Array of Usuario model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Usuario, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Usuario) filter?: Filter<Usuario>,
  ): Promise<Usuario[]> {
    return this.usuarioRepository.find(filter);
  }

  @patch('/usuarios')
  @response(200, {
    description: 'Usuario PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuario, {partial: true}),
        },
      },
    })
    usuario: Usuario,
    @param.where(Usuario) where?: Where<Usuario>,
  ): Promise<Count> {
    return this.usuarioRepository.updateAll(usuario, where);
  }

  @get('/usuarios/{id}')
  @response(200, {
    description: 'Usuario model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Usuario, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Usuario, {exclude: 'where'}) filter?: FilterExcludingWhere<Usuario>
  ): Promise<Usuario> {
    
    return this.usuarioRepository.findById(id, filter);
  }

  @patch('/usuarios/{id}')
  @response(204, {
    description: 'Usuario PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuario, {partial: true}),
        },
      },
    })
    usuario: Usuario,
  ): Promise<void> {
    await this.usuarioRepository.updateById(id, usuario);
  }

  @put('/usuarios/{id}')
  @response(204, {
    description: 'Usuario PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() usuario: Usuario,
  ): Promise<void> {
    await this.usuarioRepository.replaceById(id, usuario);
  }

  @del('/usuarios/{id}')
  @response(204, {
    description: 'Usuario DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.usuarioRepository.deleteById(id);
  }

  //Others Methods

  @post('/validar-usuario')
  @response(200, {
    description: 'Validación de usuarios',
    content: {'application/json': {schema: getModelSchemaRef(Login)}},
  })
  async validarUsuario(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Login, {
            title: 'Validar Usuario',
          }),
        },
      },
    })
    login : Login
  ): Promise<object | null> {
    let user = await this.usuarioRepository.findOne({
      where:{
        correo: login.usuario,
        clave : this.servicioContrasena.cifrarTexto(login.clave)
      }
    });
    if(user){
      //token
    }
    return user;
  }

  @post('/validar-existe-cuenta')
  @response(200, {
    description: 'Validación de cuentas de usuario',
    content: {'application/json': {schema: getModelSchemaRef(Login)}},
  })
  async validarExisCuenta(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Login, {
            title: 'Validar Cuentas de usuario',
          }),
        },
      },
    })
    login : Login
  ): Promise<boolean> {
    let user = await this.usuarioRepository.findOne({
      where:{
        correo: login.usuario
      }
    });
    if(user){
      return false;
    }
    return true;
  }

  @post('/cambiar-contrasena')
  @response(200, {
    description: 'Cambio de Contraseñas',
    content: {'application/json': {schema: getModelSchemaRef(CambioContrasena)}},
  })
  async cambiarContrasena(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CambioContrasena, {
            title: 'Cambiar Contraseña Usuario',
          }),
        },
      },
    })
    loginContrasena : CambioContrasena
  ): Promise<boolean> {
    let response = await this.servicioContrasena.cambiarContrasena(loginContrasena);
    return response;
  }

  @post('/recuperar-contrasena')
  @response(200, {
    description: 'Recuperación de Contraseñas',
    content: {'application/json': {schema: {}}},
  })
  async recuperarContrasena(
    @requestBody({
      content: {
        'application/json': {
        },
      },
    })
    correo : string
  ): Promise<Usuario | null> {
    let user = await this.servicioContrasena.recuperarContrasena(correo);
    return user;
  }

}

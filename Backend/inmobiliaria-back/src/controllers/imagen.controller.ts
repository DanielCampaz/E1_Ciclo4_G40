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
  Request,
  requestBody,
  response,
  Response,
  HttpErrors,
  oas,
  RestBindings,
} from '@loopback/rest';

import {Imagen} from '../models';
import {ImagenRepository} from '../repositories';
import{authenticate} from '@loopback/authentication';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import {promisify} from 'util';
import {Keys as keys} from '../dataConfig';
import { inject } from '@loopback/core';

const readdir = promisify(fs.readdir);

@authenticate('jwt')
export class ImagenController {
  constructor(
    @repository(ImagenRepository)
    public imagenRepository : ImagenRepository,
  ) {}

  @post('/cargarImagenes/{id_inmueble}', {
    responses:{
      200: {
        content: {
          'application/json': {
            schema: {
              type: 'object', 
            },
          },
        },
        description: 'Función para cargue de imagenes de los inmuebles ',
      },
    },
  })
  async cargarImagenInmueble(
      @inject(RestBindings.Http.RESPONSE) response : Response,
      @requestBody.file() request : Request,
      @param.path.string("id_inmueble") id_inmueble : string
    ): Promise<object | false> {
      const rutaImagen= path.join(__dirname, keys.carpetaImagenes)
      let res = await this.StoreFileToPath(rutaImagen, keys.nombreCampoImagen, request, response, keys.extPermitidasImagen);
      if (res){
        const nombre_archivo = response.req?.file?.filename;
        if (nombre_archivo){
          let img = new Imagen();
          img.src=nombre_archivo;
          img.id_inmueble= id_inmueble
          this.imagenRepository.save(img);
          return {filename: nombre_archivo};
        }
      }
    return res;
  }

  @get('/ListarArchivos/', {
    responses: {
      200: {
        content: {
          // string[]
          'application/json': {
            schema: {
              type: 'array',
              items: {
                type: 'string',
              },
            },
          },
        },
        description: 'Lista de imagenes',
      },
    },
  })
  async listarArchivos(): Promise<string[]> {
    //@param.path.number('type') type: number,) {
    const rutaCarpeta = path.join(__dirname, keys.carpetaImagenes);
    const archivos = await readdir(rutaCarpeta);
    return archivos;
  }

  /**

   * @param recordId
   * @param response
   */
  @get('/archivo/{filename}')
  @oas.response.file()
  async descargarArchivo(
    @param.path.string('filename') filename: string,
    @inject(RestBindings.Http.RESPONSE) response: Response,
  ) {
    const rutaCarpeta = path.join(__dirname, keys.carpetaImagenes);
    const archivo = this.ValidarNombreArchivo(rutaCarpeta, filename);
    response.download(archivo, rutaCarpeta);
    return response;
  }

 
  /**
   * Validate file names to prevent them goes beyond the designated directory
   * @param fileName - File name
   */
  private ValidarNombreArchivo(folder: string, file: string) {
    const resolved = path.resolve(folder, file);
    if (resolved.startsWith(folder)) return resolved;
    // The resolved file is outside sandbox
    throw new HttpErrors[400](`La ruta del archivo es inválida: ${file}`);
  }

  private GetMulterStorageConfig(path: string){
    var filename : string = '';
    const storage = multer.diskStorage({
      destination: function (req:any, file:any, cb:any){
        cb(null, path)
      },
      filename: function (req: any, file: any, cb:any) {
        filename = `${Date.now()}-${file.originalname}` 
        cb(null, filename);
      }
    });
    return storage;
  }

  private StoreFileToPath (storePath: string, fieldname: string, request: Request, response: Response, acceptedExt: string[]): Promise<object>{
    return new Promise<object>((resolve,reject)=>{
      const storage = this.GetMulterStorageConfig(storePath);
      const upload = multer({
        storage : storage,
        fileFilter: function(req: any, file: any, callback: any){
          var ext = path.extname(file.originalname).toUpperCase();
          if(acceptedExt.includes(ext)){
            return callback(null,true);
          }
          return callback(new HttpErrors[400]('El formato del archivo no es permitido.'))
        },
        limits: {
          fileSize: keys.tamMaxImagen
        }
      },
      ).single(fieldname);
      upload(request, response, (err:any) =>{
        if(err){
          reject(err);
        }
        resolve(response);
      });
    });
  }

  @post('/imagenes')
  @response(200, {
    description: 'Imagen model instance',
    content: {'application/json': {schema: getModelSchemaRef(Imagen)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Imagen, {
            title: 'NewImagen',
            exclude: ['_id'],
          }),
        },
      },
    })
    imagen: Omit<Imagen, '_id'>,
  ): Promise<Imagen> {
    return this.imagenRepository.create(imagen);
  }

  @get('/imagenes/count')
  @response(200, {
    description: 'Imagen model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Imagen) where?: Where<Imagen>,
  ): Promise<Count> {
    return this.imagenRepository.count(where);
  }

  @get('/imagenes')
  @response(200, {
    description: 'Array of Imagen model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Imagen, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Imagen) filter?: Filter<Imagen>,
  ): Promise<Imagen[]> {
    return this.imagenRepository.find(filter);
  }

  @patch('/imagenes')
  @response(200, {
    description: 'Imagen PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Imagen, {partial: true}),
        },
      },
    })
    imagen: Imagen,
    @param.where(Imagen) where?: Where<Imagen>,
  ): Promise<Count> {
    return this.imagenRepository.updateAll(imagen, where);
  }

  @get('/imagenes/{id}')
  @response(200, {
    description: 'Imagen model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Imagen, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Imagen, {exclude: 'where'}) filter?: FilterExcludingWhere<Imagen>
  ): Promise<Imagen> {
    return this.imagenRepository.findById(id, filter);
  }

  @patch('/imagenes/{id}')
  @response(204, {
    description: 'Imagen PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Imagen, {partial: true}),
        },
      },
    })
    imagen: Imagen,
  ): Promise<void> {
    await this.imagenRepository.updateById(id, imagen);
  }

  @put('/imagenes/{id}')
  @response(204, {
    description: 'Imagen PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() imagen: Imagen,
  ): Promise<void> {
    await this.imagenRepository.replaceById(id, imagen);
  }

  @del('/imagenes/{id}')
  @response(204, {
    description: 'Imagen DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.imagenRepository.deleteById(id);
  }
}

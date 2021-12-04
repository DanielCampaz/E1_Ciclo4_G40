import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Imagen,
  Inmueble,
} from '../models';
import {ImagenRepository} from '../repositories';
import {authenticate} from '@loopback/authentication';

@authenticate('jwt')
export class ImagenInmuebleController {
  constructor(
    @repository(ImagenRepository)
    public imagenRepository: ImagenRepository,
  ) { }

  @get('/imagens/{id}/inmueble', {
    responses: {
      '200': {
        description: 'Inmueble belonging to Imagen',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Inmueble)},
          },
        },
      },
    },
  })
  async getInmueble(
    @param.path.string('id') id: typeof Imagen.prototype._id,
  ): Promise<Inmueble> {
    return this.imagenRepository.inmueble(id);
  }
}

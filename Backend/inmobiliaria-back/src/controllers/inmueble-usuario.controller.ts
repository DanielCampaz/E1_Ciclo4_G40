import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Inmueble,
  Usuario,
} from '../models';
import {InmuebleRepository} from '../repositories';

export class InmuebleUsuarioController {
  constructor(
    @repository(InmuebleRepository)
    public inmuebleRepository: InmuebleRepository,
  ) { }

  @get('/inmuebles/{id}/usuario', {
    responses: {
      '200': {
        description: 'Usuario belonging to Inmueble',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Usuario)},
          },
        },
      },
    },
  })
  async getUsuario(
    @param.path.string('id') id: typeof Inmueble.prototype._id,
  ): Promise<Usuario> {
    return this.inmuebleRepository.usuario_id(id);
  }
}

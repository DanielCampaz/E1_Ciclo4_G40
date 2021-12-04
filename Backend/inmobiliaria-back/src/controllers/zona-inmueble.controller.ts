import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Zona,
  Inmueble,
} from '../models';
import {ZonaRepository} from '../repositories';

import {authenticate} from '@loopback/authentication';

@authenticate('jwt')
export class ZonaInmuebleController {
  constructor(
    @repository(ZonaRepository) protected zonaRepository: ZonaRepository,
  ) { }

  @get('/zonas/{id}/inmueble', {
    responses: {
      '200': {
        description: 'Zona has one Inmueble',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Inmueble),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Inmueble>,
  ): Promise<Inmueble> {
    return this.zonaRepository.zona(id).get(filter);
  }

  @post('/zonas/{id}/inmueble', {
    responses: {
      '200': {
        description: 'Zona model instance',
        content: {'application/json': {schema: getModelSchemaRef(Inmueble)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Zona.prototype._id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Inmueble, {
            title: 'NewInmuebleInZona',
            exclude: ['_id'],
            optional: ['id_zona']
          }),
        },
      },
    }) inmueble: Omit<Inmueble, '_id'>,
  ): Promise<Inmueble> {
    return this.zonaRepository.zona(id).create(inmueble);
  }

  @patch('/zonas/{id}/inmueble', {
    responses: {
      '200': {
        description: 'Zona.Inmueble PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Inmueble, {partial: true}),
        },
      },
    })
    inmueble: Partial<Inmueble>,
    @param.query.object('where', getWhereSchemaFor(Inmueble)) where?: Where<Inmueble>,
  ): Promise<Count> {
    return this.zonaRepository.zona(id).patch(inmueble, where);
  }

  @del('/zonas/{id}/inmueble', {
    responses: {
      '200': {
        description: 'Zona.Inmueble DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Inmueble)) where?: Where<Inmueble>,
  ): Promise<Count> {
    return this.zonaRepository.zona(id).delete(where);
  }
}

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
import {Inmueble} from '../models';
import {InmuebleRepository} from '../repositories';
import {authenticate} from '@loopback/authentication';

//@authenticate('jwt')
export class InmuebleController {
  constructor(
    @repository(InmuebleRepository)
    public inmuebleRepository : InmuebleRepository,
  ) {}

  @post('/inmuebles')
  @response(200, {
    description: 'Inmueble model instance',
    content: {'application/json': {schema: getModelSchemaRef(Inmueble)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Inmueble, {
            title: 'NewInmueble',
            exclude: ['_id'],
          }),
        },
      },
    })
    inmueble: Omit<Inmueble, '_id'>,
  ): Promise<Inmueble> {
    return this.inmuebleRepository.create(inmueble);
  }

  @get('/inmuebles/count')
  @response(200, {
    description: 'Inmueble model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Inmueble) where?: Where<Inmueble>,
  ): Promise<Count> {
    return this.inmuebleRepository.count(where);
  }

  @get('/inmuebles')
  @response(200, {
    description: 'Array of Inmueble model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Inmueble, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Inmueble) filter?: Filter<Inmueble>,
  ): Promise<Inmueble[]> {
    return this.inmuebleRepository.find(filter);
  }

  @patch('/inmuebles')
  @response(200, {
    description: 'Inmueble PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Inmueble, {partial: true}),
        },
      },
    })
    inmueble: Inmueble,
    @param.where(Inmueble) where?: Where<Inmueble>,
  ): Promise<Count> {
    return this.inmuebleRepository.updateAll(inmueble, where);
  }

  @get('/inmuebles/{id}')
  @response(200, {
    description: 'Inmueble model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Inmueble, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Inmueble, {exclude: 'where'}) filter?: FilterExcludingWhere<Inmueble>
  ): Promise<Inmueble> {
    return this.inmuebleRepository.findById(id, filter);
  }

  @patch('/inmuebles/{id}')
  @response(204, {
    description: 'Inmueble PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Inmueble, {partial: true}),
        },
      },
    })
    inmueble: Inmueble,
  ): Promise<void> {
    await this.inmuebleRepository.updateById(id, inmueble);
  }

  @put('/inmuebles/{id}')
  @response(204, {
    description: 'Inmueble PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() inmueble: Inmueble,
  ): Promise<void> {
    await this.inmuebleRepository.replaceById(id, inmueble);
  }

  @del('/inmuebles/{id}')
  @response(204, {
    description: 'Inmueble DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.inmuebleRepository.deleteById(id);
  }

  //Filters
  @get('/filtrosInmuebles/{by}/{desc}')
  @response(200, {
    description: 'Inmueble model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Inmueble, {includeRelations: true}),
      },
    },
  })
  async findFilter(
    @param.path.number('by') by: number,
    @param.path.string('desc') desc: string
  ): Promise<Inmueble[] | false> {
    let opc = Number(desc);
    switch (by) {
      case 1:
        return this.inmuebleRepository.find({where: {tipo: {like: desc}}});
        break;

      case 2:
        return this.inmuebleRepository.find({where: {n_habitaciones: desc}});
        break;

      case 3:
        return this.inmuebleRepository.find({where: {n_banos: desc}});
        break;

      case 4:        
        return this.inmuebleRepository.find({where: {precio: {gt : opc}}});
        break;
      case 5:
        return this.inmuebleRepository.find({where: {precio: {lt : opc}}});
        break;
    }
    return false;    
  }
}

import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Zona, ZonaRelations, Inmueble} from '../models';
import {InmuebleRepository} from './inmueble.repository';

export class ZonaRepository extends DefaultCrudRepository<
  Zona,
  typeof Zona.prototype._id,
  ZonaRelations
> {

  public readonly zona: HasOneRepositoryFactory<Inmueble, typeof Zona.prototype._id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('InmuebleRepository') protected inmuebleRepositoryGetter: Getter<InmuebleRepository>,
  ) {
    super(Zona, dataSource);
    this.zona = this.createHasOneRepositoryFactoryFor('zona', inmuebleRepositoryGetter);
    this.registerInclusionResolver('zona', this.zona.inclusionResolver);
  }
}

import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Imagen, ImagenRelations, Inmueble} from '../models';
import {InmuebleRepository} from './inmueble.repository';

export class ImagenRepository extends DefaultCrudRepository<
  Imagen,
  typeof Imagen.prototype._id,
  ImagenRelations
> {

  public readonly inmueble: BelongsToAccessor<Inmueble, typeof Imagen.prototype._id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('InmuebleRepository') protected inmuebleRepositoryGetter: Getter<InmuebleRepository>,
  ) {
    super(Imagen, dataSource);
    this.inmueble = this.createBelongsToAccessorFor('inmueble', inmuebleRepositoryGetter,);
    this.registerInclusionResolver('inmueble', this.inmueble.inclusionResolver);
  }
}

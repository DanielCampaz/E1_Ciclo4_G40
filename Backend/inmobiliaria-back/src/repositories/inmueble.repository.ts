import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Inmueble, InmuebleRelations, Imagen} from '../models';
import {ImagenRepository} from './imagen.repository';

export class InmuebleRepository extends DefaultCrudRepository<
  Inmueble,
  typeof Inmueble.prototype._id,
  InmuebleRelations
> {

  public readonly imagenes: HasManyRepositoryFactory<Imagen, typeof Inmueble.prototype._id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('ImagenRepository') protected imagenRepositoryGetter: Getter<ImagenRepository>,
  ) {
    super(Inmueble, dataSource);
    this.imagenes = this.createHasManyRepositoryFactoryFor('imagenes', imagenRepositoryGetter,);
    this.registerInclusionResolver('imagenes', this.imagenes.inclusionResolver);
  }
}

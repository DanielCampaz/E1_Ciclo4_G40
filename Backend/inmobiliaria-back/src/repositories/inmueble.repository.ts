import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory, BelongsToAccessor} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Inmueble, InmuebleRelations, Imagen, Usuario} from '../models';
import {ImagenRepository} from './imagen.repository';
import {UsuarioRepository} from './usuario.repository';

export class InmuebleRepository extends DefaultCrudRepository<
  Inmueble,
  typeof Inmueble.prototype._id,
  InmuebleRelations
> {

  public readonly imagenes: HasManyRepositoryFactory<Imagen, typeof Inmueble.prototype._id>;

  public readonly usuario_id: BelongsToAccessor<Usuario, typeof Inmueble.prototype._id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('ImagenRepository') protected imagenRepositoryGetter: Getter<ImagenRepository>, @repository.getter('UsuarioRepository') protected usuarioRepositoryGetter: Getter<UsuarioRepository>,
  ) {
    super(Inmueble, dataSource);
    this.usuario_id = this.createBelongsToAccessorFor('usuario_id', usuarioRepositoryGetter,);
    this.registerInclusionResolver('usuario_id', this.usuario_id.inclusionResolver);
    this.imagenes = this.createHasManyRepositoryFactoryFor('imagenes', imagenRepositoryGetter,);
    this.registerInclusionResolver('imagenes', this.imagenes.inclusionResolver);
  }
}

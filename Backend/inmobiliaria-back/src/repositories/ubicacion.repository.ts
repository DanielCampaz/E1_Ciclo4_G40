import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Ubicacion, UbicacionRelations} from '../models';

export class UbicacionRepository extends DefaultCrudRepository<
  Ubicacion,
  typeof Ubicacion.prototype._id,
  UbicacionRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Ubicacion, dataSource);
  }
}

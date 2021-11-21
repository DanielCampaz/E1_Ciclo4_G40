import {Entity, model, property} from '@loopback/repository';

@model()
export class Ubicacion extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  _id?: string;

  @property({
    type: 'string',
    required: true,
  })
  zona: string;

  @property({
    type: 'string',
    required: true,
  })
  barrio: string;

  constructor(data?: Partial<Ubicacion>) {
    super(data);
  }
}

export interface UbicacionRelations {
  // describe navigational properties here
}

export type UbicacionWithRelations = Ubicacion & UbicacionRelations;

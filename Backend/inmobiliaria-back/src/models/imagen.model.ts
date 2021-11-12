import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Inmueble} from './inmueble.model';

@model()
export class Imagen extends Entity {
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
  src: string;

  @belongsTo(() => Inmueble, {name: 'inmueble'})
  id_inmueble: string;

  constructor(data?: Partial<Imagen>) {
    super(data);
  }
}

export interface ImagenRelations {
  // describe navigational properties here
}

export type ImagenWithRelations = Imagen & ImagenRelations;

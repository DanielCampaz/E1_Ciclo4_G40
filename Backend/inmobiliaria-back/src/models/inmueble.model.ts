import {Entity, model, property, hasMany, belongsTo} from '@loopback/repository';
import {Imagen} from './imagen.model';
import {Usuario} from './usuario.model';

@model()
export class Inmueble extends Entity {
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
  descripcion: string;

  @property({
    type: 'string',
    required: true,
  })
  tipo: string;

  @property({
    type: 'string',
    required: true,
  })
  n_habitaciones: string;

  @property({
    type: 'string',
    required: true,
  })
  n_banos: string;

  @property({
    type: 'number',
    required: true,
  })
  precio: number;

  @property({
    type: 'string',
    required: true,
  })
  t_pub: string;

  @property({
    type: 'string',
  })
  id_zona?: string;

  @hasMany(() => Imagen, {keyTo: 'id_inmueble'})
  imagenes: Imagen[];

  @belongsTo(() => Usuario, {name: 'usuario_id'})
  id_usuario: string;

  constructor(data?: Partial<Inmueble>) {
    super(data);
  }
}

export interface InmuebleRelations {
  // describe navigational properties here
}

export type InmuebleWithRelations = Inmueble & InmuebleRelations;

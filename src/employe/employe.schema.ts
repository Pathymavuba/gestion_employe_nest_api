import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EmployeDocument = Employe & Document;
@Schema()
export class Employe {
  @Prop()
  nom: string;

  @Prop()
  age: number;

  @Prop()
  service: string;
}

export const EmployeSchema = SchemaFactory.createForClass(Employe);

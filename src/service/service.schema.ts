import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ServiceDocument = Service & Document;
//service is a type for verifying

@Schema()
export class Service {
  @Prop()
  libelle: string;

  @Prop({ default: Date.now })
  date_added: Date;
}

export const ServiceSchema = SchemaFactory.createForClass(Service);

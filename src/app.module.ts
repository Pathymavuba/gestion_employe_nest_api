import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServiceController } from './service/service.controller';
import { ServiceService } from './service/service.service';
import { ServiceSchema } from './service/service.schema';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.URL_DB),
    MongooseModule.forFeature([{ name: 'service', schema: ServiceSchema }]),
  ],
  controllers: [ServiceController],
  providers: [ServiceService],
})
export class AppModule {}

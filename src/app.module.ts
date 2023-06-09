import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServiceController } from './service/service.controller';
import { ServiceService } from './service/service.service';
import { ServiceSchema } from './service/service.schema';
import { EmployeSchema } from './employe/employe.schema';
import { EmployeController } from './employe/employe.controller';
import { EmployeService } from './employe/employe.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.URL_DB),
    MongooseModule.forFeature([
      { name: 'service', schema: ServiceSchema },
      { name: 'employe', schema: EmployeSchema },
    ]),
  ],
  controllers: [ServiceController, EmployeController],
  providers: [ServiceService, EmployeService],
})
export class AppModule {}

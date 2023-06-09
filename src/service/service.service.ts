import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ServiceDocument } from './service.schema';
import { CreateServiceDto } from './dto/create_service.dto';

@Injectable()
export class ServiceService {
  constructor(
    @InjectModel('service')
    private readonly serviceModel: Model<ServiceDocument>,
  ) {}

  //create service
  async createService(
    createServiceDto: CreateServiceDto,
  ): Promise<ServiceDocument> {
    const service = new this.serviceModel(createServiceDto);
    return service.save();
  }
}

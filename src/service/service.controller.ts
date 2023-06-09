import { Body, Controller, Post } from '@nestjs/common';
import { ServiceService } from './service.service';
import { CreateServiceDto } from './dto/create_employe.dto';

@Controller()
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Post()
  createService(@Body() creatServiceDto: CreateServiceDto) {
    return this.serviceService.createService(creatServiceDto);
  }
}

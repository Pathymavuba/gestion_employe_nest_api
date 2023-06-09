import { Body, Controller, Post, Res } from '@nestjs/common';
import { ServiceService } from './service.service';
import { CreateServiceDto } from './dto/create_employe.dto';

@Controller()
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Post()
  async createService(
    @Res() response,
    @Body() creatServiceDto: CreateServiceDto,
  ) {
    const service = await this.serviceService.createService(creatServiceDto);
    return response
      .status(201)
      .json({ message: 'service created successfully', service });
  }
}

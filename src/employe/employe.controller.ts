import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { EmployeService } from './employe.service';
import { CreateEmployeDto } from './dto/create_employe.dto';

@Controller()
export class EmployeController {
  constructor(private readonly employeService: EmployeService) {}

  @Post('employe')
  async createEmploye(
    @Res() response,
    @Body() createEmployeDto: CreateEmployeDto,
  ) {
    const employe = await this.employeService.createEmploye(createEmployeDto);
    return response
      .status(201)
      .json({ message: 'employé created successfully', employe });
  }

  @Get('employe')
  async readEmploye() {
    return this.employeService.readEmploye();
  }
}

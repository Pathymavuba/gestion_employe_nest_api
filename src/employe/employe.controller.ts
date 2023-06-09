import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { EmployeService } from './employe.service';
import { CreateEmployeDto } from './dto/create_employe.dto';
import { UpdateEmployeDto } from './dto/update_employe.dto';

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

  @Get('employe/:id')
  async readOneEmploye(@Param('id') id: string) {
    return this.employeService.readOneEmploye(id);
  }

  @Put('employe/:id')
  async updateEmployee(
    @Param('id') id: string,
    @Body() updateEmploye: UpdateEmployeDto,
  ) {
    return this.employeService.updateEmployee(id, updateEmploye);
  }

  @Delete('employe/:id')
  async deleteEmploye(@Param('id') id: string) {
    return this.employeService.deleteEmploye(id);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employe, EmployeDocument } from './employe.schema';
import { CreateEmployeDto } from './dto/create_employe.dto';

@Injectable()
export class EmployeService {
  constructor(
    @InjectModel('employe')
    private readonly employeModel: Model<EmployeDocument>,
  ) {}

  /**
   *
   * @param createEmployeDto
   * @returns
   */
  //create a new employee
  createEmploye(createEmployeDto: CreateEmployeDto): Promise<Employe> {
    const employe = new this.employeModel(createEmployeDto);
    return employe.save();
  }

  //get Employe
  async readEmploye() {
    return this.employeModel
      .find({})
      .populate({ path: 'service', select: 'libelle' })
      .then((employe) => {
        if (employe.length >= 1) {
          return employe;
        } else return 'no employee found';
      })
      .catch((err) => console.log(err));
  }

  /**
   *
   * @param {string} id
   * @returns
   */
  //get one employe
  async readOneEmploye(id: string) {
    return this.employeModel
      .findById({ _id: id })
      .populate({ path: 'service', select: 'libelle' })
      .then((employe) => {
        if (employe) {
          return employe;
        } else return `no employe with that ${id}`;
      })
      .catch((err) => console.log(err));
  }

  /**
   * @param {string} id
   */
  //update employe
  async updateEmployee(id, data): Promise<Employe> {
    return this.employeModel.findByIdAndUpdate(id, data, {
      new: true,
    });
  }

  /**
   * @param {string} id
   */
  //delete user
  async deleteEmploye(id) {
    return this.employeModel.deleteOne({ _id: id });
  }
}

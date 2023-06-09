import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EmployeDocument } from './employe.schema';
import { CreateEmployeDto } from './dto/create_employe.dto';

@Injectable()
export class EmployeService {
  constructor(
    @InjectModel('employe')
    private readonly employeModel: Model<EmployeDocument>,
  ) {}

  //create a new employee
  createEmploye(createEmployeDto: CreateEmployeDto): Promise<EmployeDocument> {
    const employe = new this.employeModel(createEmployeDto);
    return employe.save();
  }

  //get Employe
  async readEmploye() {
    return this.employeModel
      .find({})
      .populate({ path: 'service', select: 'libelle' })
      .then((employe) => {
        if (employe) {
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
}

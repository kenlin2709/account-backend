import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async createNewUser(
    firstName: string,
    lastName: string,
    userName: string,
    password: string,
  ) {
    const newProduct = new this.userModel({
      firstName,
      lastName,
      userName,
      password,
    });
    const newUser = await newProduct.save();
    console.log(newUser);
    return newUser.id;
  }

  async getAllUsers(){
    const allUsers = await this.userModel.find();
    return allUsers;
  }
}

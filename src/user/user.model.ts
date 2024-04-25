import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    userName: {type: String, required: true},
    password: {type: String, required: true},
})

export interface User {
  userID: string;
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
}
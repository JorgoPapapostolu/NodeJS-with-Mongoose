import mongoose, { Schema, model } from 'mongoose';

interface IStudent {
    name: string;
    first_name: string;
    email: string;
}

const studentSchema: Schema = new Schema({
    name: {
      type: String,
      required: true,
      trim: true,
    },
    first_name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
  });
  
export default mongoose.model<IStudent>('Student', studentSchema);
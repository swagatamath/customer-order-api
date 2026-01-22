import { Schema, model, Document } from "mongoose";

export interface ICustomer extends Document {
  name: string;
  email: string;
  phone?: string;
}

const customerSchema = new Schema<ICustomer>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Customer = model<ICustomer>("Customer", customerSchema);

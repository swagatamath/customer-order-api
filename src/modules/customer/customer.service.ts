import { Customer } from "./customer.model";
import { AppError } from "../../utils/AppError";

export const createCustomer = async (data: any) => {
  return Customer.create(data);
};

export const getCustomers = async () => {
  return Customer.find();
};

export const getCustomerById = async (id: string) => {
  const customer = await Customer.findById(id);
  if (!customer) throw new AppError("Customer not found", 404);
  return customer;
};

export const updateCustomer = async (id: string, data: any) => {
  const customer = await Customer.findByIdAndUpdate(id, data, { new: true });
  if (!customer) throw new AppError("Customer not found", 404);
  return customer;
};

export const deleteCustomer = async (id: string) => {
  const customer = await Customer.findByIdAndDelete(id);
  if (!customer) throw new AppError("Customer not found", 404);
  return customer;
};

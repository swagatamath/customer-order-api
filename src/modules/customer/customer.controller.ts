import { Request, Response } from "express";
import { asyncHandler } from "../../middleware/asyncHandler";
import * as customerService from "./customer.service";

export const createCustomer = asyncHandler(
  async (req: Request, res: Response) => {
    const customer = await customerService.createCustomer(req.body);
    res.status(201).json(customer);
  }
);

export const getCustomers = asyncHandler(
  async (_req: Request, res: Response) => {
    const customers = await customerService.getCustomers();
    res.status(200).json(customers);
  }
);

export const getCustomerById = asyncHandler(
  async (req: Request, res: Response) => {
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const customer = await customerService.getCustomerById(id);
    res.status(200).json(customer);
  }
);

export const updateCustomer = asyncHandler(
  async (req: Request, res: Response) => {
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const customer = await customerService.updateCustomer(
      id,
      req.body
    );
    res.status(200).json(customer);
  }
);

export const deleteCustomer = asyncHandler(
  async (req: Request, res: Response) => {
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const customer = await customerService.deleteCustomer(id);
    res.status(200).json(customer);
  }
);

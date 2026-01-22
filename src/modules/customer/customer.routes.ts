import { Router } from "express";
import * as customerController from "./customer.controller";
import { authMiddleware } from "../../middleware/auth.middleware";
import { validate } from "../../middleware/validate.middleware";
import { createCustomerSchema } from "./customer.schema";

const router = Router();

router.post(
  "/",
  authMiddleware,
  validate(createCustomerSchema),
  customerController.createCustomer
);

router.get("/", customerController.getCustomers);
router.get("/:id", customerController.getCustomerById);
router.put("/:id", authMiddleware, customerController.updateCustomer);
router.delete("/:id", authMiddleware, customerController.deleteCustomer);

export default router;

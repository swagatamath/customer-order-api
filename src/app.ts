import express from "express";
import authRoutes from "./modules/auth/auth.routes";
import customerRoutes from "./modules/customer/customer.routes";
import { errorHandler } from "./middleware/errorHandler";

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/customers", customerRoutes);

// error middleware LAST
app.use(errorHandler);

export default app;

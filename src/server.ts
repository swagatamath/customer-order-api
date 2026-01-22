import app from "./app";
import connectDB from "./config/database";
import { env } from "./config/env";

connectDB();

app.listen(env.PORT, () => {
  console.log(`Server running on port ${env.PORT}`);
});
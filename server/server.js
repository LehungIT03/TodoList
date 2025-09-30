import express from "express";
import { ConnectDB } from "./connect/connectdb.js";
import dotenv from "dotenv";
import todoRoutes from "./routes/todoRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", todoRoutes);
const PORT = process.env.PORT || 5000;
async function startServer() {
  try {
    await ConnectDB(); // chờ kết nối MongoDB
    app.listen(PORT, () => {
      console.log(` Server kết nối tại port ${PORT}`);
    });
  } catch (error) {
    console.error(" Lỗi kết nối đến server :", error.message);
  }
}
startServer();

import express from "express";
import dotenv from "dotenv";
import { dbConnect } from "./lib/db";
import forumRoutes from "./routes/forumRoutes";

dotenv.config();

const app = express();

app.use(forumRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello" });
});

const startServer = async () => {
  try {
    await dbConnect(); // wait for DB connection

    app.listen(process.env.PORT!, () => {
      console.log(`http://localhost:${process.env.PORT!}`);
    });
  } catch (error) {
    console.error("Failed to connect to DB:", error);
    process.exit(1); // crash fast (good practice)
  }
};

startServer();

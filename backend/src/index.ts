import express, { Request, Response } from "express";
import cors from "cors";
import path from "path";
import "dotenv/config";
import graphRoutes from "./routes/AzureRoute";
import openaiRoutes from "./routes/AzureOpenAI";

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use(express.static(path.join(__dirname, "../../frontend/dist")));

app.use("/api/graph", graphRoutes);
app.use("/api/openai", openaiRoutes);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/health", async (req: Request, res: Response) => {
  res.send({ message: "health OK!" });
});
app.listen(7000, () => {
  console.log("server running on localhost:7000");
});

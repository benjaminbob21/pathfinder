import { Request, Response } from "express";
import express from "express";
import {
  fetchCalendarData,
  fetchEmailMetadata,
  fetchResumeData,
} from "../controllers/AzureGraph";

const router = express.Router();

router.get("/calendar", async (req: Request, res: Response) => {
  const accessToken = req.headers.authorization?.split(" ")[1];
  if (!accessToken) {
    res.status(401).send("Unauthorized");
    return;
  }
  try {
    const data = await fetchCalendarData(accessToken);
    res.json(data);
  } catch (error: any) {
    res.status(500).send(error.message || "An unknown error occurred");
  }
});

router.get("/email", async (req: Request, res: Response) => {
    console.log("Fetching email metadata");
  const accessToken = req.headers.authorization?.split(" ")[1];
  if (!accessToken) {
    res.status(401).send("Unauthorized");
    return;
  }
  try {
    const data = await fetchEmailMetadata(accessToken);
    res.json(data);
  } catch (error: any) {
    res.status(500).send(error.message || "An unknown error occurred");
  }
});

router.get("/resume", async (req: Request, res: Response) => {
  const accessToken = req.headers.authorization?.split(" ")[1];
  if (!accessToken) {
    res.status(401).send("Unauthorized");
    return;
  }
  try {
    const data = await fetchResumeData(accessToken);
    res.json(data);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});

export default router;

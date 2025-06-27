import express from "express";

import { AzureOpenAI } from "openai";
const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
const apiVersion = process.env.AZURE_OPENAI_API_VERSION;
const deployment = process.env.AZURE_OPENAI_DEPLOYMENT;
const apiKey = process.env.AZURE_OPENAI_API_KEY;

const client = new AzureOpenAI({
  endpoint,
  apiKey,
  apiVersion,
  deployment,
});

const router = express.Router();

router.post("/analyze", async (req, res) => {
  const { calendarData, emailData, resumeData } = req.body;
  const prompt = `Analyze the following data and provide coaching insights:\n\nCalendar Data: ${JSON.stringify(
    calendarData
  )}\n\nEmail Data: ${JSON.stringify(
    emailData
  )}\n\nResume Data: ${JSON.stringify(resumeData)}`;
  try {
    const response = await client.chat.completions.create({
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: prompt },
      ],
      max_tokens: 4096,
      temperature: 1.0,
      top_p: 1.0,
      model: "gpt-4o",
    });
    res.json(response.choices[0].message.content);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});

export default router;

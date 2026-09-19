import { Configuration, OpenAIApi } from "openai";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAIApi(new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
}));

app.post("/chat", async (req, res) => {
  const userMsg = req.body.message;

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: \`Sample Message`
      },
      { role: "user", content: userMsg }
    ],
    temperature: 0.9,
    max_tokens: 300
  });

  const reply = response.data.choices[0].message.content;
  res.json({ reply });
});

export default app;

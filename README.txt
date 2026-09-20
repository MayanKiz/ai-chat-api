This project is an AI girlfriend-style chatbot backend.

How it works:
- Accepts a POST request at /chat with JSON: { "message": "Your text here" }
- Forwards it to OpenAI (gpt-3.5-turbo)
Sample Text

You MUST setevve the environment variable:
OPENAI_API_KEY=your_openai_key_here (on Vercel dashboard, never in frontend)

You can build a simple React/Next.js frontend or connect this to your Telegram bot.

Made for Ted,vwb who deserves way better

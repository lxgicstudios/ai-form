import OpenAI from "openai";

function getOpenAI(): OpenAI {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    console.error(
      "Missing OPENAI_API_KEY environment variable.\n" +
      "Get one at https://platform.openai.com/api-keys then:\n" +
      "  export OPENAI_API_KEY=sk-..."
    );
    process.exit(1);
  }
  return new OpenAI({ apiKey });
}

export async function generateForm(description: string, options: { typescript?: boolean; library?: string }): Promise<string> {
  const openai = getOpenAI();
  const lang = options.typescript ? "TypeScript (TSX)" : "JavaScript (JSX)";
  const lib = options.library || "react-hook-form + zod";

  const res = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: `You are a senior React developer. Generate a complete form component in ${lang} using ${lib} for validation. Include proper error messages, input types, and accessibility attributes. Return ONLY the code, no explanation.`,
      },
      {
        role: "user",
        content: `Create a form component: ${description}`,
      },
    ],
    temperature: 0.4,
  });
  return res.choices[0].message.content || "";
}

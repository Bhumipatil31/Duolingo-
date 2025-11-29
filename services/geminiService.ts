import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key is missing");
  }
  return new GoogleGenAI({ apiKey });
};

export const generateDailyInsight = async (topic: string): Promise<string> => {
  try {
    const ai = getClient();
    const model = 'gemini-2.5-flash';
    
    const prompt = `
      You are a friendly, encouraging language tutor.
      Generate a short, fun, 1-sentence cultural fact or a quick grammar tip about "${topic}" in Spanish.
      Keep it under 20 words. Use emojis.
      Tone: Playful, warm, soft.
    `;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
    });

    return response.text || "Keep up the great work! 🌟";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Learning a new language opens new worlds! 🌍";
  }
};

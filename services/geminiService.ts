import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

let chatSession: Chat | null = null;
let genAI: GoogleGenAI | null = null;

const initializeChat = () => {
  if (chatSession) return chatSession;
  
  // Important: In a real production app, ensure API_KEY is handled securely (e.g. backend proxy).
  // For this client-side demo, we rely on the environment variable.
  const apiKey = process.env.API_KEY;
  
  if (!apiKey) {
    console.error("API_KEY is missing from environment variables.");
    return null;
  }

  try {
    genAI = new GoogleGenAI({ apiKey });
    
    chatSession = genAI.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    
    return chatSession;
  } catch (error) {
    console.error("Failed to initialize Gemini:", error);
    return null;
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  const chat = initializeChat();
  
  if (!chat) {
    return "I'm sorry, I cannot connect to my brain right now (API Key missing or invalid configuration). Please try contacting Alex directly via email.";
  }

  try {
    const result: GenerateContentResponse = await chat.sendMessage({
      message: message
    });
    return result.text || "I didn't have a response for that.";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "I encountered an error while thinking. Please try again later.";
  }
};
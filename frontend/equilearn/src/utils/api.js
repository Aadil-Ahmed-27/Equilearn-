// src/utils/api.js

const API_BASE_URL = "http://localhost:8000";

export async function processVoiceCommand(audioBlob) {
  const formData = new FormData();
  formData.append("audio", audioBlob, "voice-command.webm");

  try {
    const response = await fetch(`${API_BASE_URL}/process-voice-command`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to process voice command");
    }

    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    return { action: "unknown" };
  }
}

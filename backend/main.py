# app.py
from fastapi import FastAPI, UploadFile, File, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
import tempfile
import os
import json
from pydantic import BaseModel
from typing import Dict, Any

from models.whisper import transcribe_audio
from models.ollama import get_command_intent

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify your frontend domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class CommandResponse(BaseModel):
    action: str
    target: str = None
    data: Dict[str, Any] = None

@app.post("/process-voice-command", response_model=CommandResponse)
async def process_voice_command(audio: UploadFile = File(...)):
    # Save the uploaded audio file temporarily
    with tempfile.NamedTemporaryFile(delete=False, suffix=".webm") as temp_audio:
        temp_audio.write(await audio.read())
        temp_path = temp_audio.name
    
    try:
        # Step 1: Transcribe audio using Whisper
        transcription = transcribe_audio(temp_path)
        print(f"Transcription: {transcription}")
        
        # Step 2: Process transcription with Ollama LLM
        command_intent = get_command_intent(transcription)
        print(f"Command intent: {command_intent}")
        
        # Return the parsed command
        return command_intent
    finally:
        # Clean up the temporary file
        os.unlink(temp_path)

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app:app", host="0.0.0.0", port=8000, reload=True)
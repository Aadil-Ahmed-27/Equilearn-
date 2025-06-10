# models/whisper.py
import whisper
import tempfile
import os

# Load the Whisper model - using the base model for balance of speed and accuracy
model = whisper.load_model("base.en")

def transcribe_audio(audio_path):
    """
    Transcribe audio using OpenAI's Whisper model
    
    Args:
        audio_path: Path to the audio file
        
    Returns:
        str: Transcribed text
    """
    try:
        # Transcribe the audio
        result = model.transcribe(audio_path)
        return result["text"].strip()
    except Exception as e:
        print(f"Error transcribing audio: {e}")
        return ""
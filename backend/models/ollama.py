import requests
import json
import re
import os

# Set your Gemini API key here or use an environment variable
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "AIzaSyDndVq1eOwfOeKJ8P7ydN0sKRZG4bl7rO8")

# Gemini API endpoint
GEMINI_API_URL = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={GEMINI_API_KEY}"

# Define the enhanced prompt template
PROMPT_TEMPLATE = """
You are a voice-command parser. Given a user’s spoken request, you MUST return exactly one valid JSON object and nothing else.

The JSON must have:
• “action”: one of “navigate”, “search”, “toggle”, “back”, “home”, or “unknown”.
• If action == “navigate”, include “target” (string) starting with “/”.
• If action == “search”, include “data”: { "query": <string> }.
• Otherwise, only “action” is required.

Supported routes:
/courses
/courses/{courseId}
/courses/{courseId}/materials
/courses/{courseId}/materials/{materialId}
/courses/{courseId}/videos
/courses/{courseId}/videos/{videoId}

• Convert any spoken numbers (“one”, “two”, “twelve”) into digits.
• Always use slash-prefixed targets (e.g. “/courses/12/materials/3”).
• If the intent is unclear or unsupported, respond with { "action": "unknown" }.

Examples:
Input: "Go to the courses page"
Output: {"action":"navigate","target":"/courses"}

Input: "Open material three of course twelve"
Output: {"action":"navigate","target":"/courses/12/materials/3"}

Input: "Back"
Output: {"action":"back"}

Transcribed text: "{text}"
"""

def get_command_intent(transcription):
    """
    Use Gemini API to interpret the transcribed text and extract command intent
    """
    try:
        prompt = PROMPT_TEMPLATE.replace("{text}", transcription)

        response = requests.post(
            GEMINI_API_URL,
            headers={"Content-Type": "application/json"},
            json={
                "contents": [
                    {
                        "role": "user",
                        "parts": [{"text": prompt}]
                    }
                ]
            }
        )

        if response.status_code == 200:
            data = response.json()
            candidates = data.get("candidates", [])
            if not candidates:
                return {"action": "unknown"}

            response_text = candidates[0]["content"]["parts"][0]["text"]

            start_idx = response_text.find('{')
            end_idx = response_text.rfind('}') + 1
            if start_idx >= 0 and end_idx > start_idx:
                json_str = response_text[start_idx:end_idx]
                json_str = json_str.replace(',}', '}').replace(',]', ']')
                command = json.loads(json_str)

                if not isinstance(command, dict) or "action" not in command:
                    return {"action": "unknown"}

                print(f"Successfully parsed command: {command}")
                return command
            else:
                print(f"No valid JSON in response: {response_text}")
                return construct_fallback_command(transcription)

        else:
            print(f"Gemini API error: {response.status_code} - {response.text}")
            return {"action": "unknown"}

    except Exception as e:
        print(f"Exception in get_command_intent: {e}")
        return {"action": "unknown"}


def construct_fallback_command(text):
    """
    Basic keyword + pattern matching fallback if LLM fails.
    """
    text = text.lower()
    course_id = re.search(r"course\s+(\d+)", text)
    material_id = re.search(r"material\s+(\d+)", text)
    video_id = re.search(r"video\s+(\d+)", text)

    if "back" in text:
        return {"action": "back"}
    elif "home" in text:
        return {"action": "home"}
    elif "search" in text:
        query = text.replace("search", "").replace("for", "").strip()
        return {"action": "search", "data": {"query": query}}

    if course_id and material_id:
        return {
            "action": "navigate",
            "target": f"/courses/{course_id.group(1)}/materials/{material_id.group(1)}"
        }
    elif course_id and video_id:
        return {
            "action": "navigate",
            "target": f"/courses/{course_id.group(1)}/videos/{video_id.group(1)}"
        }
    elif course_id and "material" in text:
        return {
            "action": "navigate",
            "target": f"/courses/{course_id.group(1)}/materials"
        }
    elif course_id and "video" in text:
        return {
            "action": "navigate",
            "target": f"/courses/{course_id.group(1)}/videos"
        }
    elif course_id:
        return {
            "action": "navigate",
            "target": f"/courses/{course_id.group(1)}"
        }
    elif "courses" in text:
        return {
            "action": "navigate",
            "target": "/courses"
        }

    return {"action": "unknown"}

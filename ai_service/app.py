from flask import Flask, request, jsonify
import os
from dotenv import load_dotenv
import google.generativeai  # Correct import
from flask_cors import CORS

load_dotenv()
app = Flask(__name__)
CORS(app)

# No need to instantiate anything
# gen_ai = GoogleGenerativeAI()  # Remove this line

@app.route("/ask", methods=["POST"])
def ask():
    data = request.get_json()
    user_message = data.get("message")

    model = google.generativeai.getGenerativeModel(model="gemini-pro")  # Use google.generativeai directly
    result = model.generateContent({"contents": [{"role": "user", "parts": [{"text": user_message}]}]})

    reply = result.response.candidates[0].content.parts[0].text
    return jsonify({"reply": reply})

if __name__ == "__main__":
    app.run(port=5050)



from flask import Flask, request, jsonify
from flask_cors import CORS
from google import genai
import os

app = Flask(__name__)
CORS(app)  # Разрешаем запросы с React

# Настройка Gemini
API_KEY = "AIzaSyD3ImT61znfxa92L5XJbx6w2CQHxxw0R-0"
client = genai.Client(api_key=API_KEY)

@app.route('/api/ask', methods=['POST'])
def ask_gemini():
    data = request.json
    user_query = data.get("question")

    if not user_query:
        return jsonify({"error": "No question provided"}), 400

    try:
        # Запрос к Gemini
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=user_query
        )

        # Возвращаем чистый JSON
        return jsonify({
            "status": "success",
            "question": user_query,
            "answer": response.text,
            "model": "gemini-2.5-flash"
        })

    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

if __name__ == '__main__':
    app.run(port=5001, debug=True)
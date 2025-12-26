from openai import OpenAI
from dotenv import load_dotenv
import os
load_dotenv()

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY") or "")

response = client.chat.completions.create(
    model="gpt-4.1-mini",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Explain Python lists in simple terms."}
    ]
)

print(response.choices[0].message.content)

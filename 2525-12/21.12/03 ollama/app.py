import ollama

resp = ollama.chat(
    model='gemma3:4b',
    messages=[
        {'role': 'system', 'content': 'Answer briefly and to the point.'},
        {'role': 'user', 'content': 'What time is it now in Austria?'},
    ],
)
print(resp['message']['content'])
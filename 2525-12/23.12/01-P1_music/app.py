from flask import Flask, render_template, request
import pandas as pd
from sklearn.tree import DecisionTreeClassifier
import joblib
import os

app = Flask(__name__, template_folder='frontend')

music_file = 'music.csv'
model_file = 'our_pridction.joblib'

if os.path.exists(model_file):
    model = joblib.load(model_file)
else:

    music_file = 'music.csv'
    music_dt = pd.read_csv(music_file)

    X = music_dt.drop(columns=['genre'])
    Y = music_dt['genre']

    model = DecisionTreeClassifier()
    model.fit(X, Y)

    joblib.dump(model, model_file)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        age = int(request.form['age'])
        gender = int(request.form['gender'])
        genre = request.form.get('genre', '').strip()

       
        if genre:


            new_data = pd.DataFrame([[age, gender, genre]], columns=['age', 'gender', 'genre'])



            if os.path.exists(music_file):


                existing_data = pd.read_csv(music_file)
                updated_data = pd.concat([existing_data, new_data], ignore_index=True)
            else:
                updated_data = new_data


            updated_data.to_csv(music_file, index=False)


            X = updated_data.drop(columns=['genre'])
            Y = updated_data['genre']

            global model
            model = DecisionTreeClassifier()
            model.fit(X, Y)


            joblib.dump(model, model_file)

            return render_template('result.html',
                                 age=age,
                                 gender='Male' if gender == 1 else 'Female',
                                 genre=genre,
                                 learned=True)
        else:

            prediction = model.predict([[age, gender]])

            return render_template('result.html',
                                 age=age,
                                 gender='Male' if gender == 1 else 'Female',
                                 genre=prediction[0],
                                 learned=False)
    except Exception as e:
        return render_template('index.html', error=str(e))

if __name__ == '__main__':
    app.run(debug=True)


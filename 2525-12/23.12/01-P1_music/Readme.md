# Music Genre Predictor 🎵

My learning project in Python - a web app that predicts music preferences based on age and gender.

## What can this app do?

- Predicts music genre based on age and gender
- You can add new training data right through the web interface
- Model retrains automatically when you add new data
- Beautiful interface with animations
- All data is saved to a CSV file

## What I used

- **Flask** - to build a website with Python
- **scikit-learn** - for machine learning (Decision Tree)
- **pandas** - to work with data
- **HTML/CSS** - for the nice interface

## How to run

1. Clone the repository
2. Install dependencies:

```bash
pip install -r requirements.txt
```

3. Run the app:

```bash
python app.py
```

4. Open in browser:

```
http://127.0.0.1:5000
```

## How to use

**Find your genre:**
- Enter your age and gender
- Leave the "Genre" field empty (-- Select for Learning --)
- Click "Discover My Genre" - you'll get a prediction!

**Teach the model:**
- Enter age and gender
- Select a genre from the list
- Click "Learn" - data will be saved and model will retrain

## Project structure

```
.
├── app.py                  # Main file with Flask and ML logic
├── music.csv              # Training data
├── our_pridction.joblib   # Saved model
├── frontend/
│   ├── index.html         # Main page with form
│   └── result.html        # Results page
├── requirements.txt       # List of libraries
└── README.md             # This file
```

## Supported genres

- HipHop
- Rock
- Jazz
- Classical
- Dance
- Pop
- Acoustic

## How it works

To be honest, it took me a while to figure this out, but here's what happens:

1. On startup, the app loads the trained model from `our_pridction.joblib` file (or creates a new one from CSV)
2. When you click "Discover My Genre" - the model predicts the genre based on age and gender
3. When you click "Learn" - new data gets added to CSV, and the model retrains
4. Everything is saved, so on next startup all your data is still there

## Data format

The CSV data looks like this:
```csv
age,gender,genre
25,1,Rock
30,0,Pop
```

- `age` - age (number from 10 to 100)
- `gender` - gender (0 = female, 1 = male)
- `genre` - music genre

## What I learned from this project

- How Flask and routing works
- Basics of machine learning (Decision Tree)
- How to save and load models
- Working with forms and data in web applications

---

Made for learning purposes 📚

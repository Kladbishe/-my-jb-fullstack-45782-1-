import pandas as pd
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
import joblib

music_file='music.csv'

music_dt  =pd.read_csv(music_file)

X=music_dt.drop(columns=['genre']) # sample features
Y=music_dt['genre'] # sample output

X_train,X_test,Y_train,Y_test= train_test_split(X,Y,test_size=.2)

model = DecisionTreeClassifier()
model.fit(X_train,Y_train)  # load features and sample data

predictions= model.predict(X_test)
# score=accuracy_score(Y_test,predictions)
# print(score)
joblib.dump(model, 'our_pridction.joblib')
# print(Y)


# ml-server/predictor.py

import numpy as np
from sklearn.linear_model import LinearRegression

def predict_next_day(prices):
    if len(prices) < 2:
        return None

    X = np.arange(len(prices)).reshape(-1, 1)  # Days: 0,1,2...
    y = np.array(prices).reshape(-1, 1)        # Actual prices

    model = LinearRegression()
    model.fit(X, y)

    next_day = np.array([[len(prices)]])
    predicted = model.predict(next_day)

    return round(predicted[0][0], 2)

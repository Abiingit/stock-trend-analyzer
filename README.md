# 📈 Stock Price Predictor (ML-Powered)

A lightweight machine learning web app that predicts the **next day's stock price** using a 7-day historical dataset and a simple Linear Regression model.

---

## 🚀 Features

* 🔢 Predicts next-day stock price using ML
* 📈 Accepts a list of 7 historical stock prices
* ⚙️ Built with Python, Flask, and scikit-learn
* 🌐 API-ready – integrate with frontend or fetch live stock data
* 🔄 CORS enabled for full-stack integration
* 🧠 Simple & customizable ML model for quick upgrades

---

## 📦 Project Structure

```
ml-server/
├── app.py            # Flask server handling API requests
├── predictor.py      # Linear Regression model for predictions
└── README.md         # You're here!
```

---

## ⚙️ How It Works

### Step 1: Send a POST request to `/predict` with 7 stock prices:

```json
POST /predict
Content-Type: application/json

{
  "prices": [212.93, 213.75, 214.21, 213.88, 212.45, 212.60, 212.33]
}
```

### Step 2: Server responds with the predicted price for the next day:

```json
{
  "predicted_price": 212.28
}
```

---

## 📚 Tech Stack

* **Backend**: Python, Flask
* **ML Model**: Scikit-learn (Linear Regression)
* **Data**: Can integrate with APIs like [Alpha Vantage](https://www.alphavantage.co) or [Yahoo Finance](https://pypi.org/project/yfinance/)
* **Frontend**: Any framework (React Native, HTML/JS, etc.)

---

## 🔮 Future Upgrades (In Progress 🚧)

* 📅 Live stock price integration via APIs
* 📉 Stock data visualization (charts, graphs)
* 🧠 Switch to advanced ML models (e.g., LSTM, XGBoost)
* 💾 Predict for multiple days instead of just one
* 📊 Compare predictions with actual closing prices

---

## 🧪 Run Locally

### 1. Install dependencies

```bash
pip install flask flask-cors scikit-learn numpy
```

### 2. Start the server

```bash
python app.py
```

The API will be running on: `http://127.0.0.1:5000/predict`

---

## 🤝 Contributions

Pull requests, ideas, and upgrades are welcome! Let’s build a smarter predictor together 🚀

---

## 🧠 Author

👩‍💻 Abirami (Abi)
🧑‍🏫 Engineering Student
🌐 Passionate about AI, web dev & solving real-world problems

---

## 📜 License

This project is open-source and available under the MIT License.

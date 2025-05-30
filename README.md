# 📈 Stock Price Predictor (ML-Powered)

A lightweight, machine learning-powered web app that predicts the **next day's stock price** using a 7-day historical dataset and a simple Linear Regression model.



## 🚀 Features

* 🔢 Predicts next-day stock price using ML
* 📈 Accepts a list of 7 historical stock prices
* ⚙️ Built with Python, Flask, and scikit-learn
* 🌐 API-ready – easy to integrate with any frontend or live stock data API
* 🔄 CORS enabled for seamless full-stack use
* 🧠 Minimalistic ML model – simple yet extendable



## 📦 Project Structure

```
ml-server/
├── app.py            # Flask server handling API requests
├── predictor.py      # Linear Regression model for predictions
└── README.md         # You're here!
```



## ⚙️ How It Works

### Step 1: Send a POST request to `/predict` with 7 recent stock prices:

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



## 📚 Tech Stack

* **Backend**: Python, Flask
* **Machine Learning**: Scikit-learn (Linear Regression)
* **Data Source**: Compatible with APIs like [Alpha Vantage](https://www.alphavantage.co) and [Yahoo Finance](https://pypi.org/project/yfinance/)
* **Frontend**: Plug into any stack (React, React Native, HTML/JS, etc.)


## 🔮 Planned Upgrades

* 📅 Live stock price integration using financial APIs
* 📉 Visualizations: line charts, historical vs predicted comparison graphs
* 🧠 Model Enhancements: LSTM, XGBoost, or other advanced techniques
* ⏳ Multi-day prediction support
* ✅ Real vs Predicted Price Accuracy Comparison


## 📂 Screenshots
<div style="display:flex;justify-items:space-around" >
<img style="height:400px;width:200px" src="Screenshot (39).png">
</div>



## 🧪 Running the Project Locally

### 1. Install required libraries:

```bash
pip install flask flask-cors scikit-learn numpy
```

### 2. Start the Flask server:

```bash
python app.py
```

Once running, your API will be available at:
`http://127.0.0.1:5000/predict`



## 🤝 Contribute

Pull requests, feedback, and feature ideas are highly encouraged! Let’s make stock prediction smarter and more accessible 🚀



## 👤 Author

**Abirami (Abi)**
🎓 Engineering Student
💡 Passionate about AI, web development & real-world problem solving



## 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

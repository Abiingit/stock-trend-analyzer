# ml-server/app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
from predictor import predict_next_day

app = Flask(__name__)
CORS(app)

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json
    prices = data.get("prices", [])

    if not prices or len(prices) < 2:
        return jsonify({"error": "Insufficient price data"}), 400

    prediction = predict_next_day(prices)
    return jsonify({"predicted_price": prediction})

if __name__ == "__main__":
    app.run(debug=True)

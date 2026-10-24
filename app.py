from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html", partner="My Love")

@app.route("/api/love-note")
def love_note():
    return jsonify({
        "message": "You make my world brighter every day. "
                   "I would choose you over and over again. 💗",
        "sender": "Your favorite human 💌"
    })

if __name__ == "__main__":
    app.run(debug=True)

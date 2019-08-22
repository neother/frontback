import flask
from flask import Flask
from flask_cors import cross_origin
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    return 'Hello World!'


@app.route('/haha')
def futures():
    return str(random.randint(100,200))


if __name__ == '__main__':
    app.run(debug=True)
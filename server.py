from flask import Flask, send_from_directory
import csv

app = Flask(__name__, static_url_path='', static_folder='.')

@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

@app.route('/styles.css')
def styles():
    return send_from_directory('.', 'styles.css')

@app.route('/app.js')
def app_js():
    return send_from_directory('.', 'app.js')

@app.route('/battery-level')
def battery_level():
    with open('battery.csv', 'r') as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
            return row[0]

if __name__ == '__main__':
    app.run(port=3000)

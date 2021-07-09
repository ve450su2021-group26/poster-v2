import json
from flask import Flask
from flask import request
from flask_cors import CORS

app = Flask(
    __name__,
    template_folder="poster-v2/dist",  # 默认的HTML文件夹
    static_folder="poster-v2/dist/static",  # 默认的静态文件文件夹
)

# app.config.from_object(__name__)

# CORS(app, resources={r'/*': {'origins': '*'}})
CORS(app)

@app.route("/test", methods =["POST"])
def get_from_json():
    content = request.json
    print(content)

# def get_url_from_json():
#     print(request.get_json()['url'])

if __name__ == '__main__':
    app.run(port=5000)

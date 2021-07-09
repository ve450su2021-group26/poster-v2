import json
from flask import Flask
from flask import request

app = Flask(
    __name__,
    template_folder="poster-v2/dist",  # 默认的HTML文件夹
    static_folder="poster-v2/dist/static",  # 默认的静态文件文件夹
)

@app.route("/test", methods =["POST"])

def get_url_from_json():
    print(request.get_json()['url'])

if __name__ == '__main__':
    app.run()

import json
from flask import Flask
from flask import request
from flask import render_template

app = Flask(
    __name__,
    template_folder="poster-v2/dist",  # 默认的HTML文件夹
    static_folder="poster-v2/dist/static",  # 默认的静态文件文件夹
)


@app.route('/')
def hello_world():
    return render_template("index.html")

@app.route("/", methods =["POST"])
def callAlg():
    a = request.json.get("a")
    b = request.json.get("b")
    return json.dumps(
        {"res": a + b}
    )


if __name__ == '__main__':
    app.run()

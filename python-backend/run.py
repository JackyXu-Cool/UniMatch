from flask import Flask, jsonify, request
from flask_jwt import JWT
from flask_restful import Api
from flask_cors import CORS

from helper.formatHelper import formatScore, formatBasic, formatFull
from helper.dataHelper import getData
from resource.user import UserRegister, UserInfo
from security import authenticate, identiy
from create_table import create_table

app = Flask(__name__)
CORS(app)

app.secret_key = "00001"

api = Api(app)

jwt = JWT(app, authenticate, identiy)  ## /auth endpoint. return {"access_token": <value>}

## Get schools by name
@app.route("/schools/byname/score/<string:name>")
def get_score_school_by_name(name):
    row = getData(name, "name")
    return jsonify(formatScore(row))

@app.route("/schools/byname/basic/<string:name>")
def get_basic_school_by_name(name):
    row = getData(name, "name")
    return jsonify(formatBasic(row))

@app.route("/schools/byname/full/<string:name>")
def get_full_school_by_name(name):
    row = getData(name, "name")
    return jsonify(formatFull(row))

## Get schools by OPEID
@app.route("/schools/byid/score/<int:opeid>")
def get_score_school_by_id(opeid):
    row = getData(opeid, "OPEID")
    return jsonify(formatScore(row))

@app.route("/schools/byid/basic/<int:opeid>")
def get_basic_school_by_id(opeid):
    row = getData(opeid, "OPEID")
    return jsonify(formatBasic(row))

@app.route("/schools/byid/full/<int:opeid>")
def get_full_school_by_id(opeid):
    row = getData(opeid, "OPEID")
    return jsonify(formatFull(row))

api.add_resource(UserRegister, "/signup")
api.add_resource(UserInfo, "/user/<string:username>")

if __name__ == "__main__":
    create_table()
    app.run(port=5000, debug=True)

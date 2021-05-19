from flask import Flask, jsonify, request
from flask_jwt import JWT
from flask_restful import Api
from flask_cors import CORS

from helper.formatHelper import formatScore, formatBasic, formatFull
from helper.analyze import getBestFit
from helper.dataHelper import getData, getAll, search
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

## Get all data from the databse
@app.route("/schools/all")
def get_all_data():
    rows = getAll()
    result = []
    for row in rows:
        result.append(formatFull(row))
    return jsonify(result)

## This route is to find the best-fit school for a student based on one's scores and preference
@app.route("/schools/analyze")
def analyze_school():
    data = request.json
    student_score_dict = data["score"] # {"scores": {"value": 1540, "type": "SAT"} }
    student_score = student_score_dict["value"]
    exam_type = student_score_dict["type"]
    max_expense = data["expense"]  ## Maximum attendance fee one can endure

    return jsonify(getBestFit(student_score, exam_type, max_expense))

## This route takes in the prefered size and/or minimum addimission rate for a college
## do the filtering in the SQL table, and return the opeid and college names that satisfy the 
## requirement
@app.route("/search/advanced")
def advanced_search():
    data = request.json
    searchFilter = {}
    if "size" in data:
        searchFilter["size"] = data["size"]
    if "adr" in data:
        searchFilter["adr"] = data["adr"]
    return jsonify(search(searchFilter))

## This route takes in what the users type in searching bar, make searches
## on the official site of that college, and return the data in this format:
## [{"headline": "xxxx", "link": "https://....."}, {"headline":"", "link": "..."}]
@app.route("/searchInfo/<int:opeid>")
def searchForInfo():
    return null

## Add signup and get user resource
api.add_resource(UserRegister, "/signup")
api.add_resource(UserInfo, "/user/<string:username>")

if __name__ == "__main__":
    create_table()
    app.run(port=5000, debug=True)

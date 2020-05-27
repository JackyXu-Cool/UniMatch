from flask_restful import Resource, reqparse
from model.user import User

class UserRegister(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument("username",
        type=str, required=True, 
        help="cannot leave blank")
    parser.add_argument("password",
        type=str, required=True,
        help="cannot leave blank")
    parser.add_argument("highschool",
        type=str, required=True, 
        help="cannot leave blank")
    parser.add_argument("dreamschool",
        type=str, required=True,
        help="cannot leave blank")

    def post(self):
        data = UserRegister.parser.parse_args()
        result = User.store_to_db(*data)
        return {"message": result["message"]}, result["status code"]

class User(Resource):
    pass
import sqlite3

class User(object):
    def __init__(self, id, username, password, highschool, dreamschool):
        self.id = id
        self.username = username
        self.password = password
        self.highschool = highschool
        self.dreamschool = dreamschool
    
    @classmethod
    def store_to_db(self, username, password, highschool, dreamschool):
        if User.find_by_username(username):
            return {"message": "user already exists", "status code": 400}

        connection = sqlite3.connect("user-data.db")
        cursor = connection.cursor()

        query = "INSERT INTO users VALUES (NULL,?,?,?,?)"
        cursor.execute(query, (username, password, highschool, dreamschool))

        connection.commit()
        connection.close()
        return {"message": "new user has been successfully stored", "status code": 201}

    @classmethod
    def find_by_username(cls, username):
        connection = sqlite3.connect("user-data.db")
        cursor = connection.cursor()

        query = "SELECT * FROM users where username=?"
        result = cursor.execute(query, (username, ))
        row = result.fetchone()

        if row:
            user = cls(*row)
        else:
            user = None
        
        connection.close()
        return user
    
    @classmethod
    def find_by_id(cls, id):
        connection = sqlite3.connect("user-data.db")
        cursor = connection.cursor()

        query = "SELECT * FROM users where id=?"
        result = cursor.execute(query, (id, ))
        row = result.fetchone()

        if row:
            user = cls(*row)
        else:
            user = None
        
        connection.close()
        return user

    def json(self):
        return {
            "username": self.username,
            "highschool": self.highschool,
            "dreamschool": self.dreamschool
        }
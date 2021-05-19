import mysql.connector

mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password="mysqljacky",
    database='unimatch'
)

## input is the value, search is either "OPEID" or "name"
def getData(input, search):
    cursor = mydb.cursor()
    query = "select * from schools where {} = '{}'".format(search, input)
    cursor.execute(query)
    result = cursor.fetchone()
    cursor.close()
    return result

## Get all data from the database
def getAll():
    cursor = mydb.cursor()
    query = "select * from schools"
    cursor.execute(query)
    result = cursor.fetchall()
    cursor.close()
    return result

def search(filter):
    cursor = mydb.cursor()
    max_enrollment = 80000
    min_enrollment = 0
    size = filter["size"] if "size" in filter else "all"
    admission = filter["adr"] if "adr" in filter else 0
    if size == "big":
        min_enrollment = 20000
    elif size == "mid":
        max_enrollment = 20000
        min_enrollment = 10000
    elif size == "small":
        max_enrollment = 10000
    query = "SELECT * FROM schools WHERE (ENROLLMENT BETWEEN {} and {}) AND (ADMISSION_RATE >= {})".format(min_enrollment, max_enrollment, admission)
    cursor.execute(query)
    result = cursor.fetchall()
    cursor.close()
    return [[school[1], school[2]] for school in result]
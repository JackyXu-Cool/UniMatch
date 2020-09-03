import sqlite3

## input is the value, search is either "OPEID" or "name"
def getData(input, search):
    connection = sqlite3.connect("school-data.db")
    cursor = connection.cursor()    
    query = "SELECT * FROM schools where {}=?".format(search)
    result = cursor.execute(query, (input,))
    row = result.fetchone()
    connection.close()
    return row

## Get all data from the database
def getAll():
    connection = sqlite3.connect("school-data.db")
    cursor = connection.cursor()
    query = "SELECT * FROM schools"
    cursor.execute(query)
    result = cursor.fetchall()
    connection.close()
    return result

def search(filter):
    connection = sqlite3.connect("school-data.db")
    cursor = connection.cursor()
    max_enrollment = 50000
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
    connection.close()
    return [school[2] for school in result]
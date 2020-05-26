def formatFull(data):
    pass

def formatBasic(data):
    return {
        "name": data[2],
        "state": data[4],
        "enrollment": data[25],
        "admission-rate": "{}%".format(str(round(data[8]*100, 3)))
    }

def formatScore(data):
    return {
        "SAT_R_25": data[9],
        "SAT_R_75": data[10],
        "SAT_M_25": data[11],
        "SAT_M_75": data[12],
        "SAT_R_MID": data[13],
        "SAT_M_MID": data[14],
        "SAT_AVG": data[15],
        "ACT_25": data[16],
        "ACT_75": data[17],
        "ACT_EN_25": data[18],
        "ACT_EN_75": data[19],
        "ACT_M_25": data[20],
        "ACT_M_75": data[21],
        "ACT_AVG": data[22],
        "ACT_EN_AVG": data[23],
        "ACT_M_AVG": data[24],
    }
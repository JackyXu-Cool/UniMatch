import numpy as np
from helper.dataHelper import getAll

def getBestFit(score, exam_type, expense):
    ## Get all schools' information
    allSchools = getAll()
    usefulInfo = []

    # Construct the array to store useful information
    for school in allSchools:
        schoolInfo = []
        schoolInfo.append(school[1])
        schoolInfo.append(school[35])
        if exam_type == 'SAT':
            if isinstance(school[15], int):
                schoolInfo.append(school[15])
            else:
                schoolInfo.append(0)
        else:
            if (isinstance(school[22], int)):
                schoolInfo.append(school[22])
            else:
                schoolInfo.append(0)
        ## Sample SchoolInfo: {opied, tuition, sat/act}
        usefulInfo.append(schoolInfo)

    # Make analysis
    array = np.array(usefulInfo)
    filtered_array = array[array[:,1] < expense]
    idx = (np.abs(filtered_array[:,2] - score)).argmin()
    return {"opeid" : str(filtered_array[idx][0]) }
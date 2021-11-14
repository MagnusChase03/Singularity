#######
#
# call with [command] [prof first name] [prof last name]
#
#######

import ratemyprofessor # API used to get rate my professor data
import json # used for all functions
import sys # used for getting system output to put on the website
import requests # used for the nebula function


# gets the command we want to interpret
command = sys.argv[1] 

def rateMyProfessor():

    professorName = sys.argv[2] + " " + sys.argv[3]

    professor = ratemyprofessor.get_professor_by_school_and_name(
        ratemyprofessor.get_school_by_name("The University of Texas at Dallas"), professorName) # Creates a professor object using the ratemyprofessor api

    if professor is not None:
        data =  {
        "professor":professor.name,
        "department":professor.department,
        "rating":professor.rating,
        "difficulty":professor.difficulty,
        "numberOfRatings":professor.num_ratings,
        "wouldTakeAgain":round(professor.would_take_again, 1)
        }
    else: # sets all data to null if the professor isnt on the ratemyprofessor api
        data =  {
        "professor":null,
        "department":null,
        "rating":null,
        "difficulty":null,
        "numberOfRatings":null,
        "wouldTakeAgain":null
    }

    json_string = json.dumps(data)
    print(json_string)


def nebula():
    APIkey = "dd1h55UQUb8x5nQIPW2iJ1ABaIDx9iv7"
    url =  "http://api.utdnebula.com/v1/sections/search?instructors=" + sys.argv[2] + "%20" + sys.argv[3]
    headers = {'Authorization': '{key}'.format(key=APIkey)}
    jsonData = requests.get(url, headers=headers).json()
    print(json.dumps(jsonData))

def sorg():

    if len(sys.argv) == 2:
        url = "https://api.presence.io/utdallas/v1/organizations"
        jsonData = requests.get(url).json()
        print(json.dumps(jsonData))
    else:
        url = "https://api.presence.io/utdallas/v1/organizations/%s" % sys.argv[2]
        jsonData = requests.get(url).json()
        print(json.dumps(jsonData))


if command == "ratemyprofessor":
    rateMyProfessor()
elif command == "nebula":
    nebula()
elif command == "sorg":
    sorg()
    
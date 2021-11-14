# Backend Support
There are multiple routes to the backend api

1) **/grades/:semester/:year**
2) **/grades/:semester/:year/:prof**
3) **/grades/best/:semester/:year/:subj/:class**
4) **/rating/:prof**
5) **/nebula/:prof**

Each of these return back json data in slightly different formats

**For /grades**

If there are multiple results, it will return an array of json objects
```
subj: CS
num: 1200
sect: 001
CR: 6
NC: 3
P: 0
prof: "Cole, John"
grades: {
    A+:10
    ...
}
term: "2020 Fall"
```

**For /rating**

```
professor: "John Cole"
department: "Comp Sci"
rating: 5.0
difficulty: 5.0
numberOfRatings: 100
wouldTakeAgain: 67.3
```

**For /nebula**

```
term: "21f"
title: "Computer Science II"
times: "11:30-12:30"
department: "encselec"
assisstants: ""
instructors: "John Cole"
topic: ""
school: "ecs"
class_number:"123"
location: "ECSS 2.214"
section_number: "009"
core_area: "theta"
course_number: "2337"
days: "Monday Wendsday"
activity_type: "Lecture"
section_name: "cs2337.009"
course_prefix: "cs"
```
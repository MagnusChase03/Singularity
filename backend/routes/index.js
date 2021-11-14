var express = require('express');
var fs = require('fs');
var cors = require('cors');
const { exec } = require("child_process");

var router = express.Router();

// Returns grades
router.options('/grades/:semester/:year', cors());
router.get('/grades/:semester/:year', function (req, res, next) {

  var semester = req.params["semester"];
  var year = req.params["year"];

  // Sending Data file
  var dataLocation = "data/" + semester[0].toUpperCase() + semester.slice(1) + " " + year + "/" + semester + "" + year + ".json"
  fs.readFile(dataLocation, (err, data) => {

    res.json(JSON.parse(data.toString()));

  });

});

// Returns grades containing proffesor name
router.options('/grades/:semester/:year/:prof', cors());
router.get('/grades/:semester/:year/:prof', function (req, res, next) {

  var semester = req.params["semester"];
  var year = req.params["year"];
  var professor = req.params["prof"]

  var dataLocation = "data/" + semester[0].toUpperCase() + semester.slice(1) + " " + year + "/" + semester + "" + year + ".json"
  fs.readFile(dataLocation, (err, data) => {

    var grades = JSON.parse(data.toString());

    // Finding grades with matching professor
    var matches = [];
    for (var grade in grades) {

      var grader = grades[grade];
      if (grader["prof"].toUpperCase().includes(professor.toUpperCase())) {

        matches.push(grader);

      }

    }

    res.json(matches);

  });

});

// Returns professors who taught said class
router.options('/grades/:semester/:year/:subj/:class', cors());
router.get('/grades/:semester/:year/:subj/:class', function (req, res, next) {

  var semester = req.params["semester"];
  var year = req.params["year"];
  var subject = req.params["subj"];
  var classNumber = req.params["class"];

  var dataLocation = "data/" + semester[0].toUpperCase() + semester.slice(1) + " " + year + "/" + semester + "" + year + ".json"
  console.log(dataLocation);

  fs.readFile(dataLocation, (err, data) => {

    var grades = JSON.parse(data.toString());

    // Finding grades with matching professor
    var matches = [];
    for (var grade in grades) {

      if (grades[grade]["subj"] == subject && grades[grade]["num"] == classNumber) {

        matches.push(grades[grade]);

      }

    }

    res.json(matches);

  });

});

// Returns best professor for said class
router.options('/grades/best/:semester/:year/:subj/:class', cors());
router.get('/grades/best/:semester/:year/:subj/:class', function (req, res, next) {

  var semester = req.params["semester"];
  var year = req.params["year"];
  var subject = req.params["subj"];
  var classNumber = req.params["class"];

  var dataLocation = "data/" + semester[0].toUpperCase() + semester.slice(1) + " " + year + "/" + semester + "" + year + ".json"
  console.log(dataLocation);

  fs.readFile(dataLocation, (err, data) => {

    var grades = JSON.parse(data.toString());

    // Finding best professor
    var bestGrades = -1;
    var bestProfessor = grades[0];

    for (var grade in grades) {

      if (grades[grade]["subj"] == subject && grades[grade]["num"] == classNumber && grades[grade]["grades"]["A+"] > bestGrades) {

        bestProfessor = grades[grade];
        bestGrades = grades[grade]["grades"]["A+"] > bestGrades

      }

    }

    res.json([bestProfessor]);

  });

});

// Get rate my professor ratings
router.options('/rating/:prof', cors());
router.get('/rating/:prof', function (req, res, next) {

  var professor = req.params["prof"];

  console.log("python3 ratemyprofessor/main.py ratemyprofessor " + professor)
  exec("python3 ratemyprofessor/main.py ratemyprofessor " + professor, (error, stdout, stderr) => {

    res.json([JSON.parse(stdout)]);

  });

});

// Get nebula data on professor
router.options('/nebula/:prof', cors());
router.get('/nebula/:prof', function (req, res, next) {

  var professor = req.params["prof"];

  exec("python3 ratemyprofessor/main.py nebula " + professor, (error, stdout, stderr) => {

    res.json(JSON.parse(stdout));

  });

});

// Get all orginizations
router.options('/sorg', cors());
router.get('/sorg', function (req, res, next) {

  exec("python3 ratemyprofessor/main.py sorg", (error, stdout, stderr) => {

    res.json(JSON.parse(stdout));

  });

});

// Get all orginizations by name
router.options('/sorg/:name', cors());
router.get('/sorg/:name', function (req, res, next) {

  var name = req.params["name"];

  exec("python3 ratemyprofessor/main.py sorg", (error, stdout, stderr) => {

    var orginzation = JSON.parse(stdout);

    // Find names with keyword
    var matches = []
    for (var org in orginzation) {

      if (orginzation[org]["name"].toUpperCase().includes(name.toUpperCase())) {

        matches.push(orginzation[org]);

      }

    }

    res.json(matches);

  });

});

// Get all orginizations by uri
router.options('/sorg/details/:uri', cors());
router.get('/sorg/details/:uri', function (req, res, next) {

  var uri = req.params["uri"];

  exec("python3 ratemyprofessor/main.py sorg " + uri, (error, stdout, stderr) => {

    res.json(JSON.parse(stdout));

  });

});

module.exports = router;

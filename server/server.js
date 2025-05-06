const express = require("express");
const app = express();

const fs = require("fs");
const surveyResultsFile = "survey_results.json";
const port = 3000;

var counter = 0;
var surveyResults = JSON.parse(fs.readFileSync(surveyResultsFile));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/counter", (req, res) => {
  res.json({ counter });
  counter++;
});

app.get("/survey_results", (req, res) => {
  res.json({ surveyResults });
});

app.post("/submit_survey", (req, res) => {
  surveyResults.push(req.body);
  fs.writeFileSync(surveyResultsFile, JSON.stringify(surveyResults));
  res.send("Thank you :D");
});

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
// your code goes here

app.get("", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.post("/add", (req, res) => {
  console.log(req.body);
  var num1 = req.body.num1;
  var num2 = req.body.num2;

  if (isNaN(num1) || isNaN(num2)) {
    response = {
      status: "error",
      message: "Invalid data types",
    };
  } else if (
    parseFloat(num1) < -1000000 ||
    parseFloat(num2) < -1000000 ||
    parseFloat(num1) + parseFloat(num2) < -1000000
  ) {
    response = {
      status: "error",
      message: "Underflow",
    };
  } else if (
    parseFloat(num1) > 1000000 ||
    parseFloat(num2) > 1000000 ||
    parseFloat(num1) + parseFloat(num2) > 1000000
  ) {
    response = {
      status: "error",
      message: "Overflow",
    };
  } else {
    response = {
      status: "success",
      message: "the sum of given two numbers",
      sum: parseFloat(num1) + parseFloat(num2),
    };
  }
  res.end(JSON.stringify(response));
});

app.post("/sub", (req, res) => {
  console.log(req.body);
  var num1 = req.body.num1;
  var num2 = req.body.num2;

  if (isNaN(num1) || isNaN(num2)) {
    response = {
      status: "error",
      message: "Invalid data types",
    };
  } else if (
    parseFloat(num1) < -1000000 ||
    parseFloat(num2) < -1000000 ||
    parseFloat(num1) + parseFloat(num2) < -1000000
  ) {
    response = {
      status: "error",
      message: "Underflow",
    };
  } else if (
    parseFloat(num1) > 1000000 ||
    parseFloat(num2) > 1000000 ||
    parseFloat(num1) + parseFloat(num2) > 1000000
  ) {
    response = {
      status: "error",
      message: "Overflow",
    };
  } else {
    response = {
      status: "success",
      message: "the differnce of given two numbers",
      differnce: parseFloat(num1) - parseFloat(num2),
    };
  }
  res.end(JSON.stringify(response));
});

app.post("/multiply", (req, res) => {
  console.log(req.body);
  var num1 = req.body.num1;
  var num2 = req.body.num2;

  if (isNaN(num1) || isNaN(num2)) {
    response = {
      status: "error",
      message: "Invalid data types",
    };
  } else if (
    parseFloat(num1) < -1000000 ||
    parseFloat(num2) < -1000000 ||
    parseFloat(num1) + parseFloat(num2) < -1000000
  ) {
    response = {
      status: "error",
      message: "Underflow",
    };
  } else if (
    parseFloat(num1) > 1000000 ||
    parseFloat(num2) > 1000000 ||
    parseFloat(num1) + parseFloat(num2) > 1000000
  ) {
    response = {
      status: "error",
      message: "Overflow",
    };
  } else {
    response = {
      status: "success",
      message: "The product of given two numbers",
      result: parseFloat(num1) * parseFloat(num2),
    };
  }

  res.end(JSON.stringify(response));
});

app.post("/divide", (req, res) => {
  console.log(req.body);
  var num1 = req.body.num1;
  var num2 = req.body.num2;

  if (isNaN(num1) || isNaN(num2)) {
    response = {
      status: "error",
      message: "Invalid data types",
    };
  } else if (num2 == 0) {
    response = {
      status: "error",
      message: "Cannot divide by zero",
    };
  } else if (
    parseFloat(num1) < -1000000 ||
    parseFloat(num2) < -1000000 ||
    parseFloat(num1) + parseFloat(num2) < -1000000
  ) {
    response = {
      status: "error",
      message: "Underflow",
    };
  } else if (
    parseFloat(num1) > 1000000 ||
    parseFloat(num2) > 1000000 ||
    parseFloat(num1) + parseFloat(num2) > 1000000
  ) {
    response = {
      status: "error",
      message: "Overflow",
    };
  } else {
    response = {
      status: "success",
      message: "The division of given two numbers",
      result: parseFloat(num1) / parseFloat(num2),
    };
  }

  res.end(JSON.stringify(response));
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;

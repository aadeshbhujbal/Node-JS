const express = require("express");
const app = express();
const userArr = require("./InitialData");
const bodyParser = require("body-parser");
const port = 8080;
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// your code goes here

let newId = userArr.length + 1;
/////Fetch All Records///////
app.get("/api/student/:id", (req, res) => {
  try {
    res.json({ userArr });
  } catch (e) {
    res.status(400).json({
      status: "Failed to get student",
      message: e.message,
    });
  }
});
////put All Records////
app.put("/api/student/:id", (req, res) => {
  try {
    const ids = userArr.findIndex((obj) => obj.id == req.params.id);
    if (ids == -1) {
      return res.status(400).json({
        status: "Failed",
        message: "There is no Student With Given ID",
      });
    }
    if (req.body.name) userArr[idx].name = req.body.name;
    if (req.body.currentClass)
      userArr[idx].currentClass = req.body.currentClass;
    if (req.body.division) userArr[idx].division = req.body.division;
    res.json({
      status: "Success",
      message: "Student Updated Successfully",
      data: userArr[ids],
    });
  } catch (e) {
    res.status(400).json({
      status: "Failed",
      message: e.message,
    });
  }
});
///////////Post All Records////
app.post("/api/student", (req, res) => {
  console.log(req.body);
  const { name, currentClass, division } = req.body;
  if (!name || !currentClass || !division) {
    res.status(400).json({
      status: "Failed",
      message: "All fields are required",
    });
  }
  userArr.push({
    id: newId,
    name: req.body.name,
    currentClass: req.body.currentClass,
    division: req.body.division,
  });
  newId++;
  res.json({
    status: "Success",
    id: newId,
    message: "Student Added Successfully",
  });
  //   try {
  //     const { name, currentClass, division } = req.body;
  //     if (!name || !currentClass || !division) {
  //       // if (
  //       //   typeof name === "string" &&
  //       //   parseInt(currentClass) == currentClass &&
  //       //   typeof division === "string"
  //       // ) {
  //       return res.status(400).json({
  //         status: "Failed",
  //         message: "Please fill all the fields(Incomplete Data)",
  //       });
  //     }
  //     userArr.push({
  //       id: newId,
  //       name: req.body.name,
  //       currentClass: req.body.currentClass,
  //       division: req.body.division,
  //     });
  //     newId++;
  //     res.json({
  //       status: "Success",
  //       id: newId,
  //       message: "Student Added Successfully",
  //     });
  //   } catch (e) {
  //     res.status(400).json({
  //       status: "Failed",
  //       message: e.message,
  //     });
  //   }
});

//////////Delete Record///////
app.delete("/api/student/:id", (req, res) => {
  try {
    const ids = userArr.findIndex((obj) => obj.id == req.params.id);
    if (ids == -1) {
      return res.status(400).json({
        status: "Failed",
        message: "There is no Student With Given ID",
      });
    }
    userArr.splice(ids, 1);
    res.json({
      status: "Success",
      message: "Student Deleted Successfully",
      data: userArr[ids],
    });
  } catch (e) {
    res.status(400).json({
      status: "Failed",
      message: e.message,
    });
  }
});
app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;

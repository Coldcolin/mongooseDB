const express = require("express");
const router = express.Router();
const {newStudent, getAllStudents} = require("../controllers/studentController")



// end point to create a student
router.post("/student", newStudent);

// end point for getting all students
router.get("/student", getAllStudents)

module.exports = router;
const express = require("express");
const StudentModel = require("../models/studentModel")


// create a student
const newStudent = async (req, res)=>{
    try{
        const student = await StudentModel.create({
            name: req.body.name,
            course: req.body.course,
            duration: req.body.duration,
        });
        res.status(200).json({message: `${req.body.name} is created successfully`, data: student})
    }catch(error){
        res.status(404).json({message: error.message})
    }
}

// get all student
const getAllStudents = async (req, res)=>{
    try{
        const student = await StudentModel.find();
        if(!student){
            res.status(404).json({message: "No student in the database."})
        }
        res.status(200).json({message: "List of all students", data: student})
    }catch(error){
        res.status(400).json({message: error.message})
    }
}

// get a student

// update a student

// delete a student


module.exports = {
    newStudent,
    getAllStudents
}
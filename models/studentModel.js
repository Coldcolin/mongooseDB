const express = require('express');
const mongoose = require('mongoose');


// create a student schema
const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    course: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

// create a student model
const studentModel = mongoose.model('studentModel', studentSchema);

module.exports = studentModel;
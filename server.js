const express = require('express');
const port = 2021;
const router = require("./routes/studentRoute")
const mongoose = require("mongoose");



// connecting to mongoosedb
const url = "mongodb://localhost:27017/set04";

mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true});
mongoose.connection.once('on', ()=>{
    console.log("connected successfully")
}).on('error', ()=>{
    console.log("problem connecting to the database.")
})
const app = express();
app.use(express.json())


app.use("/api", router)
app.get("/", (req, res)=>{
    res.json({message: "new api using mongoose database."})
})

app.listen(port, ()=>{
    console.log(`Server is connected to port: ${port}`)
});
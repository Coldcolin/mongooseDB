const express = require('express');
const port = 2021;

const app = express();

app.get("/", (req, res)=>{
    res.json({message: "new api using mongoose database."})
})

app.listen(port, ()=>{
    console.log(`Server is connected to port: ${port}`)
});
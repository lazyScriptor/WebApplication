const express = require("express");
const mysql = require("mysql2");
const cors =require("cors");

const app = express();
app.use(cors());


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "theekshana123",
    database: "students"

})

app.get('/',(req,res)=>{
    return res.json("from backend side")
});
app.get("/users",(req,res)=>{
    const sql="SELECT * FROM students";
    db.query(sql,(err,data)=>{
        if(err)return res.json(err);
        return res.json(data);
    })
})

app.listen(8089,()=>{
    console.log("Listening")
});


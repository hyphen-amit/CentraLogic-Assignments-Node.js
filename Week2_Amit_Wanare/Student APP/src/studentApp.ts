import {Application, Request, Response} from 'express';
import express = require('express');
import { getAverageAge,sortStudentsByGrade,getStudentNames,filterPassedStudents } from './studentAppLogic';

const app=express();

const students:any[]= [
    { name: "Alice", age: 20, grade: 75 },
    { name: "Bob", age: 22, grade: 85 },
    { name: "Charlie", age: 21, grade: 60 },
    { name: "David", age: 19, grade: 45 },
    { name: "Eve", age: 20, grade: 90 }
  ];
  
  app.get("/test",(req,res)=>{
    res.send("hello");
});
app.get('/passed',(req,res)=>{
    res.json(filterPassedStudents(students));
});

app.get('/studentsName',(req,res)=>{
  res.json(getStudentNames(students));
})

app.get('/studentsByGrade',(req,res)=>{
  res.json(sortStudentsByGrade(students));
})

app.get('/avgAge',(req,res)=>{
  res.json(getAverageAge(students));
})

app.listen(3000,()=> console.log("Server is Onn!!"));
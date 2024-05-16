"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const studentAppLogic_1 = require("./studentAppLogic");
const app = express();
const students = [
    { name: "Alice", age: 20, grade: 75 },
    { name: "Bob", age: 22, grade: 85 },
    { name: "Charlie", age: 21, grade: 60 },
    { name: "David", age: 19, grade: 45 },
    { name: "Eve", age: 20, grade: 90 }
];
app.get("/test", (req, res) => {
    res.send("hello");
});
app.get('/passed', (req, res) => {
    res.json((0, studentAppLogic_1.filterPassedStudents)(students));
});
app.get('/studentsName', (req, res) => {
    res.json((0, studentAppLogic_1.getStudentNames)(students));
});
app.get('/studentsByGrade', (req, res) => {
    res.json((0, studentAppLogic_1.sortStudentsByGrade)(students));
});
app.get('/avgAge', (req, res) => {
    res.json((0, studentAppLogic_1.getAverageAge)(students));
});
app.listen(3000, () => console.log("Server is Onn!!"));
//# sourceMappingURL=studentApp.js.map
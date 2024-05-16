"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAverageAge = exports.sortStudentsByGrade = exports.getStudentNames = exports.filterPassedStudents = void 0;
const filterPassedStudents = (students) => {
    return students.filter((student) => student.grade >= 50);
};
exports.filterPassedStudents = filterPassedStudents;
const getStudentNames = (students) => {
    return ("Students names -" + students.map((student) => student.name));
};
exports.getStudentNames = getStudentNames;
const sortStudentsByGrade = (students) => {
    return (students.slice().sort((a, b) => a.grade - b.grade));
};
exports.sortStudentsByGrade = sortStudentsByGrade;
const getAverageAge = (students) => {
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    return ("Average age of students - " + totalAge / students.length);
};
exports.getAverageAge = getAverageAge;
//# sourceMappingURL=studentAppLogic.js.map
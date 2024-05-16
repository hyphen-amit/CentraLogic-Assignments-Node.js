export const filterPassedStudents = (students: any[]) => {
    return students.filter((student: { grade: number; }) => student.grade >= 50);
  };

export const getStudentNames = (students: any[]) => {
    return ("Students names -"+ students.map((student: { name: any; }) => student.name));
  };

export const sortStudentsByGrade = (students: any[]) => {
    return (students.slice().sort((a, b) => a.grade - b.grade));
  }; 

export const getAverageAge = (students: any[]) => {
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    return ("Average age of students - "+ totalAge/students.length);
  };

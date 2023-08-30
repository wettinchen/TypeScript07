"use strict";
const student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
};
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, "name");
logStudentKey(student, "GPA");
logStudentKey(student, "classes");

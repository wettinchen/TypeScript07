"use strict";
const student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
};
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}

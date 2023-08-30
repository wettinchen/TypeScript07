interface Student {
    [key: string]: string | number | number[] | undefined
    name: string
    GPA: number
    classes?: number[]
}

const student: Student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
}

for (const key in student) {
    console.log(`${key}: ${student[key]}`)
}
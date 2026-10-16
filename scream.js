/* let students = [];

function createStudent(name, grade, gpa) {
    let student = {"name":  name, "grade": grade, "gpa": gpa};
    students.push(student);
    console.log(students)
}

createStudent("Alex", 11, 3.7);
createStudent("Sam", 10, 2.9) */

const students = [
  { name: "Jane",    grade: 11, gpa: 3.8, isHonors: true  },
  { name: "ChenZee", grade: 12, gpa: 3.5, isHonors: false },
  { name: "Dakota",  grade: 10, gpa: 3.9, isHonors: true  }
];

/* function findByName(students, targetName) {
    console.log(students[0]);
    students.find((student) => student.name === targetName || null);
}; */
//findByName(students, "ChenZee");

function printRoster(students) {
    function star(isHonors) {
        if (isHonors === true) {
            return " *";
        } else {
            return "";
        }
    };
    students.forEach((student) => console.log("[grade: "+student.grade+"] "+ student.name+"- "+"GPA: "+ student.gpa+star(student.isHonors)))
};
printRoster(students);
students.push({
    name: "ella",
    grade: "10",
    gpa: 40000.0,
    isHonors: true
});
printRoster(students);

/* function inspectObject(obj) {
    Object.entries(obj).forEach(([key, value]) => console.log(key+" -> "+value));
};
inspectObject(students[0]); */

/* const scores = { math: 92, english: 85, history: 78, name: "Alex" };

function sumValues(obj) {
    let total = 0;
    Object.values(obj).forEach((val) => typeof val === "number"? total += val : total += 0);
    console.log(total);
}

sumValues(scores); */
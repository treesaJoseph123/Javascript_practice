let studentName = "Treesa";

let marks = [85, 90, 78, 88, 92];

let total = 0;

for (let i = 0; i < marks.length; i++) {
    total += marks[i];
}

let average = total / marks.length;

let grade;

if (average >= 90) {
    grade = "A+";
} else if (average >= 80) {
    grade = "A";
} else if (average >= 70) {
    grade = "B";
} else if (average >= 50) {
    grade = "C";
} else {
    grade = "Fail";
}

console.log("Student:", studentName);
console.log("Marks:", marks);
console.log("Total:", total);
console.log("Average:", average);
console.log("Grade:", grade);

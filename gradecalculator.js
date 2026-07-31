// Take marks of 5 subjects as input from the user
let sub1 = Number(prompt("Enter marks of 1st subject: "));
let sub2 = Number(prompt("Enter marks of 2nd subject: "));
let sub3 = Number(prompt("Enter marks of 3rd subject: "));
let sub4 = Number(prompt("Enter marks of 4th subject: "));
let sub5 = Number(prompt("Enter marks of 5th subject: "));

// Calculate total marks obtained in all 5 subjects
let total = sub1+sub2+sub3+sub4+sub5;

// Calculate percentage assuming each subject is out of 100
let percentage = total/5;

let grade;

// Determine grade based on the calculated percentage
if(percentage <= 100 && percentage >= 90) {
    grade = "A";
}

else if(percentage >= 70 && percentage <= 89) {
    grade = "B";
} 

else if(percentage >= 60 && percentage <= 69) {
    grade = "C";
}

else if(percentage >= 50 && percentage <= 59){
    grade = "D";
}

else if(percentage >= 0 && percentage <= 49) {
    grade = "F";
}

// Display the  total marks, percentage and final grade in the console
console.log("Total Marks = ", total);
console.log("Percentage = ", percentage + "%");
console.log("Grade = ", grade);

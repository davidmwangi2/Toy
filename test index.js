const {
    calculateGrade,
    calculateDemeritPoints,
    calculateNetSalary
} = require('./index');

console.log("Testing Student Grade Generator:");
console.log("Test Case 1: Score = 85");
console.log("Expected Grade: A");
console.log("Actual Grade:", calculateGrade(85));

console.log("Test Case 2: Score = 60");
console.log("Expected Grade: B");
console.log("Actual Grade:", calculateGrade(60));

console.log("\nTesting Speed Detector:");
console.log("Test Case 1: Speed = 80 km/h");
console.log("Expected Output: Points: 2");
console.log("Actual Output:");
calculateDemeritPoints(80);

console.log("Test Case 2: Speed = 65 km/h");
console.log("Expected Output: Ok");
console.log("Actual Output:");
calculateDemeritPoints(65);

console.log("\nTesting Net Salary Calculator:");
console.log("Test Case 1: Basic Salary = 50000, Benefits = 10000");
console.log("Expected Net Salary: 55000");
console.log("Actual Net Salary:", calculateNetSalary(50000, 10000));

console.log("Test Case 2: Basic Salary = 60000, Benefits = 20000");
console.log("Expected Net Salary: 63000");
console.log("Actual Net Salary:", calculateNetSalary(60000, 20000));

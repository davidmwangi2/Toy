function calculateGrade() {
	// Fetching input values
	var htmlMarks = parseFloat(document.getElementById("htmlMarks").value);
	var jsMarks = parseFloat(document.getElementById("jsMarks").value);
	var reactMarks = parseFloat(document.getElementById("reactMarks").value);
	var rubyMarks = parseFloat(document.getElementById("rubyMarks").value);
  
	// Validating input
	if (isNaN(htmlMarks) || isNaN(jsMarks) || isNaN(reactMarks) || isNaN(rubyMarks)) {
	  document.getElementById("result").innerHTML = "Please enter valid marks for all subjects.";
	  return;
	}
  
	// Calculating total marks and percentage
	var totalMarks = htmlMarks + jsMarks + reactMarks + rubyMarks;
	var percentage = (totalMarks / 400) * 100;
  
	// Determining grade based on percentage
	var grade = "";
	if (percentage > 79) {
	  grade = "A";
	} else if (percentage >= 60) {
	  grade = "B";
	} else if (percentage >= 50) {
	  grade = "C";
	} else if (percentage >= 40) {
	  grade = "D";
	} else {
	  grade = "E";
	}
  
	// Displaying the result
	document.getElementById("result").innerHTML = "Total Marks: " + totalMarks.toFixed(2) + "<br>Percentage: " + percentage.toFixed(2) + "%" + "<br>Grade: " + grade;
  }
  
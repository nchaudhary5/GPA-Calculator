
// declare empty array 
let courses = [];        // array for course name 
let grade = [];          // array for grade in char 
let value = [];          // array for value  
let hour = [];           // array for credit hours 

let courseCount = 0;      // counting the number of course 

const FOUR_O = 4.0; 
const THREE_FIVE = 3.5;
const THREE_O = 3.0
const TWO_FIVE = 2.5;
const TWO_O = 2.0;
const ONE_FIVE = 1.5;
const ONE_O = 1.0;
const ZERO = 0.0;


function userInput()
{
	var INPut = document.getElementById("user_input").value;
	
	// split a string into an array of substrings 
	let courseData = INPut.split("\n");
	
	for (let i = 0; i < courseData.length; i++)
	{
		// if courseData is not empty, proceed the following
		if(courseData !== "")
		
		{
			let currentCourse = courseData[i];
			
			// lets say CS351 A 4 is first array, 
			// "split" will split the coursename, grade and hours 
			let userInfo = currentCourse.split(' ');
			
			let [course, letterGrade, number] = userInfo;
			
			courses.push(course);
			grade.push(letterGrade);
			hour.push(+number);			
		}
	}
	
	// clear and reset 
	courseData = " ";
	userInfo = " ";
	calculateGpa();   // declaring function
		
}

function calculateGpa()
{
	// declaring and initializing variables 
	let gpa = 0;
	let totalGradePoints = 0;
	let totalHours = 0;
	let upper; 
	
	// Case Check 
	for (let i = 0; i < grade.length; i++)
	{
		// lets check for a plus or minus sign 
		
		if(grade[i].length > 1)
		{
			upper = grade[i][0].toUpperCase() + grade[i][1];
		}  // end if 
		
		else 
		{
			upper = grade[i][0].toUpperCase();
		} // end else 
	
		
		grade[i] = upper;
		
		switch(upper) 
		{
			case 'A':
				value.push(FOUR_O);
				break;
			
			case 'B+':
				value.push(THREE_FIVE);
				break; 
				
			case 'B':
				value.push(THREE_O);
				break;
			
			case 'C+':
				value.push(TWO_FIVE);
				break;
			
			
			case 'C':
				value.push(TWO_O);
				break;
			
			
			case 'D':
				value.push(ONE_O);
				break;
				
			case 'F':
			 	value.push(ZERO);
				break;
				
			case 'AF':
				value.push(ZERO);
				break;
			
			case 'WF':
				value.push(ZERO);
				break;
				
			default:
				value.push(ZERO);
				break;
						
		} // end of switch 

        		
		totalGradePoints += (value[i] * hour[i]);
		totalHours += hour[i];
		
	}  // end for 
	
	gpa = totalGradePoints/totalHours;
	
	gpa = gpa.toFixed(3);
	
	const gradePointText = document.getElementById("gradePoints");
	const creditHoursText = document.getElementById("creditHours");
	const gpaText = document.getElementById("gpa");
	
	gradePointText.value = totalGradePoints;
	creditHoursText.value = totalHours;
	gpaText.value = gpa;
	
	// clear and reset 
	gpa = 0;
	totalHours = 0;
	totalHours = 0;
	courseCount = 0;
	courses = [];
	grade = [];
	value = [];
	hour = [];
		
}























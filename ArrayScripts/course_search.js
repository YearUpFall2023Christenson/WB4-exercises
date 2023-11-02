let courses = [
    {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
    },
    {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
    },
    {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
    }
    ];



    // for(let i = 0 ; i < courses.length; i++){
    
    // }

// When does the PROG200 course start?

var prog200course;

for(let i = 0 ; i < courses.length; i++){
    if(courses[i].CourseId == "PROG200"){
        prog200course = courses[i];
    }
}

console.log("Prog200 starts: " + prog200course.StartDate);


// What is the title of the PROJ500 course?



// What are the titles of the courses that cost $50 or less?

var inexpensiveCourses = [];
for(let i = 0 ; i < courses.length; i++){
    if(courses[i].Fee <= 50){
        inexpensiveCourses.push(courses[i]);
    }
}

for(let i = 0 ; i < inexpensiveCourses.length ; i++){
    console.log(inexpensiveCourses[i].Title);
}


console.log("----------------------------------")
console.log(courses);

console.log("----------------------------------")
console.log(inexpensiveCourses);

// What classes meet in "Classroom 1"?


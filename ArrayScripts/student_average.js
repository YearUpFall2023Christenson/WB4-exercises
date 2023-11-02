"use strict";

let students = [
    {name: "Zephaniah", scores: [100, 96, 99, 92]},
    {name: "Pursalane", scores: [92, 89, 96, 100, 94]},
    {name: "Siddalee", scores: [86, 72, 92]},
    {name: "Ian", scores: [98, 84, 89, 100, 100, 76]},
    {name: "Elisha", scores: [89, 100]},
    {name: "Ezra", scores: [100, 99, 100, 87]}
    ];


    for(let indexOfCurrentStudent = 0 ; indexOfCurrentStudent < students.length ; indexOfCurrentStudent++){
        //begin work with a single (current) student.
        let currentStudent = students[indexOfCurrentStudent];
        console.log(currentStudent.name);

        let averageScore = getAverage(currentStudent.scores);

        console.log("Has an average score of: " + averageScore);
        //end work with a single (current) student.


    }

    function getAverage(numbers){
        let sumOfAllNumbers = 0; 
        for(let indexOfCurrentNumber = 0 ; indexOfCurrentNumber < numbers.length ; indexOfCurrentNumber++){
            let number = numbers[indexOfCurrentNumber]
            sumOfAllNumbers += number;
        }
        return sumOfAllNumbers;
    }

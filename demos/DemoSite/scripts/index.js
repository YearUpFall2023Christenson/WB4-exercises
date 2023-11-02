"use strict";

const clearBtn = document.getElementById("clearBtn");
const newStudentTxt = document.getElementById("newStudentTxt");
const addStudentBtn = document.getElementById("addStudentBtn");
const studentList = document.getElementById("studentList");
const studentList2 = document.getElementById("studentList2");

let Students = [];

window.onload = function(){
    clearBtn.onclick = clearBtnClick;
    addStudentBtn.onclick = addStudentBtnClick;
};

function clearBtnClick(){
    Students = [];
    updateStudentList();
}

function addStudentBtnClick(){
    let newStudentName = newStudentTxt.value;
    Students.push(newStudentName);
    updateStudentList();
    newStudentTxt.value = "";
    // console.log("--------------------------")
    // console.log(Students)
}


function updateStudentList(){

    studentList2.textContent = "";

    for(let student of Students){
        let newOption = document.createElement("option");
        newOption.textContent = student;
        newOption.value = student;
        studentList2.appendChild(newOption);
    }


  //  let tempString = "";

    for(let i = 0 ; i < Students.length ; i++){

        let currentStudent = Students[i];
       // tempString += `<li>${currentStudent}</li>`;
       let newLi = document.createElement("li");
       newLi.textContent = currentStudent;
       studentList.appendChild(newLi);
    }

 //   studentList.innerHTML = tempString;
 
}
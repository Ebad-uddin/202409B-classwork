// else if condition

// let dressCode = prompt("Enter your dress code");
// let day = prompt("Enter the day");

// if (dressCode == "formal" && (day == "Tuesday" || day == "Thursday" || day == "Saturday")) {
//     document.write("you are allowed")
// }else if(dressCode == "casual" && (day == "Monday" || day == "Wednesday" || day == "Friday")){
//     document.write("you are allowed")
// }else{
//     document.write("you are not allowed")
// }



// loops

// for, while, do while, foreach(array), forin(object)


/* 
for(initialization; condition; increment/decrement){

    statement;

}

*/



// for(let i = 1; i <= 10; i++){
//     document.write(i + ") aliyan" + "<br>");
// }

               //step1  step3  
// for(let i = 10; i > 0; i--){
//     document.write("<button> button-" + i + "</button>"); // step 2
// }


// nested for loop

// for(let x = 0; x < 5; x++){         // outer loop

//     for(let y = 0; y < 3; y++){     // inner loop
//         document.write(y + 'inner loop statement <br>');
//     }

// }


// while
/*
variable initialize

while(condition){

    statement;
    increment/decrement;

}

*/


let counter = 1;

// while(counter < 6){     //outer loop
//     let count = 0;
//     while(count < 3){   //inner loop
//         document.write(count + ")inner loop statement <br>");
//         count++;
//     }
//     counter++;
// }


// do{
//     document.write("number" + counter + "<br>");
//     counter++;
// }while(counter < 10);



// Array first syntax
            // 0        //1      //2     //3     //4         //5     //6         //7         index numbers of array
// let names = ["ali", "rohail", "ayan", "hamdan", "umer", "aliyan", "huzaifa", "shahnawaz"];

// document.write(names + "<br>");

// let numbers = [1,2,3,4,54,5];

// document.write(numbers[4] + "<br>")

// document.write("the length of numbers array is:" + numbers.length + "<br>")

// document.write("the length of names array is:" + names.length + "<br>")


// for(let i = 0; i < names.length; i++){
//     document.write(i + ")" +names[i] + "<br>");
// }
// for(let i = 0; i < numbers.length; i++){
//     document.write(i + ")" +numbers[i] + "<br>");
// }


// second syntax of array

// let fruits = new Array("apple", "mango", "orange", "grapes", "strawberry");
// fruits[5] = "guava";

// console.log(fruits)

// third syntax of array

// let colors = Array();

// colors[0] = "red"
// colors[1] = "green"
// colors[2] = "blue"

// console.log(colors[2]);


// array methods in js

// array_name.method_name()

// fruits.forEach(function (element){
//     document.write(element + "<br>");
// });


// multi dimensional

let person_info = ["ebad" , "ebad@gmail.com",
    ['bachlers' , 'masters'],
    "Karachi"
]

let marks = [
    [23, 44, 56],
    [55, 67, 88],
    [44, 65, 76]
]

// for(let x = 0; x < marks.length; x++){
//     for(let y = 0; y < marks[x].length; y++){
//         console.log(marks[x][y])
//     }
// }


// marks.forEach(function(arr){
//     arr.forEach(e => {
//     console.log(e)
// });
// });



// user defined functions in javascript

/* a block of code which can reuse again and again 
function_keyword function_name(){
    statement;
}
*/


function full_name(){
    document.write("Ebad uddin <br>");
    document.write("Ebad uddin <br>");
}

// full_name();
// full_name();
// document.write('break time <br>')


function addition(){
    let a = 9;
    let b = 8;
    let result = a + b;
    document.write(result)
}
// addition()


// parameterized function

function Addition(number1, number2 , number3){
    let result = number1 + number2 + number3;
    document.write(result);
}

// Addition(2, 4 , 5);


// function with return statement

function multiplication(number1, number2){
    let result = number1 * number2;
    return result;
}

// let output = multiplication(3,3);
// document.write(output)


// objects


/* 
let obj = {
    key1 : value1,  property
    key2 : value2

}
*/



let student = {
    name : "saad",
    email : "saad@gmail.com",
    address : {
        present_Add : "Karachi",
        permanent_Add : "Islamabad"
    },
    roll_no : "23422"
}

// document.write("name: " + student.name + "<br>email: " +  student.email + "<br>address: " +  student.address + "<br>Roll No: " +  student.roll_no)

// console.log(student.address.present_Add)



let faculty = {
    name : "Ebad",
    Qualification : "Masters in CS",
    Address : "Karachi",
}

for (const i in faculty) {
    document.write(i + ": " + faculty[i] + "<br>")
}


// DOM(document object model)
let paragraph  = document.getElementById("para")
// paragraph.innerText = "this is paragraph"
paragraph.innerHTML = "<li id='list'>this is paragraph</li>"
console.log(paragraph);

let list = document.getElementById('list');
console.log(list)





































































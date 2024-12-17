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

let fruits = new Array("apple", "mango", "orange", "grapes", "strawberry");
fruits[5] = "guava";

console.log(fruits)

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





































































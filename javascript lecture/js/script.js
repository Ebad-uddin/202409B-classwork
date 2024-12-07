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

while(counter < 6){     //outer loop
    let count = 0;
    while(count < 3){   //inner loop
        document.write(count + ")inner loop statement <br>");
        count++;
    }
    counter++;
}













































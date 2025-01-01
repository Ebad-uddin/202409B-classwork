// let button = document.getElementById('submit_btn');
// // console.log(button)

// button.addEventListener("click", function(e){
//     e.preventDefault();
//     let inputs = document.getElementsByTagName('input');
//     // console.log(inputs)
//     for(let i = 0; i < inputs.length; i++){
//         console.log(inputs[i].value)
//     }
// })

// let Name = document.getElementById('name');
// let btn = document.getElementById('btn');
// // console.log(name, btn)


/*
btn.addEventListener("event" , callback function);
*/ 

// btn.addEventListener("click", function(){
// console.log(Name.value);
// })

// function get_values(){
//     document.getElementById('box').innerHTML = "<h1>" + Name.value + "</h1>" 
//     alert('thanks for your input')
//     // document.write(Name.value);
// }


// JSON (javascript object notation)

/*
json = {
    "name" : "ebad",
    "email" : "ebad@gmail.com"
}

two types of storage present in the browser 
local storage
session storage


*/

// store data into localstorage as (json format)
// retrieve/fetch data from local storage and convert into object.


// how to convert data from object to json


// object
// let person = {
//     name : "uzair",
//     email : "uzair@gmail.com",
//     roll_no : 123
// }

// // console.log(person)

// // converting object into json
// let person_json = JSON.stringify(person)
// // console.log(person_json)


// // converting data from json to object
// let person_object = JSON.parse(person_json);
// console.log(person_object.name)

// document.getElementById('name').innerText = person_object.name
// document.getElementById('email').innerText = person_object.email
// document.getElementById('roll_no').innerText = person_object.roll_no


// localstorage

let Name = "Ebad";

// setting the value in localstorage
// localStorage.setItem("Name", Name);

// getting the value from localstorage
let stroed_name = localStorage.getItem("Name");

document.write(stroed_name)


let btn =  document.getElementById('submit_btn');

btn.addEventListener("click", function(){
    let first_name =  document.getElementById('first_name').value;
    localStorage.setItem("first_name" , first_name);

})

let clear_btn = document.getElementById('clear_btn');

clear_btn.addEventListener("click", function(){
    localStorage.clear();
})










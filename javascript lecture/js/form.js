let button = document.getElementById('submit_btn');
// console.log(button)

button.addEventListener("click", function(e){
    e.preventDefault();
    let inputs = document.getElementsByTagName('input');
    // console.log(inputs)
    for(let i = 0; i < inputs.length; i++){
        console.log(inputs[i].value)
    }
})

document.querySelector("input[type='button']").addEventListener("click", greeting);

let input = document.querySelector("input");
let output = document.querySelector("h1");

function greeting(){
    output.textContent = "Hello " + input.value + ", nice to meet you!";
}
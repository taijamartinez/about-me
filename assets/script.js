document.querySelector("button").addEventListener("click", greeting);
  
let input = document.querySelector("input[type='text']");
let output = document.querySelector("h1");

function greeting() {
    output.textContent = "Hello " + input.value + ", nice to meet you!";
}

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('myButton');
    const output = document.getElementById('output');

    button.addEventListener('click', () => {
      output.textContent = 'Right answer'; 
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault(); 
  
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
  
     
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Subject:', subject);
      console.log('Message:', message);
      
      // clear the form fields after submission
      form.reset();
    });
  });
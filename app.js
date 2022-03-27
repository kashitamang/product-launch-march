// import functions
// console.log("hello from my js code");

// let Dog = 'Paris Hilton';

// console.log (`My dog's name is ${Dog}`);
// console.log (`${Dog} is very cute`);

// 1.store the element with id email-inputs as a variable inputs

const button = document.getElementById('button');
button.addEventListener('click', ()=>{
    const inputs = document.getElementById('email-inputs');
    console.log(inputs);
// 2. add the class "hide" to the element
// with an id of email-inputs
// remove the class "hide" from the 
    inputs.classList.toggle('hide');
// 3. store the element with id thank-you
// grab DOM elements
    thankYou = document.getElementById('thank-you');
    thankYou.classList.toggle('hide');
});


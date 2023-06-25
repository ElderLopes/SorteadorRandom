function numberGenerator(){

    const number1 = Math.ceil(document.querySelector('.number1').value)
    const number2 = Math.floor(document.querySelector('.number2').value)

   const result = Math.floor(Math.random() * (number2 - number1 + 1)) + number1;

   alert(result)
 
}
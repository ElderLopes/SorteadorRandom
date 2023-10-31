function numberGenerator() {

    const number1 = Math.ceil(document.querySelector('.number1').value)
    const number2 = Math.floor(document.querySelector('.number2').value)


    if (number1 >= number2) {

        alert('O 1º número tem que ser menor que o 2º número')
    }
    else {
        const result = Math.floor(Math.random() * (number2 - number1 + 1)) + number1;
        alert(`O numero sorteado foi ${result}`)
    }


}
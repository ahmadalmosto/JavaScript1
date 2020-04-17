'use strict'
function validateCreditCard(cardNumber) {

    if (cardNumber.length !== 16)
  
      return console.log(`Your card ${cardNumber} is not valid must be 16 digits`);
  
  
  
    if (isNaN(cardNumber))
  
      return console.log(`Your card ${cardNumber} is not valid should contain only digits`);
  
  
  
    if (cardNumber[cardNumber.length - 1] % 2 !== 0)
  
      return console.log(`Your card ${cardNumber} is not valid final digit must be even`);
  
  
  
    if (sumNumber(cardNumber) <= 16)
  
      return console.log(`Your card ${cardNumber} is not valid has invalid sum`);
  
  
  
    if (!checkDifferentDidgits(cardNumber))
  
      return console.log(`Your card ${cardNumber} is not valid all same`);
  
  
  
    return console.log(`Your card ${cardNumber} is valid`);
  
  };
function sumNumber(cardNumber) {
    let sum = 0;
  
    for (let i = 0; i < cardNumber.length; i++) {
      sum += Number(cardNumber[i]);
    }
    return sum;
  }
  // function checks if input has more than 1 type( this function sponsored by Noer)
  function checkDifferentDidgits(cardNumber) {
    //initially i assume  no different digits
    let hasDiffDigits = false;
  
    //compare index position
    for (let i = 0; i < cardNumber.length; i++) {
      if (!(i + 1 === cardNumber.length)) {
        //check if they are the same
        if (cardNumber[i] === cardNumber[i + 1]) {
          hasDiffDigits = false;
        } else {
          hasDiffDigits = true;
          return hasDiffDigits;
        }
      }
    }
    return hasDiffDigits;
    
  }
  
  validateCreditCard("5555787788880000");
  validateCreditCard("2222222222221666");
  validateCreditCard("f45729119x033442");
  validateCreditCard("6666666666666666");
  validateCreditCard("6666666666666660");
  validateCreditCard("4444444444444441");
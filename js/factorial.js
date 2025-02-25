// factorial.js

document.addEventListener('DOMContentLoaded', () => {

    const numberInput = document.getElementById('numberInput');   
    const enterBtn = document.getElementById('enterBtn');       
    const resultDisplay = document.getElementById('resultDisplay'); 
  

    enterBtn.addEventListener('click', () => {

      const value = parseInt(numberInput.value, 10);
  

      if (isNaN(value) || value < 0) {
        resultDisplay.textContent = 'Invalid input. Please enter a non-negative integer.';
        return;
      }

      let factorial = 1;
      for (let i = 1; i <= value; i++) {
        factorial *= i;
      }
  

      resultDisplay.textContent = `${value}! = ${factorial}`;
    });
  });
  
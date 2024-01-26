// script.js

function add(num1, num2) {
    return num1 + num2;
  }
  
  function sub(num1, num2) {
    return num1 - num2;
  }
  
  function mul(num1, num2) {
    return num1 * num2;
  }
  
  function div(num1, num2) {
    return num1 / num2;
  }
  
  function performOperation(operation) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultElement = document.getElementById('result');
  
    switch (operation) {
      case 'add':
        resultElement.innerText = 'Result: ' + add(num1, num2);
        break;
      case 'sub':
        resultElement.innerText = 'Result: ' + sub(num1, num2);
        break;
      case 'mul':
        resultElement.innerText = 'Result: ' + mul(num1, num2);
        break;
      case 'div':
        resultElement.innerText = 'Result: ' + div(num1, num2);
        break;
      default:
        resultElement.innerText = 'Invalid operation';
        break;
    }
  }
// The application flow starts when you create an an object.
// Please starts from object creation.
var CalculatorApp = (function () {
    // This is a constructor function to create an object
    function CalculatorApp() {
        CalculatorApp.initialize();
        CalculatorApp.addEventListeners();
    }
    CalculatorApp.initialize = function () {
        CalculatorApp.firstNumberElement = document.querySelector('#firstNumber');
        CalculatorApp.secondNumberElement = document.querySelector('#secondNumber');
        CalculatorApp.operatorElement = document.querySelector('#operator');
        CalculatorApp.resultButtonElement = document.querySelector('#result-button');
        CalculatorApp.equalsButtonElement = document.querySelector('#equals-button');
        CalculatorApp.plusButtonElement = document.querySelector('#plus-button');
        CalculatorApp.minusButtonElement = document.querySelector('#minus-button');
        CalculatorApp.divideButtonElement = document.querySelector('#divide-button');
        CalculatorApp.multiButtonElement = document.querySelector('#multiply-button');
        CalculatorApp.clearButtonElement = document.querySelector('#clear-button');
        // The control jumps back to constructor function
    };
    // This is to add all event listeners for buttons
    CalculatorApp.addEventListeners = function () {
        CalculatorApp.plusButtonElement.addEventListener('click', CalculatorApp.changeOperatorPlus);
        CalculatorApp.minusButtonElement.addEventListener('click', CalculatorApp.changeOperatorMinus);
        CalculatorApp.divideButtonElement.addEventListener('click', CalculatorApp.changeOperatorDiv);
        CalculatorApp.multiButtonElement.addEventListener('click', CalculatorApp.changeOperatorMulti);
        CalculatorApp.clearButtonElement.addEventListener('click', CalculatorApp.clearAll);
        CalculatorApp.equalsButtonElement.addEventListener('click', CalculatorApp.calculate);
    };
    CalculatorApp.changeOperatorPlus = function () {
        CalculatorApp.operatorElement.textContent = '+';
    };
    CalculatorApp.changeOperatorMinus = function () {
        CalculatorApp.operatorElement.textContent = '-';
    };
    CalculatorApp.changeOperatorMulti = function () {
        CalculatorApp.operatorElement.textContent = '*';
    };
    CalculatorApp.changeOperatorDiv = function () {
        CalculatorApp.operatorElement.textContent = '/';
    };
    CalculatorApp.clearAll = function () {
        CalculatorApp.firstNumberElement.value = '';
        CalculatorApp.secondNumberElement.value = '';
        CalculatorApp.operatorElement.textContent = '+';
        CalculatorApp.resultButtonElement.textContent = 'RESULT';
    };
    CalculatorApp.calculate = function () {
        var firstNumber = CalculatorApp.firstNumberElement.value;
        var secondNumber = CalculatorApp.secondNumberElement.value;
        var operator = CalculatorApp.operatorElement.textContent.trim();
        var result = 0;
        if (firstNumber !== '' && secondNumber !== '') {
            var num1 = parseFloat(firstNumber);
            var num2 = parseFloat(secondNumber);
            switch (operator) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '/':
                    result = num1 / num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                default:
                    result = 0;
                    break;
            }
            CalculatorApp.resultButtonElement.textContent = result.toString();
        }
        else {
            CalculatorApp.resultButtonElement.textContent = 'RESULT';
        }
    };
    return CalculatorApp;
}());
// Flow Starts Here
// Object Creation
var calculatorApp = new CalculatorApp();

// The application flow starts when you create an an object.
// Please starts from object creation.

class CalculatorApp {
    private static firstNumberElement:HTMLInputElement;
    private static secondNumberElement:HTMLInputElement;
    private static operatorElement:HTMLButtonElement;
    private static equalsButtonElement:HTMLButtonElement;
    private static resultButtonElement:HTMLButtonElement;
    private static plusButtonElement:HTMLButtonElement;
    private static minusButtonElement:HTMLButtonElement;
    private static divideButtonElement:HTMLButtonElement;
    private static multiButtonElement:HTMLButtonElement;
    private static clearButtonElement:HTMLButtonElement;


    // This is a constructor function to create an object
    constructor(){
        CalculatorApp.initialize();
        CalculatorApp.addEventListeners();
    }

    public static initialize(){
        CalculatorApp.firstNumberElement = document.querySelector('#firstNumber') as HTMLInputElement;
        CalculatorApp.secondNumberElement = document.querySelector('#secondNumber') as HTMLInputElement;
        CalculatorApp.operatorElement = document.querySelector('#operator') as HTMLButtonElement;
        CalculatorApp.resultButtonElement = document.querySelector('#result-button') as HTMLButtonElement;
        CalculatorApp.equalsButtonElement = document.querySelector('#equals-button') as HTMLButtonElement;
        CalculatorApp.plusButtonElement = document.querySelector('#plus-button') as HTMLButtonElement;
        CalculatorApp.minusButtonElement = document.querySelector('#minus-button') as HTMLButtonElement;
        CalculatorApp.divideButtonElement = document.querySelector('#divide-button') as HTMLButtonElement;
        CalculatorApp.multiButtonElement = document.querySelector('#multiply-button') as HTMLButtonElement;
        CalculatorApp.clearButtonElement = document.querySelector('#clear-button') as HTMLButtonElement;
        // The control jumps back to constructor function
    }

    // This is to add all event listeners for buttons
    public static addEventListeners(){
        CalculatorApp.plusButtonElement.addEventListener('click',CalculatorApp.changeOperatorPlus);
        CalculatorApp.minusButtonElement.addEventListener('click',CalculatorApp.changeOperatorMinus);
        CalculatorApp.divideButtonElement.addEventListener('click',CalculatorApp.changeOperatorDiv);
        CalculatorApp.multiButtonElement.addEventListener('click',CalculatorApp.changeOperatorMulti);
        CalculatorApp.clearButtonElement.addEventListener('click',CalculatorApp.clearAll);
        CalculatorApp.equalsButtonElement.addEventListener('click',CalculatorApp.calculate);
    }

    public static changeOperatorPlus(){
        CalculatorApp.operatorElement.textContent = '+';
    }
    public static changeOperatorMinus(){
        CalculatorApp.operatorElement.textContent = '-';
    }
    public static changeOperatorMulti(){
        CalculatorApp.operatorElement.textContent = '*';
    }
    public static changeOperatorDiv(){
        CalculatorApp.operatorElement.textContent = '/';
    }
    public static clearAll(){
        CalculatorApp.firstNumberElement.value = '';
        CalculatorApp.secondNumberElement.value = '';
        CalculatorApp.operatorElement.textContent = '+';
        CalculatorApp.resultButtonElement.textContent = 'RESULT';
    }
    public static calculate(){
        let firstNumber = CalculatorApp.firstNumberElement.value;
        let secondNumber = CalculatorApp.secondNumberElement.value;
        let  operator = CalculatorApp.operatorElement.textContent.trim();
        let result:number = 0;
        if(firstNumber !== '' && secondNumber !== ''){
            let num1 = parseFloat(firstNumber);
            let num2 = parseFloat(secondNumber);
            switch(operator){
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
        else{
            CalculatorApp.resultButtonElement.textContent = 'RESULT';
        }
    }
}

// Flow Starts Here
// Object Creation
let calculatorApp = new CalculatorApp();
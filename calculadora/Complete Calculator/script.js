class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.currentOperand = "";
        this.previousOperand = "";
        this.operator = undefined;
        this.resultIsGiven = false;
    }
  
    clear() {
        this.currentOperand = "";
        this.previousOperand = "";
        this.operator = undefined;
        this.resultIsGiven = false;
        this.newNumber = false;
    }

    changeSign() {
        if (this.currentOperand === "") {
            return;
        }
        this.currentOperand = -this.currentOperand;
    }

    doPercentage() {
        if (this.currentOperand === "") {
            return;
        }
        this.currentOperand = this.currentOperand / 100;
        this.resultIsGiven = true;
    }
  
  
    appendNumber(number) {
        if ((number === "." && this.currentOperand.includes(".")) || (number === "0" && !this.currentOperand.includes(".") && this.currentOperand[0] === "0")) {
            return;
        }
        if (number === "." && this.currentOperand === "") {
            this.currentOperand = "0.";
            return;
        }
        if (this.resultIsGiven === true || (this.previousOperand !== "" && this.newNumber === true)) {
            this.currentOperand = "";
        }

        this.currentOperand += number;
        this.newNumber = false;
        this.resultIsGiven = false;
    }
  
    chooseOperation(operator) {
        if (this.currentOperand === "" && this.previousOperand === "") {
            return;
        }
        if (this.previousOperand !== "" && this.newNumber === false) {
            this.compute();
        }
        if (this.operator !== undefined) {
            this.previousOperand = this.currentOperand;
            this.operator = operator;
            this.previousOperand += this.operator;
            return;
        }

        this.operator = operator;
        this.previousOperand = this.currentOperand + this.operator;
        this.newNumber = true;
    }
  
    compute() {
        let result;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) {
            this.currentOperand = "";
            return;
        }
        switch (this.operator) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case 'x':
                result = prev * current;
                break;
            case '÷':
                result = prev / current;
                break;
            default:
                break;
        }

        if (result.toString().includes(".") && result.toString().split(".")[1].length >= 5) {
            result = result.toFixed(5);
        }

        this.currentOperand = result;
        this.operator = undefined;
        this.previousOperand = "";
        this.resultIsGiven = true;
    }
  
    updateDisplay() {
        this.currentOperandTextElement.textContent = this.currentOperand;
        this.previousOperandTextElement.textContent = this.previousOperand;
    }
}
  
  
const numberButtons = document.querySelectorAll(".td__number");
const operationButtons = document.querySelectorAll(".td__operator");
const equalButton = document.querySelector(".td__equal");
const allClearButton = document.querySelector(".td__all-clear");
const percentageButton = document.querySelector(".td__percentage");
const changeSignButton = document.querySelector(".td__change-sign");
const previousOperandTextElement = document.querySelector(".result-screen__previous-operand");
const currentOperandTextElement = document.querySelector(".result-screen__current-operand");

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

const addEventListeners = () => { 
    numberButtons.forEach(button => {
        button.addEventListener("click", () => {
            calculator.appendNumber(button.textContent);
            calculator.updateDisplay();
    })
    })

    operationButtons.forEach(button => {
        button.addEventListener("click", () => {
            calculator.chooseOperation(button.textContent);
            calculator.updateDisplay();
    })
    })

    equalButton.addEventListener("click", ()  => {
        calculator.compute();
        calculator.updateDisplay();
    })

    allClearButton.addEventListener("click", ()  => {
        calculator.clear();
        calculator.updateDisplay();
    })

    percentageButton.addEventListener("click", () => {
        calculator.doPercentage();
        calculator.updateDisplay();
    })

    changeSignButton.addEventListener("click", () => {
        calculator.changeSign();
        calculator.updateDisplay();
    })
}

addEventListeners();
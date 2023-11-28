class Calculator{
    constructor(){
        // aqui é a propriedade que recebe os valores digitados
        this.displayValue = "";
    }

    // este método adiciona valores à propriedade displayValue
    appendToDisplay(value){
        this.displayValue += value;
        this.updateDisplay(); 
    }
 
    updateDisplay(){
        document.getElementById(`displayContent`).value = this.displayValue;
    }

    clearDisplay(){
        this.displayValue = ` `;
        this.updateDisplay();
    }
    calculate(){
        try{
            const result = eval(this.displayValue)
            this.displayValue = result
            this.updateDisplay()
        } catch (error){
            this.displayValue = `Error`;
            this.updateDisplay();
        }
    }

}

// instanciando o objeto
const calc = new Calculator();
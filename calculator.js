/* ------------------------------------------------- */
/*                By Boloo                */
/*                                                   */
/* ------------------------------------------------- */

// CALCULATOR BUTTONS
let calculator_buttons = [
    {
        name : "rad",
        symbol : "Rad",
        formula : false,
        type : "key"
    },
    {
        name : "deg",
        symbol : "Deg",
        formula : false,
        type : "key"
    },
    {
        name : "square-root",
        symbol : "√",
        formula : "Math.sqrt",
        type : "math_function"
    },
    {
        name : "square",
        symbol : "x²",
        formula : "POWER",
        type : "math_function"
    },
    {
        name : "open-parenthesis",
        symbol : "(",
        formula : "(",
        type : "number"
    },
    {
        name : "close-parenthesis",
        symbol : ")",
        formula : ")",
        type : "number"
    },
    {
        name : "clear",
        symbol : "C",
        formula : false,
        type : "key"
    },
    {
        name : "delete",
        symbol : "⌫",
        formula : false,
        type : "key"
    },
    {
        name : "pi",
        symbol : "π",
        formula : "Math.PI",
        type : "number"
    },
    {
        name : "cos",
        symbol : "cos",
        formula : "trigo(Math.cos,",
        type : "trigo_function"
    },{
        name : "sin",
        symbol : "sin",
        formula : "trigo(Math.sin,",
        type : "trigo_function"
    },{
        name : "tan",
        symbol : "tan",
        formula : "trigo(Math.tan,",
        type : "trigo_function"
    },{
        name : "7",
        symbol : 7,
        formula : 7,
        type : "number"
    },{
        name : "8",
        symbol : 8,
        formula : 8,
        type : "number"
    },{
        name : "9",
        symbol : 9,
        formula : 9,
        type : "number"
    },
    {
        name : "division",
        symbol : "÷",
        formula : "/",
        type : "operator"
    },
    {
        name : "e",
        symbol : "e",
        formula : "Math.E",
        type : "number"
    },
    {
        name : "acos",
        symbol : "acos",
        formula : "inv_trigo(Math.acos,",
        type : "trigo_function"
    },{
        name : "asin",
        symbol : "asin",
        formula : "inv_trigo(Math.asin,",
        type : "trigo_function"
    },{
        name : "atan",
        symbol : "atan",
        formula : "inv_trigo(Math.atan,",
        type : "trigo_function"
    },
    {
        name : "4",
        symbol : 4,
        formula : 4,
        type : "number"
    },{
        name : "5",
        symbol : 5,
        formula : 5,
        type : "number"
    },{
        name : "6",
        symbol : 6,
        formula : 6,
        type : "number"
    },{
        name : "multiplication",
        symbol : "×",
        formula : "*",
        type : "operator"
    },{
        name : "factorial",
        symbol : "×!",
        formula : "FACTORIAL",
        type : "math_function"
    },{
        name : "exp",
        symbol : "exp",
        formula : "Math.exp",
        type : "math_function"
    },{
        name : "ln",
        symbol : "ln",
        formula : "Math.log",
        type : "math_function"
    },{
        name : "log",
        symbol : "log",
        formula : "Math.log10",
        type : "math_function"
    },{
        name : "1",
        symbol : 1,
        formula : 1,
        type : "number"
    },{
        name : "2",
        symbol : 2,
        formula : 2,
        type : "number"
    },{
        name : "3",
        symbol : 3,
        formula : 3,
        type : "number"
    },{
        name : "subtraction",
        symbol : "–",
        formula : "-",
        type : "operator"
    },{
        name : "power",
        symbol : "x<span>y</span>",
        formula : "POWER",
        type : "math_function"
    },{
        name : "ANS",
        symbol : "ANS",
        formula : "ans",
        type : "number"
    },{
        name : "percent",
        symbol : "%",
        formula : "/100",
        type : "number"
    },{
        name : "comma",
        symbol : ".",
        formula : ".",
        type : "number"
    },{
        name : "0",
        symbol : 0,
        formula : 0,
        type : "number"
    },{
        name : "calculate",
        symbol : "=",
        formula : "=",
        type : "calculate"
    },{
        name : "addition",
        symbol : "+",
        formula : "+",
        type : "operator"
    }
];

// SELECT INPUT ELEMENTS
let outputElements = document.querySelector(".operation .value");
let resultElement = document.querySelector(".result .value");
let inputElements = document.querySelector(".input");

// PUT ALL INPUT KEYS INPLACE
function showButtons(){
    let button_count = 0;
calculator_buttons.forEach(button => {
    

    if(button_count % 8 === 0){
        inputElements.innerHTML += `<div class='row'> 
        </div>`;
    } 
    let button_row = document.querySelector(".row:last-child")
    button_row.innerHTML += `<button id='${button.name}'>${button.symbol}</button>`;
    button_count++;
})
}

showButtons();

// ADD EVENT LISTENERS TO THE INPUT EVENTS
inputElements.addEventListener("click", (event) =>{
    let buttonEvent = event.target.id;
    
    calculator_buttons.forEach(button => {
        if(button.name === buttonEvent){
            calculate(button);
            console.log(button);
        }
    })
})

//OBJECT TO COLLECT BUTTON TYPE AND FORMULA i.e display type and use formula to calculate
const data = {
    operation: [],
    formula: []
}

// OPERATORS
let OPERATORS = ["+", "-", "*", "/"];

// DEG AND RAD SIGNAL
let RADIAN = true;
let radElement = document.getElementById("rad");
let degElement = document.getElementById("deg");

radElement.classList.add("active-angle");
function angleToggler(){
    radElement.classList.toggle("active-angle");
    degElement.classList.toggle("active-angle");
}

//angleToggler();
// CALCULATE BUTTON
let ans;
function calculate(button){
    if(button.type == "number"){
        if(button.name === "ANS"){
            data.operation.push(ans);
            data.formula.push(ans);
        }else{
            data.operation.push(button.symbol);
            data.formula.push(button.formula);
        }
            
        
        
    } else if(button.type == "math_function"){

        if (button.name === "factorial"){
            let symbol, formula;
            symbol = "!";
            formula = button.formula;
            data.operation.push(symbol);
            data.formula.push(formula);
        } else if (button.name === "square"){
            let symbol, formula;
            symbol = "^(";
            formula = button.formula;
            data.operation.push(symbol);
            data.formula.push(formula);

            data.operation.push("2)");
            data.formula.push("2)");
        } else if(button.name === "power"){
            let symbol, formula;
            symbol = "^(";
            formula = button.formula;
            data.operation.push(symbol);
            data.formula.push(formula);
            console.log(data.operation);
         } else{
            let mathSymbol = button.symbol + "(";
            let mathFormula = button.formula + "(";

            data.operation.push(mathSymbol);
            data.formula.push(mathFormula);
        }
        

    } else if(button.type == "trigo_function"){
        let symbol, formula;
        symbol = data.operation.push(button.symbol + "(");
        formula = data.formula.push(button.formula);
    } else if(button.type == "calculate"){

        let rez = data.formula.join("");
        let result;
        
        let BASESEARCH, POWERSEARCH;
        BASESEARCH = search(data.formula, "POWER");
        POWERSEARCH = search(data.formula, "FACTORIAL");
        console.log(data.formula, BASESEARCH, POWERSEARCH);

        let POWERBASES = POWERBASEGETTER(data.formula, BASESEARCH);
        let NUMBERS = FACTORIALEGETTER(data.formula, BASESEARCH); 
        console.log("num...");
        console.log(NUMBERS);
        NUMBERS.forEach(factorial => {
            rez = rez.replace(factorial.toReplace, factorial.replacement)
        })
        console.log("hurray");
        console.log(POWERBASES);

        POWERBASES.forEach(base => {
            let toReplace = base + "POWER";
            let replacement = "Math.pow(" + base + ",";

            rez = rez.replace(toReplace, replacement);
        })

        //FACTORIAL FUNCTION GETTER
        function FACTORIALEGETTER(formula, BASESEARCH){

            let numbers = [] // save all numbers(---) + (----)
            let fact_sequence = 0;

            BASESEARCH.forEach(index => {

                let number = [] // just (1+2) for example
                let next_index = index + 1;
                let next_item = formula[next_index]
                

                if(next_item === "FACTORIAL"){
                    fact_sequence += 1;
                    return;
                }

                let first_fact_index = index - fact_sequence;

                let previous_index = first_fact_index - 1;

                let paren_count = 0;

                while(previous_index >= 0){

                    if(formula[previous_index] === ")") paren_count++;
                    if(formula[previous_index] === "(") paren_count--;

                    let is_operator = false;
                    OPERATORS.forEach(OPERATOR => {
                        if(OPERATOR === formula[previous_index]) is_operator = true;
                    })

                    if(paren_count == 0 && is_operator) break;
                    number.unshift(formula[previous_index]);
                    previous_index--;
                }
                let number_str = number.join("");
                let factorial = "factorial(", close_paren = ")";
                let times = fact_sequence + 1;

                let toReplace = number_str + "FACTORIAL".repeat(times);
                let replacement = factorial.repeat(times) + number_str + close_paren.repeat(times);
                numbers.push({
                    toReplace:toReplace, replacement:replacement
                })
                fact_sequence = 0; 
            })
            return numbers;
        }
        //POWERBASE AND FACTORIALBASE GETTER FUNCTIONS
        function POWERBASEGETTER(formula, BASESEARCH){
            let power_bases = [];
            
            BASESEARCH.forEach(index => {
                let base = [];

                let paren_count = 0;

                let previous_index = index - 1;

                while(previous_index >= 0){
                    if(formula[previous_index] == ")") paren_count++;
                    if(formula[previous_index] == "(") paren_count--;

                    let is_operator = false;
                    OPERATORS.forEach(OPERATOR => {
                        if(formula[previous_index] == OPERATOR) is_operator = true;
                    })
                    let is_power = formula[previous_index] == "POWER";

                    if( (is_operator && paren_count == 0) || is_power ) break;

                    base.unshift(formula[previous_index]);
                    previous_index--;
                }
                power_bases.push(base.join(""));
            })
            return power_bases;
        }

        function search(array, keyword){
            let result = [];

            array.forEach((button, index) => {
                if(button === keyword){
                    result.push(index);
                }
            })
            return result;
        }

        try {
            result = eval(rez);
        } catch (error) {
            if(error instanceof SyntaxError){
                result = "Syntax Error";
                updateResult(result);
                return;
            }
            
        }
        ans = result;
        
        data.formula = [result];
        updateResult(result);
    } else if(button.type == "operator"){
        data.operation.push(button.symbol);
        data.formula.push(button.formula);
    }  else if(button.type == "key"){
         if(button.name == "delete"){
        data.operation.pop();
        data.formula.pop();
    } else if(button.name == "clear"){
        data.operation = [];
        data.formula = [];
         updateResult(0);
    } else if (button.name === "rad"){
        RADIAN = true;
        angleToggler();
    } else if(button.name === "deg"){
        RADIAN = false;
        angleToggler();
    }
    }  

    updateOperationInput(data.operation.join(""));
}
function updateOperationInput(operation){
    outputElements.innerHTML = operation;
}
function updateResult(operation){
    resultElement.innerHTML =  operation || 0;
}

//TRIG FUNCTIONS

function trigo(callback, degree){
    let angle = degree;
    if(!RADIAN){
        angle = Math.PI * angle / 180;
    }
    return callback(angle);
}

function inv_trigo(callback, value){
    angle = callback(value);

    if(!RADIAN){
        angle = angle * 180 / Math.PI;
    }
    return angle;
}

function factorial(number){
    if(number % 1 != 0) return gamma(number + 1);
    if(number === 0 || number === 1){
        return 1
    }
    else{
        return number * factorial(number - 1);
    }
    
}

// GAMMA FUNCTINON
function gamma(n) {  // accurate to about 15 decimal places
    //some magic constants 
    var g = 7, // g represents the precision desired, p is the values of p[i] to plug into Lanczos' formula
        p = [0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
    if(n < 0.5) {
      return Math.PI / Math.sin(n * Math.PI) / gamma(1 - n);
    }
    else {
      n--;
      var x = p[0];
      for(var i = 1; i < g + 2; i++) {
        x += p[i] / (n + i);
      }
      var t = n + g + 0.5;
      return Math.sqrt(2 * Math.PI) * Math.pow(t, (n + 0.5)) * Math.exp(-t) * x;
    }
}
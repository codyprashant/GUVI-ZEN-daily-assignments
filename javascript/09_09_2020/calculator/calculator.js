class Calculator {
      
    addition(a,b){
      return a+b;
    }

    subtract(a,b){
      return a-b;
    }
    
    multiply(a,b){
      return a*b;
    }
    
    division(a,b){
      return a/b;
    }
    
}

let calc = new Calculator();
console.log(calc.addition(4,5)); // 9

console.log(calc.subtract(4,5)); // -1

console.log(calc.multiply(4,5)); // 20

console.log(calc.division(20,5)); // 4
var array1 = [20, 30, 40, 50, 62];
var array2 = [20, 30, 'Gupta', 40, 50, 'Prashant'];

// ES6 way of writing reduce logic to add all values from left to righvt of array
const reduceFunction = (array, func, total = 0) => {

  for (let i = 0; i < array.length; i++) {
    total = func(total , array[i]);
  }
  return total;
};

const sumFunc = (a, b) => {
  return a+b;
}

console.log(`Final return value of reduce based function is "${reduceFunction(array1, sumFunc)}"`);

// ES6 way of writing fiter logic to filter the all values of an array who satisfies provided condition.
const filterFunction = (array) => {
    var finalArr = [];
    for (let i = 0; i < array.length; i++) {
        if(isNaN(array[i])){
            finalArr.push(array[i])
        }
    }
    return finalArr;
  };

  console.log(filterFunction(array2));


// ES6 way of writing fiter logic to find the value from an array who satisfies provided condition.
const findFunction = (array, cond) => {
    var finalArr = [];
    for (let i = 0; i < array.length; i++) {
        if(array[i] > cond){
            finalArr.push(array[i]);
            break;
        }
    }
    return finalArr;
  };

  console.log(`Final return value of find based function is "${findFunction(array1, 30)}"`);

// ES6 way of writing fiter logic to find the value from an array who satisfies provided condition.
const sumFunction = (array) => {
    var total = 0;
    for (let i = 0; i < array.length; i++) {
      total += array[i];
    }
    return total;
  };

  console.log(`Final return value of sum based function is "${sumFunction(array1)}"`);


  // ES6 way of writing chunk logic to pair array in specific no of elements from an array.
const chunkFunction = (array, pair) => {
  var final = [];
  var tempArr = [];
  var count = 0;
  for (let i = 0; i < array.length; i++) {
    tempArr.push(array[i]);
    count++;
    if(pair == count){
      final.push(tempArr);
      tempArr =[];
      count =0;
    }
  }
  final.push(tempArr);
  return final;
};

console.log(chunkFunction(array1, 2));
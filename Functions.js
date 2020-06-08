const factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1) }

console.log(factorial(5))


function map(a) {
    let result = []; // Create a new Array
    let i; // Declare variable
    for (i = 0; i != a.length; i++)
      result[i] = f(a[i]);
    return result;
  }
  const f = function(x) {
     return x * x * x; 
  }
  let numbers = [0, 1, 2, 5, 10];
  let cube = map(numbers);
  console.log(cube);

  function A(x) {
    function B(y) {
      function C(z) {
        console.log(x + y + z);
      }
      C(3);
    }
    B(2);
  }
  A(1);
  function myConcat(separator) {
    var result = ''; // initialize list
    var i;
    // iterate through arguments
    for (i = 1; i < arguments.length; i++) {
       result += arguments[i] + separator;
    }
    return result;
 }
 console.log(myConcat.result)
 console.log(myConcat(';', 'elephant', 'giraffe', 'lion', 'cheetah'));
 function multiplier(a, b) {
   console.log(typeof b)
  // b = typeof b !== 'undefined' ?  b : 1;

  return a * b;
}

console.log(multiplier(5)); 
function multiply(multiplier, ...theArgs) {
  return theArgs.map(x => multiplier * x);
}

var arr = multiply(2, 1, 2, 3);
console.log(arr);
//constructor pascal notation
function Circle(radius){
this.radius= radius;
this.area = function area(){
console.log(3.14*this.radius*this.radius);
}
}
new Circle(5).area()
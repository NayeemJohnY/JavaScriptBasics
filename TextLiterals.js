const hello = 'Hello, World!';
const helloLength = hello.length;
hello[0] = 'L'; // This has no effect, because strings are immutable
console.log(hello[0]);

const five = 5;
const ten = 10;
console.log(`Fifteen is ${five + ten} and not ${2 * five + ten}.`);
console.log('Fifteen is ' + (five + ten) + ' and not ' + (2 * five + ten) + '.');

let cats = []
cats[30] = ['Dusty']
console.log(cats.length);


let colors = ['red', 'green', 'blue']
colors.forEach(color => console.log(color))

let myArray = new Array('1', '2', '3')
myArray = myArray.concat('a', 'b', 'c')
console.log(myArray);
myArray= myArray.join(' , ')
console.log(myArray);
let arr = new Array('1', '2')
arr = arr.concat('a', 'b', 'c')
arr.push('3')
console.log(arr);
arr.pop()
console.log(arr);
arr.reverse()
console.log(arr);
arr.sort()
console.log(arr);

function isNumber(value) {
    return typeof value === 'number'
  }
  let a1 = [1, 2, 3]
  console.log(a1.some(isNumber))  // logs true
  console.log(a1.every(isNumber))
  let a2 = [1, '2', 3]
  console.log(a2.some(isNumber))  // logs true
  console.log(a2.every(isNumber))
  let a3 = ['1', '2', '3']
  console.log(a3.some(isNumber))
  console.log(a3.every(isNumber))

  var myObj = new Object(),
    str = 'myString',
    rand = Math.random(),
    obj = new Object();

myObj.type              = 'Dot syntax';
myObj['date created']   = 'String with space';
myObj[str]              = 'String value';
myObj[rand]             = 'Random Number';
myObj[obj]              = 'Object';
myObj['']               = 'Even an empty string';

console.log(myObj)
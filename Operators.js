// Arithmetic
let x =2;
let y = 4;
console.log(x + y);
console.log(y - x);
console.log(x * y);
console.log(y / x);
console.log(y % x);
console.log(x ** y);

// //++ and --
console.log(x++);//2 printed and incremented
console.log(x);//3
console.log(++x);//4

// //assignment
let z=5;
z+=5;
console.log(z)//10
z=+2//assignment
console.log(z)

// //comparison
let ac= 10;
console.log(ac>1)
console.log(ac===10)
//lose equvality
console.log(ac=='10')
console.log(1 == true)

// //Terenary
let points =100;
let type =points> 100? 'gold': 'silver';
console.log(type);

// //Logical
let income =true
let creditScore = false
let loanEligible = income && creditScore
console.log(loanEligible)
console.log(!loanEligible)


console.log(false || 'nayeem');
console.log(true || 'nayeem');
console.log(1 || 2 ||3);
console.log(false|| undefined)
console.log(false|| null)
let usercolor = false
let defalut = 'Blue'
console.log(usercolor || defalut)

// Binary bitwise Operator
//1 =0000001
// 2 =0000010
console.log(1|2)//3
console.log(1&2)//0

// operator precedence
console.log(2+3*4)//14
console.log((2+3)*4)//20
// swap 2 numdeers
let a =10;
let b =20;
let c =a;
a=b;
b=c;
console.log("a "+a)
console.log("b "+b)
a=a+b;
b=a-b;
a=a-b;
console.log("a "+a)
console.log("b "+b)

//without Destructing
var foo =['xyz', 'two', 'three']
console.log(foo);
var [ss, two, three]=foo;
console.log(ss);


var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
delete trees[3];
console.log(trees)
console.log(trees[3])

let xy = 4

console.log(xy<<1)//0000100 --> 0001000
console.log(xy>>1)//0000100 --> 0000010
console.log(19>>>1)//0010011 --> 0001001
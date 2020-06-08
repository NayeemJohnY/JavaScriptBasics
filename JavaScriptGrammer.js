//Comments
/*
Comments Single, Multi Line comments
*/

//Declarations
/* var - option initialization
/*let - option initialization
/*const - read only initialization required
*/

//Functions
dataTypes(); //-primitive data types & reference data types-object arrays, functions 
function dataTypes(){
    var var1;
    console.log(var1);//undefined
    var1 = 50;
    console.log(var1);//50
    let  let1;
    console.log(let1);//undefined
    let1 = 50;
    console.log(let1);//50
   // const const1; //SyntaxError: Missing initializer in const declaration
    const const2=500;
    console.log(const2);//500
    x =200;
    console.log("X value is "+ x);
    x = x+45;
    console.log("X value is "+ x);
    x= x+"jj";
    console.log("X value is "+ x);
    var a;
    a+5
    console.log("a:"+a);//undefined
    var b=null
    b+5;
    console.log("b:"+b);//null
}
// console.log(var1);//ReferenceError: var1 is not defined
// console.log(let1); //ReferenceError: let1 is not defined
varaibleScope();
function varaibleScope(){
    if(true){
        var x=45;
        let y=50;
        z=80;
        const c =10;
       // c=c+50;//TypeError: Assignment to constant variable.
        console.log("C: "+c);
    }
    console.log("x: "+x)
    //console.log("y: "+y) //ReferenceError: y is not defined let cannot be accessed outside of block
    console.log("z: "+z)
    //console.log("c: "+c)//ReferenceError: c is not defined const  cannot be accessed outside of block
}
variableHoisting();
function variableHoisting(){
    console.log(z === undefined); // true
    var z=3;
    console.log(z);
    strFun();
    var str="Nayeem"
    function strFun(){
        //console.log(x === undefined);//ReferenceError: x is not defined due to let
        let x=3;
        console.log(str);//undefined
    }
    function f(){};
    //var f=10;
    console.log(f);
    //const f=10; //Identifier 'f' has already been declared
const MY_ARRAY = ['HTML','CSS'];
MY_ARRAY.push('JAVASCRIPT');
console.log(MY_ARRAY);
const MY_OBJECT = {'K': 'V'};
MY_OBJECT.K = 'otherValue';
console.log(MY_OBJECT);
}
dataTypeConversion();
function dataTypeConversion(){
console.log("This is asnwerr "+42);
console.log(52+"This is asnwerr ");
console.log(1+5+'45');//645
console.log("45"+1+5+'45');//451545
console.log("45"+(1+5)+'45');//45645
console.log(parseInt('101',2));
console.log('1.1' + '1.1') // '1.11.1'
console.log((+'1.1') + (+'1.1')) // 2.2   )
console.log((+'100.20')/4);
}
//Literals represent values in JavaScript. These are fixed values
Literals();
function Literals(){
    let myList = ['home', , 'school', , ];
    console.log(myList);
    var car = { myCar: 'Saturn',  7: "seven",'!': 'Bang!' };
    console.log(car.myCar)
    console.log(car[7]);
    //console.log(car.!);
    console.log(car['!']);
    console.log("John's cat".length) 
    console.log("In JavaScript \n is a line-feed.")
    var quote = "He read \"The Cremation of Sam McGee\" by R.W. Service.";
console.log(quote);
}
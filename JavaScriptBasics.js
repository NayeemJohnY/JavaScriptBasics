//Data types
let name ="Nayeem";
console.log("Hello "+ name);

let s1= "nayeem";
console.log(typeof(s1));
let number = 1702
console.log(typeof(number));
bool =false;
console.log(typeof(bool));
let price
console.log(typeof(price));
let model =null;
console.log(typeof(model));
model =10;
console.log(typeof(model));//Dynamic typing
//Objects Data type
let user ={
 name:"Nayeem",
 age:25
};
//1. dot notation
console.log(user)
console.log(typeof(user))
console.log(user.name)
user.age =26;
console.log(user)
user.bool=10;//new paramter will be added
console.log(user)
//2. bracket notation
user['name']="John";//update
user[name]="NayeemJohn";//create a new entry "Nayeem as variable"
console.log(user)

//Arrays -Objects only in Javascript
let languages =[];
console.log(languages.length)
languages=["Java","Js", "Ruby"] 
console.log(languages.length)
console.log(languages[3])//Not a bound of Exceptions

//functions
function myfun(){
    console.log("This is Function console")
}
myfun();

//fucntion with  params
function functionwithParam(param1, param2){
    console.log("Parameter is "+param1+ " param 2: " + param2)
}
functionwithParam("Hey Buddy!!!!!!!!");

//function with return
function add(num1, num2) {
    return num1+num2;
}
console.log(add(10,30))
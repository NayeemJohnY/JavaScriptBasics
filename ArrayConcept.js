/**
 * 1. Arrays Square bractets
 *  2. Functions -length, push, pop,unshift, shift,splice,find, findIndex, includes, indexOf
 * Add element at End : push(element1, element2)
 * Add element at Begin : unshift(element1, element2)
 * Add element at Middle : splice (position, numberofElementstoDelete, e1,e2)
 * Delete Element at End : pop()- delete one element at end
 * Delete Element at Begin : shift()- delete one element at begin
 * Delete element at Middle : splice(position, numberofElementstoDelete)
 * if numberofElementstoDelete not speciified deletes all elements from the position
 * Indexof(element) ; indexOf(elements, afterIndex); -No element present return -1
 * includes -check for element presence returns true or false
 * To find object includes will not work , so find /findIndex need to be used
    Method 1: ObjectArray.find(function(Object){
        return  Object.key ==='a';
    });
    Method 2: ObjectArray.find(ObjectArray => Object.key=='a')
*/

const numArray = [3,4];
console.log(numArray)
console.log(numArray[2])
console.log(numArray[1])
console.log(numArray.length)

//add at the end
numArray.push(5,6)
console.log(numArray)

//add element in the begining
numArray.unshift(1,2)
console.log(numArray)

//Add element at the middle
numArray.splice(2,0,10,8)
console.log(numArray)
numArray.splice(2,3,20,9)
console.log(numArray)

for (key in numArray){
    console.log(numArray[key])
}

//find Element in Array
console.log("Index of 20: " , numArray.indexOf(20))
console.log("Index of element not in array: " , numArray.indexOf(7))
numArray.splice(5,0,20,11)
console.log(numArray)
console.log("Index of 20 after first occurence: " , numArray.indexOf(20,3))
console.log("Index of 20 after first occurence: " , numArray.indexOf(20,numArray.indexOf(20)+1))
console.log(numArray.includes(6));
console.log(numArray.indexOf(7)==-1)

const course = [
{id:1, name : 'a'},
{id:2, name : 'b'}
];

console.log(numArray.includes({id:1, name : 'a'}));

const c1= course.find(function(course){
    return  course.name ==='a';
});
find(course => course.name=='a')

console.log(c1)

const c2= course.findIndex(function(course){
    return  course.name ==='b';
});

console.log(c2)

const c3=course.find(course => course.name=='a')

console.log(c3)

//Removing Of Element 

//End
const num =[45,46,,59,60,45,70]
console.log(num)
console.log(num.pop())
console.log(num)

//Beginning
console.log(num.shift())
console.log(num)

console.log(num.splice(1,1))
console.log(num)
console.log(num.splice(1))
console.log(num)

//blank array
let array=[1,2,34,4,4,5]
let another =array
array =[];
console.log(array)
console.log("another", another)
//using length
array=[1,2,34,4,4,5]
another =array
array.length=0;
console.log(array)
console.log("another",another)
//using splciae
array=[1,2,34,4,4,5]
another =array
array.splice(0,array.length)
console.log(array)
console.log("another",another)
//using pop
while(array.length>0)
array.pop();
console.log(array)




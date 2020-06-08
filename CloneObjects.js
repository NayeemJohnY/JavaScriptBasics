/**
 * Cloning oF Objects
 * Using For in loop for (let key in Object)
 * Using Object assign : Object.assign({}, Student); - specify the objects
 * Object.assign({additional Key :additional Value }, Student);
 * Spread ... function : {...Object}
 */

const Student={
    rollno: 34,
    mark1 :90,
    mark2: 80,
    Average(){
        return this.mark1*this.mark2;
    }
}

//1. for in loop
const harishStudent ={};
for (let key in Student)
harishStudent[key]=Student[key]
console.log(harishStudent);

//2. Object assign
const  vinothStudent = Object.assign({}, Student);
console.log(vinothStudent);

const  vasanthStudent = Object.assign({name : "Vasanth"}, Student);
console.log(vasanthStudent);

//3. Spread ... function
const johnStudent = {...Student}
console.log(johnStudent);
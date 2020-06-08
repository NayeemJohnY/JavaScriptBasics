//Enumerating properties of an Object
const Student={
    rollno: 34,
    mark1 :90,
    mark2: 80,
    Average(){
        return this.mark1*this.mark2;
    }
}
for(let key in Student)
    console.log(key , Student[key])
// get all properties of Object
console.log("------------------");
// for(let key of Student)//Object not iterable
//     console.log(key)
for(let key of Object.keys(Student))// to get the keys
console.log(key)

for(let entry of Object.entries(Student))// to get the values
console.log(entry)

//3. Check property in object 
if('rollno' in Student)
console.log("yes")
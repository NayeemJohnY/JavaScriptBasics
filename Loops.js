//for /while/do while 
//infite loop

//for loop
function drawPattern(){
    let row = 9;//prompt();
    let stars="";
    for(let i=0; i <row; i++ ){
        for(let k=0; k<row-i; k++){
            stars+=" ";
        }
        for (let j=i; j>=0; j--){
             stars+="* ";
        }
        stars+="\n";
    }
    for(let i=row; i>=0; i--){
        for(let k=0; k<row-i; k++){
            stars+=" ";
        }
        for (let j=i; j>=0; j--){
             stars+="* ";
        }
        stars+="\n";
    }
    console.log(stars)
    return stars;
}
drawPattern();
    
//do while
let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);

//check ArmStrong number
console.log(Math.floor(123/10));
console.log(123%10);
RUnLoop:{
    let i=370;
    let temp= i;
    let a=i;
    let rem =0;
    let sum =0;
    while(a>0){
        rem = a%10;
        sum+=(rem*rem*rem)
        a = Math.floor(a/10);
    }
    if(temp==sum){
        console.log("ArmStrong")
    } else console.log("No Armstrong")
}
let object= ["Nayeem", "JOhn", "SDET", "Cengage"]
object.location="Bangalore"
for(let i in object){
console.log("i=",i, object[i])//iterate the property keys/names
}
for(let i of object){
    console.log("i="+i)//Iterate the property values
    }




Circle ={
    radius :10,
    area(){
        return Math.PI*radius;
    }
}
console.log(Circle);
Circle.diameter = 2*Circle.radius;
console.log(Circle);
Circle.circum= function() {
    console.log( 2*Math.PI*radius);
}
console.log(Circle);

//Value & reference
let x=10;
y=x;
x=20;
console.log(x);
console.log(y);

let p={
    value: 50
}
let q=p;
console.log(p);
console.log(q);
p.value=25;
console.log(p);
console.log(q);
q.value=30;
console.log(p);
console.log(q);
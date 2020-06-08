let rectangle={
     height:10,
     length :20,
    rectangleArea: function (){
        return (2*rectangle.height*rectangle.length);
 }
}

console.log(rectangle.length)
console.log(rectangle.rectangleArea())
let R1= rectangle;
R1.height=50;
console.log(R1.rectangleArea())
console.log(rectangle.rectangleArea())

function Square(side){
    const square = {
        side : side,
        squareArea(){
            return side*side;
        }
    }
    return square;
}
console.log(Square(5))
console.log(Square(5).squareArea())
let s1= Square(4);
console.log(s1.squareArea());
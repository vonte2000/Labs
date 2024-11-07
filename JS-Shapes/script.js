let radius = 5;
getAreaOfCircle = (radius) => {
    return 2 * radius * 3.14;
}
console.log(getAreaOfCircle(15));

getCircumferenceOfCircle = (radius) => {
    return 3.14 * (radius ** 2);
}
console.log(`The area of the circle is ${getCircumferenceOfCircle(12)}`);

let side = 5
getAreaOfSquare = (side) => {
    return side ** 2;
}
console.log(`The area of the square is ${getAreaOfSquare(12)}`);

let base = 3;
let height = 7;
getAreaOfTriangle = (base, height) => (1/2) * (base * height);
console.log(`The area of the triangle is ${getAreaOfTriangle(3, 7)}`);
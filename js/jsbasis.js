let x = 10;
let y = 5;
let z = x + y;
console.log(z);

let kwadraat = x * x;
console.log(kwadraat);

//const is een constante variabele. De waarde kan niet veranderd worden
const tekst = "Hallo";
///tekst = " wereld"; //error : invalid assignment
console.log(tekst);

const waarheid = true;
console.log(waarheid);

let tien = "10";
console.log(tien);
console.log(x);
console.log(tien == x);
console.log(tien === x);

if (x%2 == 0) {
    console.log("x is even");
}else {
    console.log("x is oneven");
}   

let result = x%2 == 0 ? "even" : "oneven";
console.log(result);

let a=3, b=4;
console.log(a === 3 || b === 0);
console.log(a === 3 && b === 0);
console.log(!(a > 1 && b < 10));
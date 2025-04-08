let A = true; 
let B = true;

console.log("___________________________")
console.log("| A     | B     | A AND B |");
console.log("|-------|-------|---------|");


let AND1 = A && B;
console.log(`| ${A}  | ${B}  | ${AND1}    |`);


B = false;
let AND2 = A && B;
console.log(`| ${A}  | ${B} | ${AND2}   |`);


A = false;
B = true;
let AND3 = A && B;
console.log(`| ${A} | ${B}  | ${AND3}   |`);

B = false;
let AND4 = A && B;
console.log(`| ${A} | ${B} | ${AND4}   |`);
console.log("---------------------------")
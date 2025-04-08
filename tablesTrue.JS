//Conjunción 
let A = true; 
let B = true;

console.log("___________________________")
console.log("| A     | B     | A AND B |");
console.log("|-------|-------|---------|");


let fila1 = A && B;
console.log(`| ${A}  | ${B}  | ${fila1}    |`);


B = false;
let fila2 = A && B;
console.log(`| ${A}  | ${B} | ${fila2}   |`);


A = false;
B = true;
let fila3 = A && B;
console.log(`| ${A} | ${B}  | ${fila3}   |`);

B = false;
let fila4 = A && B;
console.log(`| ${A} | ${B} | ${fila4}   |`);
console.log("---------------------------")


// Disyunción

A = true;
B = true;

console.log("___________________________")
console.log("| A     | B     | A OR B  |");
console.log("|-------|-------|---------|");

fila1 = A || B;
console.log(`| ${A}  | ${B}  | ${fila1}    |`);

B = false;
fila2 = A || B;
console.log(`| ${A}  | ${B} | ${fila2}   |`);

A = false;
B = true;
fila3 = A || B;
console.log(`| ${A} | ${B}  | ${fila3}   |`);

B = false;
fila4 = A || B;
console.log(`| ${A} | ${B} | ${fila4}   |`);
console.log("---------------------------\n")


// Negación 
console.log("___________________")
console.log("| A     | NOT A   |");
console.log("|-------|---------|");

A = true;
let notA = !A;
console.log(`| ${A}  | ${notA}  |`);

A = false;
notA = !A;
console.log(`| ${A} | ${notA} |`);
console.log("-------------------\n")


// Implicación 
function implicacion(a, b) {
  return !a || b;
}

console.log("______________________________")
console.log("| A     | B     | A → B     |");
console.log("|-------|-------|-----------|");

A = true; B = true;
console.log(`| ${A}  | ${B}  | ${implicacion(A, B)}     |`);

B = false;
console.log(`| ${A}  | ${B} | ${implicacion(A, B)}    |`);

A = false; B = true;
console.log(`| ${A} | ${B}  | ${implicacion(A, B)}    |`);

B = false;
console.log(`| ${A} | ${B} | ${implicacion(A, B)}   |`);
console.log("------------------------------\n")


// Doble Implicación 
function dobleImplicacion(a, b) {
  return a === b;
}

console.log("________________________________")
console.log("| A     | B     | A ↔ B       |");
console.log("|-------|-------|-------------|");

A = true; B = true;
console.log(`| ${A}  | ${B}  | ${dobleImplicacion(A, B)}       |`);

B = false;
console.log(`| ${A}  | ${B} | ${dobleImplicacion(A, B)}      |`);

A = false; B = true;
console.log(`| ${A} | ${B}  | ${dobleImplicacion(A, B)}      |`);

B = false;
console.log(`| ${A} | ${B} | ${dobleImplicacion(A, B)}     |`);
console.log("--------------------------------\n")
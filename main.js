// Daily Challenge: Stars
// What You Will Learn :
// For loops and nested for loops


// Instructions
// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).

let nombre = 6
let etoile =""
for (let i = 0; i < nombre; i++) {
    etoile = etoile.concat(" * ")
    console.log(etoile)
}
// Do this Daily Challenge by youself, without looking at the answers on the internet.
const nomb = 6;
for (let i = 0; i < nomb; i++) {
    let etoile ="";
  for (let j = 0; j < i+1; j++) {
    etoile = etoile.concat(" * "); 
  }
  console.log(etoile)
}

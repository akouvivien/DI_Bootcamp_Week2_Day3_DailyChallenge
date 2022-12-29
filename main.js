// Daily Challenge: Stars
// Last updated : March 30th 2021


// What You Will Learn :
// For loops and nested for loops


// Instructions
// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
// Do this Daily Challenge by youself, without looking at the answers on the internet.


let nombre = 6
let etoile =""
for (let i = 0; i < nombre; i++) {
    etoile = etoile.concat(" * ")
    console.log(etoile)
}
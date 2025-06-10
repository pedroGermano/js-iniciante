let varA = 'A' // B
let varB = 'B' // C
let varC = 'C' // A

const varMod = varA

varA = varB
varB = varC
varC = varMod

console.log(varA, varB, varC)
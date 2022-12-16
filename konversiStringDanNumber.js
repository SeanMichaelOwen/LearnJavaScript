// Kode Tanpa Konversi 
let value1 = "1"
let value2 = 1

let sum = value1 + value2
console.log(sum)

// Kode dengan konversi
value1 = "1"
value2 = 1

sum = (`ParseInt: ${parseInt(value1) + value2}`)
console.log(sum)


value1 = "1.20"
value2 = 1

sum = (`ParseFloat: ${parseFloat(value1)+ value2}`)
console.log(sum)
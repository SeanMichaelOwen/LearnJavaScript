console.info('Operator Aritmtika')
let result = 1 + 2
console.log("1 + 2 = " + result)
let originalResult = result

result = result - 1
console.log(originalResult + " - 1 = " + result)
originalResult = result

result = result * 2
console.log(originalResult + " * 2 = " + result)
originalResult = result


console.info('Operator Augmented Assignment')
result -= 2 
console.log(originalResult + " - 2 = " + result)

result *= 3
console.log(originalResult + " * 3 = " + result)


console.info('Operator Unary')
let uny = +1
uny--
console.log(uny)

uny++
console.log(uny)

uny = -uny+3
console.log(uny)


uny = -uny+3*20-(20 + 10)
console.log(uny)
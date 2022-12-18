//Error: mengakses kode nullish
/*
let person = {}
const country = person.address.country
console.log(country)
*/
//Kode tanpa Optional chaining
let person3 = {}
let country3;
if(person3.address !== undefined && person3.address !== null){
    country3 = person3.address.country
}
console.log(country3)
console.log('\n')

//Code 1
const person = {}
let country = person?.address?.country
console.log("Sukses1")
console.info(country)
console.log("Sukses2")

console.log('\n')

//Atau Code2
const person2 = {
    address:{
        country:"Indonesia"
    }
}
let country2 = person2?.address?.country
console.log("Sukses1")
console.info(country2)
console.log("Sukses2")
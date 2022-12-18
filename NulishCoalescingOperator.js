//Kode tanpa Nulish Coalescing Op
/*
let parameter = "Isi Data" // Set Isi Data

let data = parameter

if(data === undefined || data === null){
    data = "nilai default" //Cek data null atau tidak
}
console.info(data)
*/


//Kode dengan nulish coalescing op
let parameter = "Isi data"
let data = parameter ?? "Nilai Default"
console.log(data)
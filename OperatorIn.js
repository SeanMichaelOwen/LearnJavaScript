//Isi data dan menghapus data
const person = {
    fristName: "Sean",
    lastName: "Michael"
}

//Rubah data
const isi = 'frist'
const result = isi in person

// Cek data
if(result === true){
    console.info(`Apakah data ${isi} ada di dalam person? ${result}, ya data tersebut ada...`)
}else{
    console.info(`Apakah data ${isi} ada di dalam person? ${result}, ya tidak ada....`)
}
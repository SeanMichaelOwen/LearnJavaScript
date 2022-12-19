//Operator Logika Di Non Bolean

//Operator Or(||) Dibaca dari kiri ke kanan dan data pertama yang bernilai truthy akan di ambil sebagai true
const FristData = {
    data1: 0, // Tidak akan di eksekusi (Bernilai false)
    data2: 'Nis'
}

const CekData = FristData.data1 || FristData.data2
console.info(CekData)


//Operator And (&&) //Dibaca dari kiri ke kanan dan data pertama yang bernilai false akan di ambil sebagai false jika tidak ada nilai false salah satu pun maka nilai akhir akan di ambil
const SecondData = {
    data1: 1, // Tidak akan di eksekusi (Bernilai false)
    data2: 2
}

const cekData = SecondData.data1 && SecondData.data2
console.info(cekData)
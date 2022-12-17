const DataSiswa1 = {
    nama:"Sean Michael",
    kelas: "XI Rpl 1",
    Umur: "18"
}
const DataSiswa2 = {
    nama:"Michael",
    kelas: "XI Rpl 2",
    Umur: "16"
}
const DataSiswa3 = {
    nama:"Budi",
    kelas: "XI Rpl 3",
    Umur: "15"
}

let showAllData = {DataSiswa1, DataSiswa2, DataSiswa3}
console.info(showAllData)

const CekDataSiswa = 'nama';
const Show = CekDataSiswa in DataSiswa1

//Tanpa Ternary
if(Show === true){
    console.info(`Cek Data: ${CekDataSiswa}, Hasilnya: ${Show}`)
}else{
    console.info(`Maaf data tidak di temukan alias, ${Show}`)
}

//Dengan Ternary
const end = Show === true ? `Cek Data: ${CekDataSiswa}, Hasilnya: ${Show}` : `Maaf data tidak di temukan alias, ${Show}`
console.info(end)
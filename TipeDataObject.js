const orang = {}
//Menambah data atau mengubah data
orang ['nama'] = "Your Name"
orang ['Alamat'] = "Where is your address"
orang ['Age'] = 0

//Mengahpus
console.table(orang)
delete orang['Age']
console.table(orang)

// Create object dengan nama data
const data = {
    nama: "Sean michael",
    alamat: "Makassar",
    umur: 17
}
console.table(data) //tampil data

delete data['umur'] //Hapus data
console.table(data) //Tampil data

data.umur = 18 // Tambah Data
console.table(data) //Tampil data

console.log(`Nama: ${data.nama}`) //tampilkan nama yang berada di dalam object data

const LebihDariSatu = {
    'Nama lengkap': "Sean Michael"
}
console.log(`Nama Lengkap: ${LebihDariSatu['Nama lengkap']}`)
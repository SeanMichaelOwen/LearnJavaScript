let nilaiUjian = 70
let nialiAbsensi = 70

let lulusUjian = nilaiUjian > 75
let lulusAbsensi = nialiAbsensi > 75

let lulus = lulusUjian && lulusAbsensi
console.info("Hasil:\t" + lulus)


nilaiUjian = 90
nialiAbsensi = 90

lulusUjian = nilaiUjian > 75
lulusAbsensi = nialiAbsensi > 75

lulus = lulusUjian && lulusAbsensi
console.info("Hasil 2:\t" + lulus)
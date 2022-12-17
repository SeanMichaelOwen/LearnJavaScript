let nilai = 'A'

switch(nilai){
    case 'A':
         console.log(`Nilai kamu adalah ${nilai}`)  
         break
    case 'B':
    case 'c':
        console.log(`Nilai kamu adalah ${nilai}`)
        break
    case 'D':
        console.log(`Nilai kamu adalah ${nilai}`)
    default:
        console.log("Hanya terdiri dari (a, b, c, dan d)")
}
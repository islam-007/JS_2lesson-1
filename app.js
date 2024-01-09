//length  ------------4
//index -----0-1-4
const array= [1,2,3,4]
const lestNamber = array[array.length -1]
const lestNamber1 = array.at(-1)
console.log(lestNamber)
console.log(lestNamber1)
//Операторы (+б-,/,*,&&,?,!,=,==,===, )
//ES-6 (...)
// ... SPREAD
const a = [1,2,3]
const b = [4,5,6]
const c = a.concat(b)
console.log(c)
const c2 = [...a,...b, 7 ,8]
console.log(c2)
// ES-6 includes()
const cars = ['Honda','BMW','kia']
//
const bmw = cars.filter(el => el.toLowerCase().includes("m"))
console.log(bmw)
const iphone = {
    model: "Iphone 15 Pro",
    ozu: 6,
    price:1000
}
console.log(iphone.model )
function findElement (selector){
    // const el =
}
// ES-8 flat()
// console.log
//
// const [first,b2,ych] = array
// console.log(first)
// console.log(b)
// console.log(ych)
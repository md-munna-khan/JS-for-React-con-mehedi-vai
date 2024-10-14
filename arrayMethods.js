// forEach, find , map,find
// const numbers = [34,56,33,22,21,24,5,70]
// for(let i = 0 ; i<numbers.length; i ++)
//     console.log(numbers[i])

// foreach
// numbers.forEach((pera)=>{
// console.log(pera+5)
// })

// map
// const result = numbers.map((item,index) =>{
//     console.log("item",item ,"index", index)
//     return item*2
// })
// console.log(result)


const numbers = [34,56,33,22,21,24,5,70]
// const hudai = ` my numbers are ${ numbers.map((needPera)=>needPera).join("\ ")}`

// console.log(hudai)
// find
// const result = numbers.find((item)=> item<20)
// console.log(result)
// filter
const result = numbers.filter((item)=> item< 400)
console.log(result)
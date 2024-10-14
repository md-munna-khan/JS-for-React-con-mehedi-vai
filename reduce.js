// const numbers = [1,2,3,4,5];
// const result = numbers.reduce((previous,current)=>
//     previous +  current,0
// )
// console.log(result)

const products = [
    {price:1},
    {price:2},
    {price:3},
    {price:4},
    {price:5}
]
const total = products.reduce((prev,cur)=> prev + cur.price,0)
console.log(total)
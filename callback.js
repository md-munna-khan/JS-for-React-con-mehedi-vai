// const fun1 = (x,y,callback)=>{
//     console.log("hello from fun 1")
//     console.log(typeof callback)
//     callback(x,y)
// }
// const fun2 = (x,y)=>{
//  console.log(x+y)
// }

// fun1(4,5,fun2)

const giveName = (name,callback) =>{
setTimeout(() => {
    callback(name)
}, 2000);
}
const greetings = (name) =>{
    console.log(`hello , ${name}..!`)
}
console.log("first line of code")

giveName("munna",greetings)
console.log("last line of code")
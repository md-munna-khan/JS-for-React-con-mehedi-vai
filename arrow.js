// normal function
// function show (){
//     console.log("normal function")
// } 

//arrow category-1
// const show =()=>{
//     console.log("arrow function")
// }
// //arrow category-2
// const show1 =()=>{
//     return"arrow function"
// }
// //arrow category-3
// const show2 =(x)=>{
// console.log("value: ",x)
// }
// //arrow category-4
// const show3 =(x)=>{
// return x*2;
// }
// show()

const addArray = (numbers)=>{

    if(!Array.isArray(numbers)){
return "invalid"
    }

    let sum = 0;
for(let number of numbers){
    sum += number;
    console.log(sum)

}
return sum;
};
let x=[1,2,3]
console.log(addArray(x))

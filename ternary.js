const person ={
    name: "munna",
    gender:"male",
    isStudent :false
}

// first way
// let sentence = "";
// if( person.isStudent){
//     sentence = "he is a student"
// }else{
//     sentence = "he is not a student"
// }

// second way
// let sentence = "";
// person.isStudent ? sentence = "he is students" : sentence = "he is not a student"

let sentence = person.isStudent ? "he is a students" : "he is not a students"
console.log(sentence)
//and ,or
const person = {
    name: "munna",
    work: "tuition",
    home:"thakurgaon",
    isStudents:true
}
// console.log(person.home && "i will go her home")
const work = person?.work ||"N/A";
console.log(work)


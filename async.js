const x = "hello";
console.log(x)

setTimeout(() => {
    console.log("pizza 1 done")
}, 4000);
setTimeout(() => {
    console.log("pizza 2 done")
}, 3000);
setTimeout(() => {
    console.log("pizza 3 done")
}, 1000);
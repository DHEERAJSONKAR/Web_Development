// function h(x, fn) {
//     // h is a hof(higher order function)
//     // fn is a callback
//     console.log(x * x);
//     fn(x * x)
// }
// // h(10, function(){
// //     console.log("done with callback");
// // })

// h(10, exec)
// function exec(n) {
//     console.log("Squard value is", n)
// }
// console.log("start");
// setTimeout(function f(){
//     console.log("timer done");
// },3000) 
// console.log("end");


// ******************promise************************************
function createPromise(){
    return new Promise(function exec(resolve, reject){
        // your code goes here
        setTimeout(function f(){
            console.log("timer done");
            resolve("done ")
        },300);
    })
}

console.log("start");
let x = createPromise();
console.log("got a new promise");
x.then(function f(){
    console.log("Promise done");
});
console.log("end");


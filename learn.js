// const powerTwo = (n) =>{
//     return n ** 2;
// }
// // const power= powerTwo(4);
// // console.log(power);

// function powerCube(powerTwo, n){
//     return powerTwo(n)*n;
// }
// // const cube = powerCube(powerTwo, 3);
// // console.log(cube);
// function sayHello(){
//     return () =>{
//         console.log("Hello! Dheeraj");
//     }
// }
// let guessValue = sayHello();
// console.log(guessValue);
// guessValue();


const higherOrder = n => {
    const oneFun = m => {
        const twoFun = p => {
            return m + n + P
        }
        return twoFun
    }
    return oneFun
}
const count = higherOrder(2)(3)(4);
console.log(count);

const myNums = [2,3,4,5]
const sumArray = arr => {
    let total =0
    arr.forEach(function(element) {
        total = total+ element
        
    });
    return total
}
console.log(sumArray(myNums));
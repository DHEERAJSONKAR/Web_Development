let arr = [2,3,4]
arr.forEach(function(element, index, arr){
console.log(index, element, arr);
})

arr.forEach((element, index, arr) =>{
    console.log("arrow:",index, element, arr);
})

const heros = ["naagraj", "doga", "dhruva", "maniraj"]
heros.forEach((el)=>{
console.log(el.toLowerCase());
})

arr.map(function(element,index,arr){
    console.log(element, index, arr);
})

heros.map((el) =>{
    console.log(el.toLowerCase());
    console.log(el.toUpperCase());
})

// filter

console.log(heros);
const herosWithRaj = heros.filter((h) =>{
    return h.endsWith("raj")
});
console.log(herosWithRaj);

// shopping cart

const cartBill = [20,40,34]
const sumOfCartBill =cartBill.reduce((prev,curr)=>prev + curr, 0)
console.log(sumOfCartBill);

//game score

const gameScore =[200,400,500,600,300]
// check if all values are number
console.log(typeof gameScore[i]);
const gameScoreCheck = gameScore.every((v)=> typeof v === 'Number')
console.log("check:", gameScoreCheck);

// find score above 200
const above200 = gameScore.find((score)=> score>200)
console.log(above200);
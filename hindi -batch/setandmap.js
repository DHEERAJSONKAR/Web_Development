let emptySet = new Set()
// console.log(emptySet.size);
let myArray = [1,2,3,4,5,7,8,4,2]
let newSet = new Set([...myArray]);
console.log(newSet);
newSet.add(9)
newSet.clear()
console.log(newSet);
// console.log(newSet.has(90));

// set difference

function setDifference(setA, setB){
  return new Set([...setA].filter(el => !setB.has(el))
)
}

// *************************************
let map = new Map()
console.log(map.size);  

let arr = [[1, "Mithun"],[2,"Alka"],[3,"Prabir"],[4,"shivam"],[5,"Dheeraj"]];
let array = arr.map((arrayItem)=>map.set(arrayItem[0],arrayItem[1]))
console.log(array);
const oneArray = [1,2,3,4,9]
const twoArray = [5,6,7,8]
// const threeArray = oneArray.concat(twoArray)
// const threeArray = [oneArray, twoArray]
const threeArray = [...oneArray, ...twoArray]
console.log(threeArray);
// *************************************************************************************
function testOne(){
    console.log(arguments);
}
let dk = testOne(1,2,3,4)
console.log(dk); 

function manyArguments(...args){
    console.log(typeof args);
    let finalArr = args.map(e => e*3 )
    console.log(finalArr);
}
// manyArguments(1,2,3,)
// manyArguments(1,2,3,4,234,647)


// *********************************************************************
// spred operatror
const names = ["superman", "flash"]
const newNames = ["batman", ...names, "thor"]
console.log(newNames);


const sitename = "pwskills"
console.log([...sitename]);

// rest operator
function pwskill(...values){
    return values
}
console.log(pwskill("superman", "flash"));
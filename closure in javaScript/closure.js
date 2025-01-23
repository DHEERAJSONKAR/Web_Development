let score = 4
function one(){
    let score =0
    console.log(score);
}
function two(){
    let score=3
    console.log(score);
}
function three(){
    console.log(score);
}
// one()
// two()
// three()
// console.log(score);

function outerFunc(){
    let outerVar = "I am  a Full Stack Developer"
    function innerFunc(){
        let innerVar = "I Am At Scope Level A"
        console.log(innerVar);
        console.log(outerVar);
    }
    innerFunc();
}
outerFunc();


// ***********************************************************

const myGLobalValue = 0
function func(){
    const vla1 =1;
    console.log(myGLobalValue);
   
    
    function innerOfFunc(){
        const val2 =2
        console.log(val2, vla1, myGLobalValue);


        function innerOfInnerFunc(){
            const val3 =3
            console.log(val3, val2, vla1, myGLobalValue);
        }
        innerOfInnerFunc();
    }
    innerOfFunc();
}
func();

// closure

function superFun(){
    let outerValue= "I am outer"
    function minorFunc(){
        console.log(outerValue);
    }
    minorFunc();
}
 superFun();


 const errorMessage = "File not Found"
 setTimeout(function callback(){
    console.log(errorMessage);
 })


 let pageCount = 0
 const items= [2,3,45,6,7]
 items.forEach(function Iterator(num){
pageCount++
console.log(num);
 })
 console.log("page counting", pageCount);
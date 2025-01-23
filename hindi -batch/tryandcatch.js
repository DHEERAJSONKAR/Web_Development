try{
    let x =undefined;
    console.log(x[0]);
}
catch {
    console.log("error handling in catch");
}
finally{
    console.log("finally always get executes");
}
console.log("end");
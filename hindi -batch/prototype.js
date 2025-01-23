let myHeros = ["thor", "spiderman"]
let dcHeros = ["batman", "flash", "superman"]

let heropower = {
    thor:"hamer",
    spiderman:"sling",
    getSpidermanPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
Object.prototype.dheeraj = function(){
    console.log("Dheeraj is present in all object");
}
console.log(myHeros.dheeraj());
console.log(heropower.dheeraj());

const User = {
    name:"top name",
    email:"top@gmail.com"
}
const Teacher = {
    makeVideos: true
}
const TeachingSupport = {
    isAvailable:false
}
const TaAssistant = {
    makeAssignment: "JS Assignment",
    fulltime:true,
    __proto__: TeachingSupport
}
let pattern = "pw"
let regExOne = new RegExp(pattern)
let flag = "gi"
let regExTwo = new RegExp(pattern, flag)
let regExThree = /pw/gi
const strToCheck = "PW is growing at a rapid speed and recently they are working on pwskills to create skills based pwcontent"
const result = regExThree.test(strToCheck)
console.log(result);

const anOtherResult = strToCheck.match(regExThree)
console.log(anOtherResult);

const oneMoreResult = strToCheck.replace(regExThree, 'dheeraj sonkar')
console.log(oneMoreResult);

const webUrl = "https://pwskills.com/dheeraj%41 sonkar"
const useAbleUrl = webUrl.replace(/%\d\d/, '-')
console.log(useAbleUrl);
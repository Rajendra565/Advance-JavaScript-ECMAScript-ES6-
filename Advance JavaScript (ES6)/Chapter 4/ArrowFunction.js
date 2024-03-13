var FristName="Rajendra"
var LastName="Kumar"
// this is Normal Function
const Name=function(fname,lname){
return `${fname}${lname}`
}

console.log(Name(FristName,LastName))

// this is Arrow Function
const Name1=(fName,lName)=>{
return  `${fName}${lName}`
}
console.log(Name1(FristName,LastName))
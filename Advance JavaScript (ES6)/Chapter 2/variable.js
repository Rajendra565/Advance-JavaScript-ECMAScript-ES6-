var x="Hello"
var x="World"
x="Wow"
console.log(x)


let y="Hello"
// let y="World"//❌
y="Wow"
console.log(y)

const z="Hello"
// const z="Hello"//❌
// z="Hello"//❌
console.log(z)


// Conditions
let cont=0
if(0==0){
    var a="Hello"
}
console.log(a)//✅
let cont2=0
if(0==0){
    let b="Hello"
}
// console.log(b)//❌
let cont3=0
if(0==0){
    const c="Hello"
}
console.log(c)//❌
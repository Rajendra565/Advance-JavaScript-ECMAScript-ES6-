Different type of variable
--------------------------

Var   
---
var x='Hello' (Declare)✅
var x='world' (ReDeclare)✅
x='Wow'        (ReValue)✅

Var is Allow the ReDeclare and Revalue


Let (ES6)
---
let x='Hello'✅
let x="World"❌
x="Wow"✅
Let is Not Allow the ReDeclare but Allow the Revalue



Const (ES6)
---
const x='Hello'✅
const x="World"❌
x="Wow"❌
Const is Not allow the Redeclare and Revalue

----------------------------
Global Scope and Block Scope
----------------------------
var is (Global Scope)
---
if(condition){
    var x="Hello"

}
console.log(x)✅

Let And Const is (Block Scope)
Let (Block Scope)         | Const(Block Scope)
if(condition){            |        If (Condition){
    var x="Hello"         |             const x="Hello"         
}                         |         }
console.log(x)❌          |         Console.log(X)❌
                          
                          
                          


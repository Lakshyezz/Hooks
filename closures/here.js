// Closure   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#creating_closures_in_loops_a_common_mistake

// A closure is the combination of a function bundled together (enclosed)
//  with references to its surrounding state (the lexical environment).
// In other words, a closure gives you access to an outer function's scope from an inner function. 

// In JavaScript, closures are created every time a function is created, at function creation time.

// LexicalScope: Nested functions have access to variables declared in their outer scope

let sum = function(a){      // a can be accessed inside return function
    var b = 5;                       // this is what we call lexical scope
          
    // if(true) var x =5;
    return function(c){
       return a+b+c;
    }
}

// store = sum(10)
if(true) {
    var x =5;           // if its var it can be accessed globally not with const and let tho
}
// console.log(x);
// console.log(store(5));

const summ = function(a,b,c){
    return {
        getSumTwo : function (){
            return a+b;     
            },

        getSumThree : function (){
            return a+b+c;
            }
    }
}

var store = summ(2,3,4)

console.log(store.getSumTwo());

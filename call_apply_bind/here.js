// CALL ,  APPLY ,  BIND  

// call and apply

obj1 = {
    name: "Logan",
    age: 5,
    species: "Dog",
}

obj2 = {
    name: "Lakshay",
    age: 22,
    species: "Human",
    
}
obj3 = {
    name: "Mayank",
    age: 21,
    species: "Monkey xD",
    
}

const printObj =  function (state){             // independent functn can be called for both objects wth of CALL()
    // console.log(this.name);
    
    console.log(this.name +" "  +state); // this will take the name from object passed inside call | apply 
}
printObj.call(obj3, ["delhi"])
// printObj.apply(obj3, ["delhi"])      // works similarly

// obj1.printObj.call(obj2);


// BIND

// bind will basically helps in copying the function into new function and it can be invoked later when needed

let newFun = printObj.bind(obj3, ["delhi"]);


// Rest & Spread Operator

// # REST: In rest it combines element

function add(a,b,c, ...other) {

    console.log(other[2]);
    return a+b+c;
}

// console.log(add(1,2,3));

// lets say now we have 5 values passed but func. can take only three
// here we can use "..." this to have them passed as rest operator, 
// no operations would be performed in this case but can use something to work in it

console.log(add(1,2,3,4,"hello", {"ssup": 69}));  ///


// ### SPREAD: In this we break elements

let names = ['logan ' , 'mynk ', 'lucksay ', 'bhaiya ']

function getNames(a,b,c,d){
    console.log(a,b,c,d);
    // console.log(a+b+c+d);
    // console.log(arguments);             // this will return it in the form of object output mentioned in the end
}

getNames(...names)          // it spreads the element as needed in function parameters and pass accordingly



// ### REST AND SPREAD IN OBJECT

let object = {
    name: "Lakshay",
    age: 22,
    weight: 75
}



// let newObject = {            // run from top -> bottom
//      weight: 76,             // dont know about object
//      ...object,              // runs ...object and take all its values
// }
     let newObject = {
         ...object,             // knows object take it into consideration
         weight: 76,            // it knows so it will update the needed value
     }                          // and now weight is overriden by new value
     

     const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
     const citrus = fruits.slice(2,4);
     console.log(citrus);
// console.log(newObject);

// arguments (output): 
// [Arguments] {
//     '0': 'logan ',
//     '1': 'mynk ',
//     '2': 'lucksay ',
//     '3': 'bhaiya '
//   }
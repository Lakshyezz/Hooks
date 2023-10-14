
// // Prototype


// const obj = {
//     name: "lakshay",            // name here
//     getName: function(){
//         return this.name
//     }
// }
// const obj1 = {
//     age: 22,
    
//        __proto__: obj,
// }
// const obj2 = {
//    color: "brown",
//     __proto__: obj1
// }
// const objNow = {
//     name: "okay",               // name here as well but as i called on this object, this will point for this object and name property will be overerided by the current object as simple as that
//     age: 23,
//     __proto__: obj2
// }

// // console.log(objNow.getName());

// let arr = [3,2,1];
// // console.log(arr.fill());

// // functions present inside objects 

// Array.prototype.showValues = function(){
//     let temp = this;
//     for(let i = 0 ; i< temp.length;i++){
//         console.log(temp[i]);
//     }
// }
// arr.showValues()

// function MyPrototype(name){
//     this.name = name;
// }
// const my = new MyPrototype("NISHU")

// console.log(my);


// show on webpage name and age above value 26 : filter
let emp = [
    {
        name: 'abc',
        age: 30,
    },
    {
        name: 'xyz',
        age: 20,
    },
    {
        name: 'cde',
        age: 42,
    },
    {
        name: 'fgh',
        age: 25,
    },
    {
        name: 'jkl',
        age: 28,
    }
]


const output = emp.filter((em, index)=>{
    return em.age > 26 
    // if(em.age> 26) {
    //    let temp = {
    //         // `${em.name}`: em.age
    //     };
    //     return true;
    // }
})
const result = output.sort((a,b)=>
    a.age>b.age ? 1 : -1
)
console.log(result);


let content = result.map((obj,index) =>{
    console.log(obj,index)
    let p = document.createElement('p')
    p.setAttribute("id", `name${index}`);
    p.innerText = `Name: ${obj.name} - ID: ${obj.age}`
    document.body.appendChild(p);
    // return document.getElementById(`div${index}`).innerHTML = `Name: ${obj.name} - ID: ${obj.age}`
})


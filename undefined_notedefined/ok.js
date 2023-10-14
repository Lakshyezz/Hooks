var name = "my name is lakshay"
// prompt("my name is lakshay")

// console.log();

// for(let i=0; i<name.length;i++){

// }
//  let stringArr = name.split(" ", )
//  let ans = "";

// for(let i = 0;i < stringArr.length;i++){
//     let curr = stringArr[i];        // "my"
    
//     let transform = stringArr[i].charAt(0).toUpperCase();   // m
//     let result = curr.substring(1, curr.length+1);
//     let temp = transform +result;
//     ans += temp + " ";
// }   
// console.log(ans);


// console.log(a);
// add()

// let a = 6

// function add (){

// }

// var a = 4;
// function sum (){
// let b;
// var a;
// console.log(a)
// }
// sum()
// let a = 5;
// const prom = () =>{
//     setTimeout(()=>{
//         return new Promise((resolve, reject)=>{
//             let any = true;
//             if(true)  {
//                 resolve(" True ")
//             }
//             else  {
//                 reject("")
//             }
//         })
//     }, 1000)

//     pro
// }


let p = new Promise((res,rej)=>{
    setTimeout(()=>{
    res('this is resolved')
    },5000)
    })

    function statusFunc(){

    console.log(1)
    p.then(data=>console.log(data))
    console.log(3)
    }

    statusFunc()

  
// js is single threaded language not multithreaded


 /* it is basically just the concept of memory assignment of variables before their initialization 
    in case of var it considers it as undefined, in case of function calling before their initialization
    it stores function name as anonymous function and later checks it as in key if presenet and just calls it not like var
 */
var a = [5,2,3,4];
function getName(){
    console.log("Logan");
}


getName()


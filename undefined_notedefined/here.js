// Undefined or Notdefined or  in Javscript



console.log(a);     // a will be undefined present in memory but undefined
var a = 5;
console.log(a);      




/*  var, let, const   Article Link: https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/

whenever we write var the statement shifts to the bottom

*/
// when i say var a =5 
console.log(a);     // and as i print a here it does assign memory to a but classified it as undefined
var a = 5;
console.log(a);       
 /* bad thing about using var is that you can reintitalize same variablename and if it is 
 present somewhere in the file before it will overrides it and can alter all of the logic 
 written before

 Here comes let for the rescue now it works under scope and it can't be reintitalized in that scope,in outer scope it can have samevariable names
 
 
 */
// MAP, REDUCE, FILTER      

// Article for Difference:  https://www.codementor.io/@ogwurujohnson/foreach-map-filter-what-s-the-difference-jgvyy01ai


const companies = [
    {name: "Google", category: "Product Based", start: 1995},
    {name: "Paytm", category: "Product Based", start: 2010},
    {name: "Zomato", category: "Product Based", start: 2013},
    {name: "Swiggy", category: "Product Based", start: 2015},
    {name: "Trademo", category: "Product Based", start: 2010},
    {name: "Spotify", category: "Product Based", start: 2001},
]

// for(let i=0;i<companies.length;i++){
//     console.log(companies[i].name);
// }

// companies.forEach( (company, index)=>{
//     console.log(company.name);
// })
 
// companies.forEach( (company, index)=> (console.log(company.name))); // 1 liner

/* FILTER */  // Returns the elements of an array that meet the condition specified in a callback function.

const ages = [21,54,21,54,7,53,54,23,1,2,65,76,45,24,13,65,87,67,98,56,34,21];

// const above20 = ages.filter((age) =>{
//     if(age >= 20) return true;
// })

// const above20 = ages.filter((age)=> age>=20 ? true: false)

// const above20 = ages.filter((age) => age>=20)  or age => age > 20 // like we did in book app in useState

// const companiesBefore2000 = companies.filter((company)=> company.start <= 2000)



/* MAP */   // It creates and return new array

// const names = companies.map( (company) => `${company.name}`)
// console.log(names);


/* Sort */          // it has 1 and -1, 1 represent true and -1 false

const companySorted = companies.sort( (a,b)=> a.start>b.start? 1: -1)
// const ageSorted = ages.sort((a,b) => a>b? 1 : -1)
// const ageSorted = ages.sort((a,b) => a-b)
// console.log(companySorted);

const sumAge = ages.reduce((total, age,index) =>{               // 0 in the end means total starts from 0 
    console.log(age);
   return total += age;                                     // every returned value will be passed as an argument for other callbackfuntion for that value 
}, 0)   
console.log(sumAge);


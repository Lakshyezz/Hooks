// ASYNC JS 

// Callbacks, Promises, Async, Await 


const datas = [
    {
        name: "Logan",
        age: 5
    },
    {
        name: "Lakshay",
        age: 22
    }
]

function getDatas() {
    setTimeout(() => {
        let output = ""
        datas.forEach( (data, index) =>{
                output += `<li>${data.name}</li>`
        })
        document.body.innerHTML = output
    }, 500);
}
// Callback
function createData(newData){
    setTimeout(() => {
        datas.push(newData)
        // callback()
    }, 1000);
}

// getDatas() 
// createData({name: "mayank", age: 21},getDatas)

// Promises
function createData(newData){
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                datas.push(newData)
                let error = false;
                if(!error){
                    resolve(); // if resolve calls ... then() part will be executed else not
                }else reject();     // in reject catch part will be called
            }, 1000);
        })
}
// createData({name: "mayank", age: 21}).then(getDatas).catch()


// Async Await easy stuff did in flutter interns as well

async function start(){
   await createData({name: "mayank", age: 21})      // idk why but it worked only with promise // someone said it basically unwraps the Promise dont know how true is that
   getDatas()
}

start()
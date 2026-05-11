// function print(user){
//     return `hello ${user}`;
// }
// console.log(print("Navjot"));

 const os=require('os');//operating system denoted by os
//  console.log(os.version());
//  console.log(os.platform());
 console.log(os.freemem());
 console.log(os.totalmem());







// let opn = require('fs');//fs denotes filesystem 
// opn.readFile('index.txt','utf-8',(err,data)=>
// {
//     if(err)
//     {
//         console.error("Something's not getting right "+err);
//         return;
//     }
//     console.log("The Data in the file is \n"+data);
// }
// );


// const arrFruit = ["apple","orange","pineapple"];
// arrFruit.forEach(arrFruit  => {
//     console.log(arrFruit);
// });


arrFruit.map(arrFruit=>console.log(arrFruit.length));//finding length of each array elements


const obj = {
    name:"Ankit",
    speciality:"chill",
    age:99,
    show(){
        console.log(`${this.name}`);
    }
}
obj.show();
let opn = require('fs');//fs denotes filesystem 
// let file= 'new.txt';
opn.writeFile('new.txt','This is the data',(err,data)=>
{
    if(err)
    {
        console.error("Something didn't catch up"+err);
    }
    console.log("Created Successfully");
}
// {
//     if(err) throw err
//     // {
//     //     console.error("Something's not getting right "+err);
//     //     return;
//     // }
//     console.log("The Data in the file is \n"+data);
// }
);

let fs = require('fs');

fs.readFile("random.txt","utf-8",(err,data)=>{
    if(err) throw err;

        console.log("DONE",data);

});


fs.writeFile("random.txt","XYZ",(err)=>{
    if(err) throw err;

        console.log("DONE");

});

fs.appendFile("random.txt","This will be written at last",(err)=>{
    if(err) throw err;
    console.log("Done");
})
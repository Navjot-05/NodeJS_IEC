let http=require('http');
const  {upperCase}=require('upper-case');//capitalizing the letters
let server = http.createServer((req,res)=>
{
    res.writeHead(200,{"content-type":"text/html"});
    res.write(upperCase("this is from res.write"));
    res.end();
});
server.listen(3000,()=>{
    console.log("http://localhost:3000");
});
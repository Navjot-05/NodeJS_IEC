let http=require('http');
http.createServer((req,res)=>
{
    res.writeHead(200,{"content-type":"text/html"});
    res.end("hello i am using js");
}).listen(3000);

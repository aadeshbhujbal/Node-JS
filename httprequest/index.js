const fs=require('fs')
const http=require('http')
const ans=process.argv[2];

fs.writeFile('./index.html',`<h1>Hello World</h1> <p>this is ${ans}</p>`, (err)=>{
    console.log(err);
})
http.createServer((req, res)=>
{
    fs.readFile('./index.html','utf-8',(err,data)=>{
        res.writeHead(200,{'contentType':"text/html"})
        res.write(data)
        res.end();
    }) 
}).listen(5000)
const http = require('http');

const server = http.createServer((req,res)=>{
        console.log(req.url , req.method , req.headers); //it will give information about request 
});

server.listen(3000);
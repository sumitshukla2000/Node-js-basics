const http = require('http');
const fs = require('fs');
const { parse } = require('path');

const server = http.createServer((req,res)=>{
        const url = req.url;
        const method = req.method;
    if(url === '/'){
        res.setHeader("Content-type" , 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter Message </title></head>');
        res.write('<body> <form action="/message" method="POST"> <input type="text" name="message"> <button type="submit"> Send </button> </form> </body>');
        res.write('</html>');
         res.end();
         return;
    }

    if(url === '/message' && method === 'POST'){
        //parsing req data
        const body = [];
        req.on('data' , (chunk)=>{
            console.log(chunk)
            body.push(chunk);
        })
        req.on('end' , ()=>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody)
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('./message2.txt' , message);
        })
        // fs.writeFileSync('./message.txt' , 'DUMMY DATA responded back');
        res.statusCode = 302; //status code for redirecting request
        res.setHeader('Location' , '/'); //default header accepted by browser
        res.end();
        return;
    }

    res.setHeader('Content-Type' , 'text/html');
    res.write('<html>');
    res.write('<head><title> My first nodejs page </title></head>');
    res.write('<body> <h1> Hello from Node JS server </h1> </body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);
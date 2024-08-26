const http = require('http');

const server = http.createServer((req,res)=>{
        const url = req.url;
    if(url === '/'){
        res.setHeader("Content-type" , 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter Message </title></head>');
        res.write('<body> <form action="/message" method="POST"> <input type="text" name="message"> <button type="submit"> Send </button> </form> </body>');
        res.write('</html>');
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
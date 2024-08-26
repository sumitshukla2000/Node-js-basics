const http = require('http');

const server = http.createServer((req , res) => {
    console.log(req.url , req.method , req.headers);

    //sending response

    res.write('<html>');
    res.write('<head><title> My first nodejs page </title></head>');
    res.write('<body> <h1> Hello from Node JS server </h1> </body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);
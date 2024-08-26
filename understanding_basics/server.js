const http = require('http');

const server = http.createServer((req , res)=>{
        console.log(req);
        process.exit(); //it will exit from the event loop and our server will get close
});

server.listen(3000); //as we are using it locally so we can use localhost:3000
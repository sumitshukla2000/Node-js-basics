const fs = require("fs");

const requestHandler = (req, res) => {
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
    return req.on('end' , ()=>{
        const parsedBody = Buffer.concat(body).toString();
        console.log(parsedBody)
        const message = parsedBody.split('=')[1];
        fs.writeFile('./message2.txt' , message , err => {
            res.statusCode = 302; //status code for redirecting request
            res.setHeader('Location' , '/'); //default header accepted by browser
            return res.end(); 
        });
        // fs.writeFileSync('./message.txt' , 'DUMMY DATA responded back');
        // res.statusCode = 302; //status code for redirecting request
        // res.setHeader('Location' , '/'); //default header accepted by browser
        // return res.end();
        
    })
    }
    
    res.setHeader('Content-Type' , 'text/html');
    res.write('<html>');
    res.write('<head><title> My first nodejs page </title></head>');
    res.write('<body> <h1> Hello from Node JS server </h1> </body>');
    res.write('</html>');
    res.end();
}

// 3 ways to export method


// 1st way 
//  module.exports = requestHandler;


// 2nd way
// module.exports = {
//     handler : requestHandler,
//     someText : "Some hard coded text"
// }

// 3rd way
// module.exports.handler = requestHandler;
 
//shortcut for above 

exports.handler = requestHandler;

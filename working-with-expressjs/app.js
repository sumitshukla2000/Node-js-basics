const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const errorController = require('./controller/error');
const db = require('./utils/database');

//executing queries
// db.execute('SELECT * FROM product')
// .then([rows , fieldData] => {
//         console.log(rows)
//         console.log(fieldData)
// })
// .catch(err => {
//         console.log(err)
// })

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');    
const { log } = require('console');

app.use(bodyParser.urlencoded({extended:false}));

//featrue provided by express to serve files statically
app.use(express.static(path.join(__dirname , './' ,  'public')))



app.set('view engine' , 'ejs');
// app.search('view engine' , 'hbs');
// app.set('view engine' , 'pug'); //this will trying to render the engine we sre registering here
app.set('views' , 'views'); //allows us to tell where to find this dynamic content

// app.use('/add-product' , (req,res,next)=>{
//     // console.log("Another middleware");
//     res.send('<form action="product" method="POST"><input type="text" name="title"/> <button type="submit">Add Product</button></form>');
// });

// app.post('/product' , (req,res,next)=>{
//     console.log(req.body);
//     res.redirect('/');
// });

            //below code is used when using multiple imports
// app.use('/admin' , adminRoutes.router);

app.use('/admin' , adminRoutes);
app.use(shopRoutes);
// app.use('/' , (req,res,next)=>{
//     res.send('<h1>Hello from Express JS</h1>');
// });

        //adding 404 error page

// app.use((req,res,next)=>{
//     // res.status(404).send('<h1 style="display:flex; justify-content:center;align-items:center;height:100vh;font-size:4rem">Page not found</h1>');

//     // res.sendFile(path.join(__dirname , './' , 'views' , 'page-not-found.html'));

//     //we can also send this using render method
//     res.status(404).render('page-not-found' , {pageTitle: "Page Not Found"});
// })

app.use(errorController.get404Page);

app.listen(3000);
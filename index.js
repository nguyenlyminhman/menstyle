const express = require ('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.use('admin', express.static('public/admin'));

app.listen(process.env.PORT || 3000, ()=>console.log('Server is running !!!'));

app.get('/', (req,res)=> res.render('index'));
app.get('/contact', (req,res)=> res.render('contact'));
app.get('/checkout', (req,res)=> res.render('checkout'));
app.get('/single', (req,res)=> res.render('single'));
app.get('/account', (req,res)=> res.render('account'));
app.get('/register', (req,res)=> res.render('register'));
app.get('/products', (req,res)=> res.render('products'));

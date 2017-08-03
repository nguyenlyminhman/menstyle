const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.use('admin', express.static('public/admin'));

app.get('/', require('./controller/showHomePage'));
app.get('/contact', require('./controller/showContactPage'));
app.get('/checkout', require('./controller/showCheckOutPage'));
app.get('/single', require('./controller/showSinglePage'));
app.get('/account', require('./controller/showAccountPage'));
app.get('/register', require('./controller/showRegisterPage'));
app.get('/products', (req, res) => res.render('products'));
app.get('/products/category_type/:idcategory', (req, res) => {
    const { idcategory } = req.params;
    console.log(idcategory);
});

app.listen(process.env.PORT || 3000, () => console.log('Server is running !!!'));

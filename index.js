const express = require('express');
const app = express();
const customer = require('./controller/customerRouter')

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.use('admin', express.static('public/admin'));
app.use('/', customer);

// app.get('/', require('./controller/showHomePage'));
// app.get('/contact', require('./controller/showContactPage'));
// app.get('/checkout', require('./controller/showCheckOutPage'));
// app.get('/single', require('./controller/showSinglePage'));
// app.get('/account', require('./controller/showAccountPage'));
// app.get('/register', require('./controller/showRegisterPage'));
// app.get('/products', require('./controller/showProductsPage'));

// app.get('/products/:cate_seolink/:idcategory', require('./controller/showProductsPage'));


// app.get('/products/category_type/:idcategory', (req, res) => {
//     const { idcategory } = req.params;
//     const pro = new Product(undefined, undefined, idcategory, undefined, undefined, undefined, undefined, undefined, undefined, undefined)
//     pro.getProductByCategory()
//         .then(a => console.log(a));
// });

app.listen(process.env.PORT || 3000, () => console.log('Server is running !!!'));

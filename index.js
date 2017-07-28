const express = require ('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.use('admin', express.static('public/admin'));

app.listen(process.env.PORT || 3000, ()=>console.log('Server is running !!!'));

app.get('/', (req,res)=> res.render('index'));
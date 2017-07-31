const queryDB = require('../utils/Database');

class Product {
    constructor(proid, cateid, proname, proprice, prodetails) {
        this.proid = proid;
        this.cateid = cateid;
        this.proname = proname;
        this.proprice = proprice;
        this.prodetails = prodetails;
    }

    getAllProduct() {
        let sql = 'select * from public."product"';
        return queryDB(sql, [])
            .then(result => result.rows);
    }

    getProductByCategory() {
        let sql = 'SELECT * FROM public."product" where cateid = $1'
        return queryDB(sql, [this.cateid])
            .then(result => result.rows);
    }

    getProductById() {
        let sql = 'SELECT * FROM public."product" where proid = $1'
        return queryDB(sql, [this.proid])
            .then(result => result.rows);
    }

    insertNewProduct() {
        let sql = 'INSERT INTO public."product"(cateid, proname, proprice, prodetails)VALUES ($1, $2, $3, $4);'
        return queryDB(sql, [this.cateid, this.proname, this.proprice, this.prodetails]);
    }

    updateProduct() {
        let sql = 'UPDATE public.product SET  cateid=$1, proname=$2, proprice=$3, prodetails=$4 WHERE proid=$5'
        return queryDB(sql, [this.cateid, this.proname, this.proprice, this.prodetails, this.proid])
    }
}

module.exports = Product;

// const pro = new Product(1, 1, 'short jean', 20, 'for girls');
// // pro.insertNewProduct()
// // .then(() => console.log('ok man'))
// // .catch(err=> console.log(err));

// pro.getProductById(2)
// .then(s => console.log(s))
// .catch(w => console.log('not found' + w));
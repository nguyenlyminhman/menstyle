const queryDB = require('../utils/Database');

class Image {
    constructor(proid, cateid, proname, proprice, prodetails) {
        this.proid = proid;
        this.cateid = cateid;
        this.proname = proname;
        this.proprice = proprice;
        this.prodetails = prodetails;
    }

    getAllImage() {
        let sql = 'select * from public."image"';
        return queryDB(sql, [])
            .then(result => result.rows);
    }

    getProductByCategory(cateid) {
        let sql = 'SELECT * FROM public."product" where cateid = $1'
        return queryDB(sql, [cateid])
            .then(result => result.rows);
    }

    getProductById(proid) {
        let sql = 'SELECT * FROM public."product" where proid = $1'
        return queryDB(sql, [proid])
            .then(result => result.rows);
    }

    insertNewProduct() {
        let sql = 'INSERT INTO public."product"(cateid, proname, proprice, prodetails)VALUES ($1, $2, $3, $4);'
        return queryDB(sql, [this.cateid, this.proname, this.proprice, this.prodetails]);
    }

    updateProduct(proid) {
        let sql = 'UPDATE public.product SET  cateid=$1, proname=$2, proprice=$3, prodetails=$4 WHERE proid=$5'
        return queryDB(sql, [this.cateid, this.proname, this.proprice, this.prodetails, proid]);
    }
}

module.exports = Image;

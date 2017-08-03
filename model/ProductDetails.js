const queryDB = require('../utils/Database');

class ProductDetails {
    constructor(idproduct, idsize) {
        this.idproduct = idproduct;
        this.idsize = idsize;
    }

    static getProductSize() {
        let sql = 'select * from public."ProductDetails" ORDER BY idproduct ASC';
        return queryDB(sql, [])
            .then(result => result.rows);
    }
}
module.exports = ProductDetails;

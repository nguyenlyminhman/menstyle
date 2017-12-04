const queryDB = require('../utils/DatabaseConnection');

class BillDetails {
    constructor(id, idOrder, idProduct, quantity) {
        this.id = id;
        this.idOrder = idOrder;
        this.idProduct = idProduct;
        this.quantity = quantity;
    }

    addNewOrderDetails() {
        const sql = 'INSERT INTO public."OrderDetails" (id, idOrder, idProduct, quantity) VALUES (default, $1, $2, $3)';
        return queryDB(sql, [this.idOrder, this.idProduct, this.quantity]);
    }

    getBillDetailsByOrderId() {
        const sql = 'SELECT * FROM public."OrderDetails" where idOrder=$1';
        return queryDB(sql, [this.idbill])
            .then(results => results.rows)
    }
}
module.exports = BillDetails;

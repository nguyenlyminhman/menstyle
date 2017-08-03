const queryDB = require('../utils/Database');

class Producer {
    constructor(idproducer, roducer_name) {
        this.idproducer = idproducer;
        this.roducer_name = roducer_name;
    }
    static getProducer() {
        let sql = 'select * from public."producer" ORDER BY idproducer ASC';
        return queryDB(sql, [])
            .then(result => result.rows);
    }
}
module.exports = Category;

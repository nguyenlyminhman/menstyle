const queryDB = require('../utils/Database');

class Category {
    constructor(cateId, cateName, cateParent) {
        this.cateId = cateId;
        this.cateName = cateName;
        this.cateParent = cateParent
    }

    static getCategory() {
        let sql = 'select * from "category" ORDER BY cateid ASC';
        return queryDB(sql, [])
            .then(result => result.rows);
    }

    static getParentCategory(cateParent ) {
        let sql = 'select * from "category" where cateparent=$1';
        return queryDB(sql, [cateParent])
            .then(result => result.rows);
    }
}
module.exports = Category;

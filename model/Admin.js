const queryDB = require('../utils/Database');

class Admin {
    constructor(id, email, password, fullname) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.fullname = fullname;
    }

    loginManager() { //eslint-disable-line
        const sql = 'select * from public."manager" where email=$1 and password=$2';
        return queryDB(sql, [this.email, this.password])
            .then(result => result.rows);
    }

    getManagerInfoByEmail() {
        const sql = 'select * from public."manager" where email=$1';
        return queryDB(sql, [this.email])
            .then(result => result.rows);
    }

    addNewManager() {
        const sql = 'insert into public."manager" (email, password, fname, lname) values ($1, $2, $3, $4)';
        return queryDB(sql, [this.email, this.password, this.fullname]);
    }
}

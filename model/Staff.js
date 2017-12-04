const queryDB = require('../utils/DatabaseConnection');

class Staff {
    constructor(id, firstname, lastname, email, password) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
    }

    loginStaff() { //eslint-disable-line
        const sql = 'select * from public."Staff" where email=$1 and password=$2';
        return queryDB(sql, [this.email, this.password])
            .then(result => result.rows);
    }

    getStaffInfoByEmail() {
        const sql = 'select * from public."Staff" where email=$1';
        return queryDB(sql, [this.email])
            .then(result => result.rows);
    }

    addNewStaff() {
        const sql = 'INSERT INTO public."Staff" (id, firstname, lastname, email, password) values (default, $1, $2, $3, $4)';
        return queryDB(sql, [this.firstname, this.lastname, this.email, this.password]);
    }
}

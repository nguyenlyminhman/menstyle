const pg = require('pg');

var config = {
    user: 'ynixgrygsibkhx', //env var: PGUSER
    database: 'd15n4528dno5aj', //env var: PGDATABASE
    password: 'dc4fc74d9e74195ead59737bff32dfb5351b2c558bef07ba167d96f5b82da7ef', //env var: PGPASSWORD
    host: 'ec2-23-21-220-48.compute-1.amazonaws.com', // Server hosting the postgres database
    port: 5432, //env var: PGPORT
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 1000, // how long a client is allowed to remain idle before being closed
};

const pool = new pg.Pool(config);

//query function using to get data from PG
function queryDB(sqlString, arrData) {
    return new Promise((resolve, reject) => {
        pool.connect((err, client, done) => {
            if (err) return reject(err);
            client.query(sqlString, arrData, (errQuery, result) => {
                done();
                if (errQuery) return reject(errQuery);
                resolve(result);
            });
        });
    });
}
// queryDB('select * from "category"', [])
// .then(data => console.log(data.rows))
// .catch(err => console.log(err + ''));
 module.exports = queryDB;

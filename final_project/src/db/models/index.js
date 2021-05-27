const mysql = require("mysql");
const customers = require("../queries/customers");

const mysqlConfig = {
    host: "localhost",
    user: "root",
    password: "password",
    database: "mrpostcard",
};

const Connection = mysql.createPool(mysqlConfig);

const Query = (query, values) => {
    return new Promise((resolve, reject) => {
        Connection.query(query, values, (err, results) => {
            if (err) reject(err);
            resolve(results);
        });
    });
};

module.exports = {Query, customers};
var mysql = require('mysql');

module.exports = {
    con: null,
    getConnection: () => {
        this.con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "myDb"
        });
        return this.con;
    },
    select: (sql,fields) => {
        
    }
}
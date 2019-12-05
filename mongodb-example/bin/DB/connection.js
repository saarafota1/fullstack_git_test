var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";



//the MongoDB connection
var connectionInstance = null;

module.exports = async function () {
    //if already we have a connection, don't connect to database again
    if (connectionInstance) {
        return connectionInstance;
    }

    await MongoClient.connect(url, function (err, db) {
        if (err) {
            res.json(err);
            return;
        }
        connectionInstance = db;
        console.log("Database created!");
        db.close();
        res.json("Database created!");
    });
    return connectionInstance;
};
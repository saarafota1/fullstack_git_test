var http = require('http');
var url = require('url');
var count = 0;
var users = [
    { id: count++, name: "saar", age: 36, phone: "0503535355" },
    { id: count++, name: "saar", age: 36, phone: "0503535355" }
];

http.createServer(function (req, res) {

    var result = {};
    result.success = true;
    result.error = false;
    result.message = "";
    result.data = [];


    // res.setHeader("Access-Control-Allow-Origin", "*"); // cors domain fix
    // res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.writeHead(200, {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
    });

    var q = url.parse(req.url, true).query;

    if (q.action) {
        let action = q.action;
        if (action == "getUsersList") {
            result.success = true;
            result.data = getUsersList();
            result.message = "Got Users List";
        }
        if (action == "addNewUser") {
            result.success = true;
            addNewUser(q);
            result.message = "New User Adedd";
        }
        if (action == "deleteUser") {
            result.success = true;
            deleteUser(q.user_id);
            result.message = "User Deleted!";
        }
    } else {
        result.success = false;
        result.message = "No Action Was Defined";
    }

    res.end(JSON.stringify(result));
}).listen(8080);

function getUsersList() {
    return users;
}

function addNewUser(q) {
    let new_user = {
        id: count++,
        name: q.name,
        age: q.age,
        phone: q.phone
    }
    users.push(new_user);
}

function deleteUser(user_id) {
    users.map((user, index) => {
        if (user.id == user_id) {
            users.splice(index, 1);
            return;
        }
    });
}
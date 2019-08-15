function LoginUser() {
    var username = $("#username_login").val();
    var password = $("#password_login").val();
    var ok = true;

    if (username.length < 4) {
        ok = false;
    }
    if (password.length < 6) {
        ok = false;
    }

    if (ok) {// fields are ok
        showAlertError("", false);
        $.ajax({
            url: "http://localhost:3000/users/login",
            type: "post",
            cors: true,
            data: { username: username, password: password },
            success: function (data) {
                if (data.success) {
                    showAlertError("", false);
                } else {
                    showAlertError(data.message, true);
                }
                console.log("Result: ", data);
            },
            error: function (xhr) {
                console.error("Error:", xhr);
            }
        });
    } else {// fields are not ok
        showAlertError("one or more Fields are short or missing...", true);
    }

}

function showAlertError(msg, show_or_hide) {
    if (show_or_hide) {
        $("#message_alert").show();
        $("#message_alert").text(msg);
    } else {
        $("#message_alert").hide();
        $("#message_alert").text("");
    }
}

function LoadUsersList() {
    showAlertError("", false);
    $.ajax({
        url: "http://localhost:3000/users/",
        type: "get",
        cors: true,
        data: {},
        success: function (data) {
            if (data.success) {
                showAlertError("", false);
                printUsersTable(data.data);
            } else {
                $("#users_table").html("");
                showAlertError(data.message, true);
            }
            console.log("Result: ", data);
        },
        error: function (xhr) {
            console.error("Error:", xhr);
        }
    });
}

function printUsersTable(users) {
    var html = "<table>";
    html += "<tr>";
    html += `<th>Username</th>`;
    html += `<th>Name</th>`;
    html += `<th>Age</th>`;
    html += `<th>Password</th>`;
    html += "</tr>";
    for (let i = 0; i < users.length; i++) {
        html += "<tr>";
        html += `<td>${users[i].username}</td>`;
        html += `<td>${users[i].name}</td>`;
        html += `<td>${users[i].age}</td>`;
        html += `<td>${users[i].password}</td>`;
        html += "</tr>";
    }

    html += "</table>";
    $("#users_table").html(html);
}
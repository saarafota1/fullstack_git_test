$(document).ready(function () {
    getUsersList();
});

function getUsersList() {
    $.ajax({
        url: "http://localhost:8080",
        type: "GET",
        data: { action: "getUsersList" },
        success: function (data) {
            showHideMessage(data.message, true);
            if (data.success) {
                printUsersTable(data.data);
            } else {

            }
            console.log(data);
        },
        error: function (xhr) {
            showHideMessage("Error: " + xhr.getMessage(), true);
            console.error(xhr);
        }
    });
}

function showHideMessage(msg, show) {
    if (show == true) {
        $("#user_message").text(msg);
        $("#user_message").show(500);
    } else {
        $("#user_message").text("");
        $("#user_message").hide();
    }
}

function printUsersTable(users) {
    let html = "";

    users.map((user) => {
        html += `<tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.age}</td>
            <td>${user.phone}</td>
            <td><i class='fa fa-trash' onclick='deleteUser(${user.id})'></i></td>
        </tr>`;
    });

    $("#users_table tbody").html(html);
}

function addUser() {
    let name = $("#name").val();
    let age = $("#age").val();
    let phone = $("#phone").val();
    $.ajax({
        url: `http://localhost:8080?action=addNewUser&name=${name}&age=${age}&phone=${phone}`,
        type: "GET",
        data: {},
        success: function (data) {
            showHideMessage(data.message, true);
            if (data.success) {
                getUsersList();
            } else {

            }
            console.log(data);
        },
        error: function (xhr) {
            showHideMessage("Error: " + xhr.getMessage(), true);
            console.error(xhr);
        }
    });
}


function deleteUser(user_id) {
    $.ajax({
        url: `http://localhost:8080?action=deleteUser&user_id=${user_id}`,
        type: "GET",
        data: {},
        success: function (data) {
            showHideMessage(data.message, true);
            if (data.success) {
                getUsersList();
            } else {

            }
            console.log(data);
        },
        error: function (xhr) {
            showHideMessage("Error: " + xhr.getMessage(), true);
            console.error(xhr);
        }
    });
}
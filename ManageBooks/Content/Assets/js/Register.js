$(document).ready(function () {
    $("#btnRegister").click(function (event) {
        var username = document.getElementById('username').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var repassword = document.getElementById('repassword').value;
        if (!CheckUsername(username)) {
            return;
        }
        if (!CheckEmail(email)) {
            return;
        }
        if (!CheckPassword(password)) {
            return;
        }
        if (!CheckRepassword(password,repassword)) {
            return;
        }
    });
});
function CheckUsername(username) {
    var format = /^[!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]*$/;
    if (username == "") {
        alert("The Username field is empty");
        return false;
    }
    if (username.length < 3) {
        alert("The Username field is too short");
        return false;
    }
    if (username.length > 50) {
        alert("The Username field is too long");
        return false;
    }
    if (username.match(format)) {
        alert("The Username field must be not include the Symbol character");
        return false;
    }
    return true;
}
function CheckEmail(email) {
    var format = /^[!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]*$/;
    if (email == "") {
        alert("The Email field is empty");
        return false;
    }
    if (email.length < 5) {
        alert("The Email field is too short");
        return false;
    }
    if (email.match(format)) {
        alert("The Email field must be not include the Symbol character");
        return false;
    }
    if (!email.match('@')) {
        alert("The Email field is incorrect format");
        return false;
    }
    return true;
}
function CheckPassword(password) {
    if (password == "") {
        alert("The Password field is empty");
        return false;
    }
    if (password.length > 30) {
        $("input#password").val("");
        alert("The Password field is too long");
        return false;
    }
    if (password.length < 8) {
        $("input#password").val("");
        alert("The Password field is too short");
        return false;
    }
    return true;
}
function CheckRepassword(password, repassword) {
    if (password == repassword) {
        location.href = "/../Login/Index";
        return true;
    }
    $("input#password").val("");
    $("input#repassword").val("");
    alert("Re-password is not same password");
    return false;

}
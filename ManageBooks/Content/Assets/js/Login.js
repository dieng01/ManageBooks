$(document).ready(function () {
    $("#btnLogin").click(function (event) {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        if (!CheckEmail(email)) {
            return;
        }
        if (!CheckPassword(password)) {
            return;
        }
        location.href = "/../EditProfile/Index";
    });
});
function CheckEmail(email) {
    var format = /^[!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]*$/;
    if (email == "") {
        alert("The Email field is empty");
        return false;
    }
    if (email.length > 50) {
        alert("The Email field is too long");
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
    if (password.length > 50) {
        $("input#password").val("");
        alert("The Password field is too long");
        return false;
    }
    if (password.length < 8) {
        $("input#password").val("");
        alert("The Password field is too short");
        return false;
    }
    if (password != "12345678") {
        alert("User name or Password is incorrect");
    }
    return true;

}
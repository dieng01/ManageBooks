$(document).ready(function () {
    $("#btnLogin").click(function (event) {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        if (!CheckEmail(email)) {
            $("span#error_password").text("");
            $("input#password").val("");
            $("input#email").focus();
            return;
        }
        $("span#error_email").text("");
        if (!CheckPassword(password)) {
            $("input#password").val("");
            $("input#password").focus();
            return;
        }
        $("span#error_password").text("");
        location.href = "/../EditProfile/Index";
    });
});
function CheckEmail(email) {
    var format = /^[!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]*$/;
    if (email == "") {
        $("span#error_email").text("The Email field is empty");
        return false;
    }
    if (email.length > 50) {
        $("span#error_email").text("The Email field is too long");
        return false;
    }
    if (email.match(format)) {
        $("span#error_email").text("The Email field must be not include the Symbol character");
        return false;
    }
    if (!email.match('@')) {
        $("span#error_email").text("The Email field is incorrect format");
        return false;
    }
    return true;
}
function CheckPassword(password) {
    if (password == "") {
        $("span#error_password").text("The Password field is empty");
        return false;
    }
    if (password.length > 50) {
        $("span#error_password").text("The Password field is too long");
        return false;
    }
    if (password.length < 8) {
        $("span#error_password").text("The Password field is too short");
        return false;
    }
    if (password == "12345678") {
        return true;
    }
    $("span#error_password").text("User name or Password is incorrect");
    return false;

}

function loginAjax() {
    $.ajax(this.href, {
        success: function (data) {
            $('#main').html($(data).find('#main *'));
            $('#notification-bar').text('The page has been successfully loaded');
        },
        error: function () {
            $('#notification-bar').text('An error occurred');
        }
    });
    }




//$(document).ready(function () {
//    $("#login-form").validate({
//        onfocusout: false,
//        onkeyup: false,
//        onclick: false,
//        rules: {
//            "email": {
//                required: true,
//                maxlength: 50,
//                minlength:5
//            },
//            "password": {
//                required: true,
//                minlength: 8,
//                maxlenght: 50
//            },
//        },
//        messages: {
//            "email": {
//                required: "Email is required",
//                maxlength: "The Email field is too long",
//                minlength:""
//            },
//            "password": {
//                required: "Passwword is required",
//                minlength: "Password field is too short",
//                maxlenght: "Password field is too long"
//            },
            
//        }
//    });
//});
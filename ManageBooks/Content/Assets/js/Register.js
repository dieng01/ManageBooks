$(document).ready(function () {
    $("#btnRegister").click(function (event) {
        var username = document.getElementById('username').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var repassword = document.getElementById('repassword').value;
        if (!CheckUsername(username)) {
            $("input#username").focus();
            $("span#error_password").text("");
            $("span#error_email").text("");
            $("span#error_repassword").text("");
            return;
        }
        $("span#error_username").text("");
        if (!CheckEmail(email)) {
            $("input#email").focus();
            $("span#error_password").text("");
            $("span#error_repassword").text("");
            return;
        }
        $("span#error_email").text("");
        if (!CheckPassword(password)) {
            $("input#password").focus();
            $("span#error_repassword").text("");
            return;
        }
        $("span#error_password").text("");
        if (!CheckRepassword(password, repassword)) {
            $("input#password").focus();
            return;
        }
        $("span#error_repassword").text("");
    });
});
function CheckUsername(username) {
    var format = /^[!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]*$/;
    if (username == "") {
        $("span#error_username").text("The Username field is empty");
        
        return false;
    }
    if (username.length < 3) {
        $("span#error_username").text("The Username field is too short");
        return false;
    }
    if (username.length > 50) {
        $("span#error_username").text("The Username field is too long");
        return false;
    }
    if (username.match(format)) {
        $("span#error_username").text("The Username field must be not include the Symbol character");
        return false;
    }
    return true;
}
function CheckEmail(email) {
    var format = /^[!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]*$/;
    if (email == "") {
        $("span#error_email").text("The Email field is empty");
        return false;
    }
    if (email.length < 5) {
        $("#error_email").text("Please enter valid email address");

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
    if (password.length > 30) {
        $("input#password").val("");
        $("span#error_password").text("The Password field is too long");
        return false;
    }
    if (password.length < 8) {
        $("input#password").val("");
        $("span#error_password").text("The Password field is too short");
        return false;
    }
    return true;
}
function CheckRepassword(password, repassword) {
    if (repassword == "") {
        $("input#password").val("");
        $("input#repassword").val("");
        $("span#error_repassword").text("Re-password is empty");
        return false;
    }
    if (password == repassword) {
        location.href = "/../Login/Index";
        return true;
    }
    $("input#password").val("");
    $("input#repassword").val("");
    $("span#error_repassword").text("Re-password is not same password");
    return false;

}
//$.validator.addMethod("AllNumberInteger", function (value, element) {
//    return this.optional(element) || !/[^0-9\-\/]/.test(value);
//}, );
//$(document).ready(function () {
//    $("#register-form").validate({
//        onfocusout: false,
//        onkeyup: false,
//        onclick: false,
//        rules: {
//            "username": {
//                required: true,
//                maxlength: 50,
//                minlength: 3
//            },
//            "email": {
//                required: true,
//                maxlength: 30,
//                minlength: 5
//            },
//            "password": {
//                required: true,
//                minlength: 8,
//                maxlenght: 50
//            },
//            "repassword": {
//                required: true,
//                minlenght: 3
//            },
//        },
//        messages: {
//            "username": {
//                required: "User Name is required",
//                maxlength: "The User Name field is too long",
//                minlength: "The User Name field is too short"
//            },
//            "email": {
//                required: "Email is required",
//                maxlength: "The Email field is too long",
//                minlength: "Email is to short"
//            },
//            "password": {
//                required: "Passwword is required",
//                minlength: "Password field is too short",
//                maxlenght: "Password field is too long"
//            },
//            "repassword": {
//                required: "Passwword is required",
//                minlenght: "quá nhọ cho đội tuyển"
//            },
//            submitHandler: function (form) {
//                form.submit();
//            }
//        }
//    });

//});
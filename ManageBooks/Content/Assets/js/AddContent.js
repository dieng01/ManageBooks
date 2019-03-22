$(document).ready(function () {
    $("#register-form").validate({
        onfocusout: false,
        onkeyup: false,
        onclick: false,
        rules: {
            "username": {
                required: true,
                maxlength: 50,
                minlength: 3
            },
            "email": {
                required: true,
                maxlength: 30,
                minlength: 5
            },
            "password": {
                required: true,
                minlength: 8,
                maxlenght: 50
            },
            "repassword": {
                required: true,
            },
        },
        messages: {
            "username": {
                required: "User Name is required",
                maxlength: "The User Name field is too long",
                minlength: ""
            },
            "email": {
                required: "Email is required",
                maxlength: "The Email field is too long",
                minlength: ""
            },
            "password": {
                required: "Passwword is required",
                minlength: "Password field is too short",
                maxlenght: "Password field is too long"
            },
            "repassword": {
                required: "Passwword is required",
            },

        }
    });
});

$(document).ready(function () {
    $("#AddContent").validate({
        onfocusout: false,
        onkeyup: false,
        onclick: false,
        rules: {
            "title": {
                required: true,
                maxlength: 200,
                minlength: 10
            },
            "brief": {
                required: true,
                maxlength: 150,
                minlength: 30
            },
            "content": {
                required: true,
                minlength: 50,
                maxlenght: 1000
            },
        },
        messages: {
            "title": {
                required: "title is required",
                maxlength: "The title field is too long",
                minlength: ""
            },
            "brief": {
                required: "brief is required",
                maxlength: "The brief field is too long",
                minlength: ""
            },
            "content": {
                required: "content is required",
                minlength: "content field is too short",
                maxlenght: "content field is too long"
            },
        }
    });
});
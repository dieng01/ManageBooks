//import { fail } from "assert";

//$(function() {
//    $('#side-menu').metisMenu();
//});

////Loads the correct sidebar on window load,
////collapses the sidebar on window resize.
//// Sets the min-height of #page-wrapper to window size
//$(function() {
//    $(window).bind("load resize", function() {
//        var topOffset = 50;
//        var width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
//        if (width < 768) {
//            $('div.navbar-collapse').addClass('collapse');
//            topOffset = 100; // 2-row-menu
//        } else {
//            $('div.navbar-collapse').removeClass('collapse');
//        }

//        var height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
//        height = height - topOffset;
//        if (height < 1) height = 1;
//        if (height > topOffset) {
//            $("#page-wrapper").css("min-height", (height) + "px");
//        }
//    });

//    var url = window.location;
//    // var element = $('ul.nav a').filter(function() {
//    //     return this.href == url;
//    // }).addClass('active').parent().parent().addClass('in').parent();
//    var element = $('ul.nav a').filter(function() {
//        return this.href == url;
//    }).addClass('active').parent();

//    while (true) {
//        if (element.is('li')) {
//            element = element.parent().addClass('in').parent();
//        } else {
//            break;
//        }
//    }
//});
/*------------------------------------------------------------------------------------------------*/


$(document).ready(function()
{
    $("#btnSubmit").click(function (event) {
        
        var firstname = document.getElementById('FirstName').value;
        var lastname = document.getElementById('LastName').value;
        var phone = document.getElementById('Phone').value;
        var description = document.getElementById('Description').value;
        if (!CheckFirstname(firstname)) {
            return;
        }
        if (!CheckLastname(lastname)) {
            return;
        }
        if (!CheckPhone(phone)) {
            alert("The Phone is incorrect!");
            return;
        }
        if (CheckDescription(description)) {
            return;
        }
    });
});
function CheckFirstname(firstname) {
    if (firstname.length > 30) {
        alert("The lenght of the First Name is too long!");
        return false;
    }
    if (firstname.length < 3) {
        alert("The lenght of the First Name is too short!");
        return false;
    }
    var pattern = /[0-9]/;
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if (pattern.test(firstname) || firstname.match(format)) {
        alert("The First Name field is incorrect format");
        return false;
    }
    return true;
}
function CheckLastname(lastname) {
    if (lastname.length > 30) {
        alert("The lenght of the Last Name is too long!");
        return false;
    }
    if (lastname.length < 3) {
        alert("The lenght of the Last Name is too short!");
        return false;
    }
    var pattern = /[0-9]/;
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if (pattern.test(lastname) || lastname.match(format)) {
        alert("The Last Name field is incorrect format");
        return false;
    }
    return true;
}
function CheckPhone(phone) {
    var pattern = /^[0-9]{9,13}$/;
    if (pattern.test(phone))
        return true;
    return false;
}
function CheckDescription(description) {
    var format = /[!#$%^&{}'"?]/;
    if (description.length > 200) {
        alert("The Description field is too long");
        return false;
    }
    if (description.match(format)) {
        alert("The Description field must be not include the Symbol character");
        return false;
    }
    return true;
}


/*============================================================================================*/






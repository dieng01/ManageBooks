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
            $("span#error_lastname").text("");
            $("span#error_phone").text("");
            $("span#error_description").text("");
            $("input#Firstname").focus();
            return;
        }
        $("span#error_firstname").text("");
        if (!CheckLastname(lastname)) {
            $("span#error_phone").text("");
            $("span#error_description").text("");
            $("input#password").val("");
            $("input#Lastname").focus();
            return;
        }
        $("span#error_lastname").text("");
        if (!CheckPhone(phone)) {
            ("span#error_description").text("");
            $("input#password").val("");
            $("input#Phone").focus();
            return;
        }
        $("span#error_phone").text("");
        if (CheckDescription(description) == false) {
        $("input#Description").focus();
        
            return;
        }
        var html = '';
        html += '< div class="modal-dialog" >';
        html += '<div class="modal-content">';
        html += '<div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>';
        html += '<h4 class="modal-title" id="myModalLabel">My Profile</h4></div>';
        html += '<div class="modal-body">Nguyen Dinh Duong</div>';
        html += '<div class="modal-body">Duong Duong</div>';
        html += '</div ></div >';
        $('#myModal').html(html);
        alert("adsdsd");
            //$.ajax({
        //    url: '',
        //    type: "GET",
        //    contentType: "application/json;charset=utf-8", 
        //    dataType: 'json',
        //    data: {
        //        firstname: firstname,
        //        lastname: lastname,
        //        phone: phone,
        //        description: description
        //    },
        //    beforeSend: function () {
        //        alert("The operation is successfullllllll");
        //    },
        //    success: function (result) {
        //        $('#FirstName').val(firstname);
        //        $('#LastName').val(lastname);
        //        $('#Phone').val(phone);
        //        $('#Description').val(description);
                
        //        alert("The operation is successfull");
        //    },
        //    error: function () {
        //        $('#FirstName').val("Helllo");
        //        $('#LastName').val(lastname);
        //        $('#Phone').val(phone);
        //        $('#Description').val(description);
        //        alert('error message');
        //    }

        //});
        
        //location.href = "/../EditProfile/Index";
    });
});
function CheckFirstname(firstname) {
    if (firstname.length > 30) {
        $("span#error_firstname").text("The lenght of the First Name is too long!");
        return false;
    }
    if (firstname.length < 3) {
        $("span#error_firstname").text("The lenght of the First Name is too short!");
        return false;
    }
    var pattern = /[0-9]/;
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if (pattern.test(firstname) || firstname.match(format)) {
        $("span#error_firstname").text("The First Name field is incorrect format");
        return false;
    }
    return true;
}
function CheckLastname(lastname) {
    if (lastname.length > 30) {
        $("span#error_lastname").text("The lenght of the Last Name is too long!");
        return false;
    }
    if (lastname.length < 3) {
        $("span#error_lastname").text("The lenght of the Last Name is too short!");
        return false;
    }
    var pattern = /[0-9]/;
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if (pattern.test(lastname) || lastname.match(format)) {
        $("span#error_lastname").text("The Last Name field is incorrect format");
        return false;
    }
    return true;
}
function CheckPhone(phone) {
    var pattern = /^[0-9]{9,13}$/;
    if (pattern.test(phone))
        return true;
    $("span#error_phone").text("The Phone is incorrect!");
    return false;
}
function CheckDescription(description) {
    var format = /[!#$%^&{}'"?]/;
    if (description.length > 200) {
        ("span#error_description").text("The Description field is too long");
        return false;
    }
    if (description.match(format)) {
        ("span#error_description").text("The Description field must be not include the Symbol character");
        return false;
    }
    
    return true;
}


/*============================================================================================*/






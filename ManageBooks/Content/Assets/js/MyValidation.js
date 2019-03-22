
$(document).ready(function()
{
    $("#test").click(function (event) {
        
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
        if (description.length > 200) {
            alert("The lenght of the Description is to long!");
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


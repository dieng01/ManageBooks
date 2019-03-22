$(document).ready(function () {
    $("#submit").click(function (event) {
        var Title = document.getElementById('title').value;
        var Brief = document.getElementById('brief').value;
        var Content = document.getElementById('content').value;
        if (!CheckTitle(Title)) {
            return;
        }
        if (!CheckBrief(Brief)) {
            return;
        }
        if (!Checkcontent(Content)) {
            alert("The content is incorrect!");
            return;
        }
    });

})
function CheckTitle(title) {
    if (title.length > 200) {
        alert("The lenght of the Tile is too long!");
        return false;
    }
    if (title.length < 10) {
        alert("The lenght of the title is too short!");
        return false;
    }
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if (title.match(format)) {
        alert("The title field is incorrect format");
        return false;
    }
    return true;
}
function CheckBrief(brief) {
    if (brief.length > 150) {
        alert("The lenght of the brief is too long!");
        return false;
    }
    if (brief.length < 30) {
        alert("The lenght of the brief is too short!");
        return false;
    }
    return true;
}
function Checkcontent(content) {
    if (brief.length > 1000) {
        alert("The lenght of the content is too long!");
        return false;
    }
    if (brief.length < 50) {
        alert("The lenght of the content is too short!");
        return false;
    }
    return true;
}


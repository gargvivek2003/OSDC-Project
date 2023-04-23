$(".input_text").focus(function () {
    $(this).prev('.fa').addclass('glowIcon')
})
$(".input_text").focusout(function () {
    $(this).prev('.fa').removeclass('glowIcon')
})

function validateForm() {
    let name = document.forms["myForm"]["name"].value;
    let password = document.forms["myForm"]["password"].value;

    if (name == "") {
        alert("Email must be filled out");
        return false;
    }

    if (password == "") {
        alert("Password must be filled out");
        return false;
    }

    return true;
}
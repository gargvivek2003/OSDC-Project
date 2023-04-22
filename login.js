$(".input_text").focus(function(){
    $(this).prev('.fa').addclass('glowIcon')
})
$(".input_text").focusout(function(){
    $(this).prev('.fa').removeclass('glowIcon')
})

function validate() { 
    var name = document.reg_form.name;     
    var email = document.reg_form.email;         
    var gender = document.reg_form.gender; 
    var lang = document.reg_form.lang;       
    if (fname.value.length <= 0) {    
        alert("User ID is required");    
        fname.focus();    
        return false;    
    }    
    if (lname.value.length <= 0) {    
        alert("Password is required");    
        lname.focus();    
        return false;    
    }    
    if (name.value.length <= 0) {    
        alert("Name is required");    
        name.focus();    
        return false;    
    }    
if (Country.value == "(Please select a country)") {    
        alert("Country Name is required");    
        Country.focus();    
        return false;    
    }    
if (Code.value.length <= 0) {    
        alert("ZIP Code is required");    
        Code.focus();    
        return false;    
    }    
if (email.value.length <= 0) {    
        alert("Email Id is required");    
        email.focus();    
        return false;    
    }    
    if (gender.value.length <= 0) {    
        alert("Gender is required");    
        gender.focus();    
        return false;    
    }    
    if (lang.value.length <= 0) {    
        alert("Language is required");    
        lang.focus();    
        return false;    
    }    
    return false;    
}    
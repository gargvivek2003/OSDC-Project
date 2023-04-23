$(".input_text").focus(function(){
    $(this).prev('.fa').addclass('glowIcon')
})
$(".input_text").focusout(function(){
    $(this).prev('.fa').removeclass('glowIcon')
})

function validateForm() {
    let email = document.forms["myForm"]["email"].value;
    let password = document.forms["myForm"]["new-password"].value;
    let confirm_password = document.forms["myForm"]["confirm-password"].value;
  
    if (email == "") {
      alert("Email must be filled out");
      return false;
    }
  
    if (password == "") {
      alert("New password must be filled out");
      return false;
    }
  
    if (confirm_password == "") {
      alert("Confirm new password must be filled out");
      return false;
    }
  
    if (password !== confirm_password) {
      alert("New password and confirm new password must match");
      return false;
    }
  
    return true;
  }
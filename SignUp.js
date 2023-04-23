$(".input_text").focus(function(){
  $(this).prev('.fa').addclass('glowIcon')
})
$(".input_text").focusout(function(){
  $(this).prev('.fa').removeclass('glowIcon')
})

function validateForm() {
  let name = document.forms["myForm"]["name"].value;
  let email = document.forms["myForm"]["email"].value;
  let password = document.forms["myForm"]["password"].value;
  let confirm_password = document.forms["myForm"]["confirm-password"].value;
  let mobile = document.getElementById("Mobilenum").value;

  if (name == "") {
      alert("Name must be filled out");
      return false;
    }
  
  if (email == "") {
    alert("Email must be filled out");
    return false;
  }

  if (password == "") {
    alert("Password must be filled out");
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

  if (mobile == "") {
      alert("Mobile Number must be filled out");
      return false;
    }
    
    var mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobile)) {
      alert("Invalid mobile number");
      return false;
    }
  return true;
}
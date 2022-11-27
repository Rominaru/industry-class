function validateForm() {
  var x = document.forms["myRegister"]["fname"].value;
  var y = document.forms["myRegister"]["fpasswd"].value;
  var z = document.forms["myRegister"]["fmail"].value;

  if (z == "" && x == "" && y == "") {
    alert("Email, Username and Password must be filled out");
  } else if (x == "" && y == "") {
    alert("Username and Password must be filled out");
    return false;
  } else if (x == "") {
    alert("Username must be filled out");
    return false;
  } else if (y == "") {
    alert("Password must be filled out");
    return false;
  } else if (z == "") {
    alert("Email must be filled out");
    return false;
  }
}

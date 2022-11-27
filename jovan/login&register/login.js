function validateForm() {
  var x = document.forms["myLogin"]["fname"].value;
  var y = document.forms["myLogin"]["fpasswd"].value;

  if (x == "" && y == "") {
    alert("Username and Password must be filled out");
  }
  else if (x == "") {
    alert("Username must be filled out");
    return false;
  }
  else if (y == "") {
    alert("Password must be filled out");
    return false;
  }
}

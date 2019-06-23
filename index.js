// add error class to inputs and extra-card class to card div when user clicks submit and form isn't ready
// remove placeholder text when error is active
// color incorrect email red
/*
also add following text to small elements
- First Name cannot be empty
- Last Name cannot be empty
- Looks like this is not an email
- Password cannot be empty
*/

var submitButton = $('button');
var signUp = $(".sign-up");
var form = $("form");
var firstName = $('input[name="first name"]');
var lastName = $('input[name="last name"]');
var email = $('input[name="email address"]');
var password = $('input[name="password"]');
var errorFN = $("#fname");
var errorLN = $("#lname");
var errorEM = $("#mail");
var errorPW = $("#pword");
var validEmail = /[a-zA-Z]+[1-9]*[@]{1}[a-z]+[.]{1}[a-z]/;


form.submit(formErrors);

function formErrors(i) {

  if (firstName.text("")) {
    firstName.addClass("error");
    errorFN.text("First Name cannot be empty");
    firstName.attr("placeholder", "");
  } 

  if (lastName.text("")) {
    lastName.addClass("error");
    errorLN.text("Last Name cannot be empty");
    lastName.attr("placeholder", "");
  }

  if (!validEmail.test(email)) {
    email.addClass("error");
    errorEM.text("Looks like this is not an email");
    email.attr("placeholder", "");
  }

  if (password.text("")) {
    password.addClass("error");
    errorPW.text("Password cannot be empty");
    password.attr("placeholder", "");
  }

  signUp.addClass("extra-card");
  i.preventDefault();
}

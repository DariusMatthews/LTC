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
var form = $("#form");
var firstName = $('input[name="first name"]');
var lastName = $('input[name="last name"]');
var email = $('input[name="email address"]');
var password = $('input[name="password"]');
var errorFN = $("#fname");
var errorLN = $("#lname");
var errorEM = $("#mail");
var errorPW = $("#pword");
var errors = [];
var validEmail = /[a-zA-Z]+[1-9]*[@]{1}[a-z]+[.]{1}[a-z]/;
var validation = false;

function formErrors(e) {
  e.preventDefault();

  //input validation
  if (firstName[0].value === '') {
    firstName.addClass("error");
    errorFN.text("First Name cannot be empty");
    firstName.attr("placeholder", "");
    errors.push('first name');
  } else {
    errorFN.text("");
    firstName.removeClass("error");
    firstName.attr("placeholder", "First Name");
  }

  if (lastName[0].value === '') {
    lastName.addClass("error");
    errorLN.text("Last Name cannot be empty");
    lastName.attr("placeholder", "");
    errors.push('last name');
  } else {
    errorLN.text("");
    lastName.removeClass("error");
    lastName.attr("placeholder", "Last Name");
  }

  if (!validEmail.test(email[0].value)) {
    email.addClass("error");
    email.attr("placeholder", "");
    errorEM.text("Looks like this is not an email");
    errors.push('email');
  } else {
    errorEM.text("");
    email.removeClass("error");
    email.attr("placeholder", "Email Address");
  }
  if (password[0].value === '') {
    password.addClass("error");
    errorPW.text("Password cannot be empty");
    password.attr("placeholder", "");
    errors.push('password');
  } else {
    errorPW.text("");
    password.removeClass("error");
    password.attr("placeholder", "Password");
  }

  //form validation if no errors
  if (errors.length === 0) {
    validation = true;
    console.log('valid form');
    form[0].reset();
  }

  //lengthen card when more than 1 error
  if (errors.length > 1) {
    signUp.addClass("extra-card");
    errors = [];
  } else {
    signUp.removeClass("extra-card");
    errors = [];
  }
  
}

form.submit(formErrors);

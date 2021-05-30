// Checks Whether the given input in the Contact form is valid or not
function validateContact() {
    var firstName = document.forms["contactform"]["fname"].value;
    var lastName = document.forms["contactform"]["lname"].value;
    var cemail = document.forms["contactform"]["email"].value;
    var message = document.forms["contactform"]["message"].value;

    if (firstName != "" || lastName != "" || cemail != "" || message != "") {
        alert("Thank you for your approach. we will get back to you soon!");
    }
    else {
        alert("Please fill the required areas!");
        return false;   //Does not return the value
    }
}

// Checks if the given input in the NewsLetter Form is valid or not
function validateNews() {
    var name = document.forms["newsform"]["name"].value;
    var email = document.forms["newsform"]["email"].value;

    if (name != "" || email != "") {
        alert("Thank you for subscribing!");
    }
    else {
        alert("Please fill the required areas!");
        return false;   //Does not return the value
    }
}
//declare variables

var pwdLength = prompt("Please enter the lenght of your password, between 8 & 128 characters");
var specialChar = "~!@#$%^&*()__-+=?{}[]||\/";
var pwdNumber = "0123456789";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowcaseChar = "abcdefghijklmnopqrstuvwxyz";
var Char = "";

// Function to validate user's input
function validUerinput() {
    while (pwdLength < 8 || pwdLength > 128 || pwdLength === " "){

        pwdLength = prompt("Please enter a valid password, between 8 & 128 characters");

    }
    var special = confirm("Do you want your password to contain special characters")
    if (special === true) {
        Char += specialChar;
    }
    // console.log(Char)

    var Num = confirm("Do you want your password to contain  numbers?")
    if (Num === true) {
        Char += pwdNumber;
    }
    // console.log(Char)


    var low = confirm("Do you want your password to contain lowercase characters?")
    if (low === true) {
        Char += lowcaseChar;
    }
    // console.log(Char)

    var upper = confirm("Do you want your password to contain uppercase characters?")
    if (upper === true) {
        Char += uppercaseChar;
    }
    // console.log(Char)

}
validUerinput();

// Funtion to generate the random password
function generatePwd() {
    var password = "";
    for (i = 0; i <= pwdLength; i++) {
        password += Char.charAt(Math.floor(Math.random() * Char.length));
    }
    // add password the generate button
    document.getElementById("displayPwd").value=password;
}

// Function copy password
function copyFunction() {
    document.getElementById("displayPwd").select();
    document.execCommand("copy");
}
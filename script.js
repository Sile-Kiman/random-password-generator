//declare variables


var userInput = {
    pwdLenght: prompt("Please enter the lenght of your password, between 8 & 128 characters"),

    specialChar: confirm("Do you want it to contain special characters?"),

    pwdNumber: confirm("Do you want it to contain  numbers?"),

    lowcaseChar: confirm("Do you want it to contain lowercase characters?"),

    uppercaseChar: confirm("Do you want it to contain uppercase characters?")


}


function validateInput() {

    while (userInput !== "") {

        value = userInput.pwdLenght;
        console.log(value)

        if (value > 0) {
            value1 = userInput.specialChar;
            return value1;
            console.log(value1)
        }
        else if (value1 === true) {
            value2 = userInput.lowcaseChar;
            return value2;
            console.log(value2)

        }


    }

}
console.log(validateInput())
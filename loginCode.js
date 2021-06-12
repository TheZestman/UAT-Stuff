function checkCreds() {
    console.log("checkCreds() started");
    var firstName = document.getElementById("fName").value; // variable for first name
    var lastName = document.getElementById("lName").value; // variable for last name
    var fullName = firstName + " " + lastName; // variable for full name
    var badgeNumber = document.getElementById("badgeID").value; // variable for badge #
    //validate full name
    if (fullName.legnth > 20 || fullName.length < 2) {
        document.getElementById("loginStatus").innerHTML = "Invalid full name, Please try again.";
    } else if (badgeNumber > 999 || badgeNumber < 0) {
        document.getElementById("loginStatus").innerHTML = "Invalid badge number, Pleade try again.";
    } else {
        console.log("Submission passes!");
        alert("Access granted: Welcome, " + fullName);
        location.replace("UATSpace.html");
    }

}
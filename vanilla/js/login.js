function redirect() {

var accountUser = document.getElementById("signupUsername").value;
var confirmUser = document.getElementById("confirmUsername").value;
var accountPass = document.getElementById("passwordUsername").value;
var confirmPass = document.getElementById("confirmPasswordUsername").value;
var letters = /^[A-Za-z]+$/;

if((accountUser === "")||(confirmUser === "")||(accountPass === "")||(confirmPass === "")) {
    document.getElementById("error-1").style.display = "block";
    document.getElementById("error-1").innerHTML = "Please fill all the fields!";
    } else if(accountUser !== confirmUser) {
        document.getElementById("error-1").style.display = "none";
        document.getElementById("error-2").style.display = "block";
        document.getElementById("error-2").innerHTML = "Please check the username again!";
    } else if(accountUser.length < 6 || accountUser.length > 12) {
        document.getElementById("error-1").style.display = "none";
        document.getElementById("error-2").style.display = "none";
        document.getElementById("error-3").style.display = "block";
        document.getElementById("error-3").innerHTML = "Username must have between 6 and 12 characters!";
    } else if(accountPass !== confirmPass) {
        document.getElementById("error-1").style.display = "none";
        document.getElementById("error-2").style.display = "none";
        document.getElementById("error-3").style.display = "none";
        document.getElementById("error-4").style.display = "block";
        document.getElementById("error-4").innerHTML = "Please check the password again!";
    } else if(!accountUser.match(letters)) {
        document.getElementById("error-1").style.display = "none";
        document.getElementById("error-2").style.display = "none";
        document.getElementById("error-3").style.display = "none";
        document.getElementById("error-4").style.display = "none";
        document.getElementById("error-5").style.display = "block";
        document.getElementById("error-5").innerHTML = "Username must contain only letters!";
    } else {
        window.location.replace("index.html");
    }
}
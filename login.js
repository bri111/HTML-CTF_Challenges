function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

    if (username =="scientist" && password == "MadScientist123"){
        alert("login successful. Flag: WiofhFi12e4F");
        return false;
    } else {
        alert("login unsuccessful. try again.");
    }
}
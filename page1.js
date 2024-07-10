function validate() {
    var name = document.getElementById("name").value;
    
    var Password = document.getElementById("password").value;
    

    if (name === "" || Password === "" ) {
        alert("Please fill out all fields.");
        return;
    }
    

    
    if (!Password =="123") {
        alert('Invalid Password');
        return;
    }
    else{
        alert("Login successfully!");

    }

   

    
}

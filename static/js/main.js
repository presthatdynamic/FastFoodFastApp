function loginFn(){

    window.location.href("../UI/signup.html");
}

var uname_store = document.getElementById("uname_store").value; 
var email_store = document.getElementById("email_store").value; 
var passwd_store = document.getElementById("passwd_store").value; 
var password_confirm_store = document.getElementById("password_confirm_store").value; 

function signupFn(){

    if (passwd_store==password_confirm_store){

        localStorage.setItem("username", uname_store);
        localStorage.setItem("email", email_store);
        localStorage.setItem("password", passwd_store);
        localStorage.setItem("password-confirm", password_confirm_store);
    }
    else{
        alert("Please try registering again");

    }

}

function signupLink(){
    window.location.href("../UI/signup.html");
}



// Checking the form for Integer or float input validation

function checkform ( form )
{
    var valid = parseFloat(form.txtFloat.value);
    var valid1 = parseFloat(form.txtFloat1.value);
    var valid2 = parseFloat(form.txtFloat2.value);
    var valid3 = parseFloat(form.txtFloat3.value);
    var valid4 = parseFloat(form.txtFloat4.value);
    var valid5 = parseFloat(form.txtFloat5.value);
    var valid6 = parseFloat(form.txtFloat6.value);
    var valid7 = parseFloat(form.txtFloat7.value);
        
    if( !valid || !valid1 || !valid2 || !valid3 || !valid4 || !valid5 || !valid6 || !valid7 )
    {
    	alert( "Please enter valid float or even number." );
        form.txtFloat.focus();
        form.txtFloat1.focus();
        form.txtFloat2.focus();
        form.txtFloat3.focus();
        form.txtFloat4.focus();
        form.txtFloat5.focus();
        form.txtFloat6.focus();
        form.txtFloat7.focus();
    	return false;
    }
    else
        return true ;
}
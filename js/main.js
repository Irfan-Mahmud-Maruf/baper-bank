document.getElementById('login-submit').addEventListener ('click', function(){
    const emailFeild = document.getElementById ('user-email');
    const userEmail = emailFeild.value;
    const passwordFeild = document.getElementById ('user-password');
    const userPassword = passwordFeild.value;

    if (userEmail == "pulapan@baperbank.com" && userPassword == "bajanjane"){
        window.location.href = 'banking.html';
    }
    else{
        alert("Give Correct Email and Password.");
    }
})


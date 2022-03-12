// BUSINESS LOGIC 
$("button").click(function(event){
    event.preventDefault()
    let userName = document.getElementById("userName").value;
    let userEmail = document.getElementById("userEmail").value;
    let message = document.getElementById("message");

    if(userName === ""){
        alert("Please enter your username");
    }
    else if(userEmail === ""){
        alert("Please enter your email address");
    }
    else if(message === ""){
    alert("Please type your message")
    }else {
        alert("Dear" + userName + " , thank you for reaching out to Delani Studio. We will get back to you on " + userEmail + " the earliest time possible/")
    }

})
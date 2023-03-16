document.getElementById("submit-button").addEventListener('click',function(){
    const userMail = document.getElementById( "user-email" ).value ;
    const userPassword = document.getElementById( "user-passsword" ).value ;

    if (userMail == "dhaka@email.com" &&  userPassword == "prokash2023") 
   {
        window.location.href = 'deshBorad/deshBorad.html';
    }

})
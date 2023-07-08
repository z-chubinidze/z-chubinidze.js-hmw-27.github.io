


    var inputEmail = document.getElementById("email");
    var error1 = document.getElementById("emailError");
    var inputpassword = document.getElementById("password1");
    var error2 = document.getElementById("passwordError");
    var pattern = /^[a-zA-Z0-9.!#$%'*+/=?^_{|}-]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;

function validation(){
    

    if(inputEmail.value.match(pattern)){
        error1.innerHTML = "";
        inputEmail.style.border = " 1px solid green";
       return true;

    }else {
        error1.innerHTML = "please enter valid email address";
        inputEmail.style.border = " 1px solid red";
        error1.style.display = "block";
        document.getElementById("label1").style.marginTop = "12px";
        return false;
    }
}     
function validpass(){
    if(inputEmail.value == ""){
        error1.innerHTML = "please enter valid email address";
        inputEmail.style.border = " 1px solid red";
        error1.style.display = "block";
        document.getElementById("label1").style.marginTop = "12px";
    }
    
    if(inputpassword.value == "" ){
        error2.innerHTML = "invalid password";
        error2.style.display = "block";
        inputpassword.style.border = " 1px solid red";
       return true;
    }else{
        error2.innerHTML = "";
        inputpassword.style.border = " 1px solid green";
        
        return false;
    }
}
     
     // პაროლის ჩასაწერი ველში ტეხქსის გამოჩენა და დამალვა

      var x = false;
      document.getElementById("eye2").style.display = "none";
      function pasword(){
       
        if(x){
          document.getElementById("password1").setAttribute("type", "password");
          document.getElementById("eye2").style.display = "none";
          document.getElementById("eye").style.display = "block";
         
          
          x = false;
         
        } else {
          document.getElementById("password1").setAttribute("type", "text")
          document.getElementById("eye2").style.display = "block";
          document.getElementById("eye").style.display = "none";
          x = true;
        }
      };
 
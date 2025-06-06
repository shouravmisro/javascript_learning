let emailId = document.getElementById("email-id");
let errorMsg = document.getElementById("error-msg");
let icon = document.getElementById("icon");

function checker(){

    icon.style.display = "inline-block";
    let email = emailId.value.trim();

    if(email === ""){
       icon.style.display = "none";
       errorMsg.style.display = "none";
       emailId.style.border = "2px solid #d1d3d4"; 
    }else if(validateEmail(email)){  // hello2@gmail.com
        icon.innerHTML = '<i class="fas fa-check-circle"></i>';
        icon.style.color = "#2ecc71";
        errorMsg.style.display = "none";
        emailId.style.border = "2px solid #2ecc71";
    }else{
        icon.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
        icon.style.color = "#ff2851";
        errorMsg.style.display = "block";
        emailId.style.border = "2px solid #ff2851";
    }

}

function validateEmail(email){  // hello2@gmail.com

     let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (regex.test(email)){
        return true;
    }else{
        return false;
    }

}

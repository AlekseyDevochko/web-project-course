function validation() {
    if(nameValid() && lastNameValid() && pwdValid() && emailValid() ){
        return true;
    } else return false;
}

function nameValid() {
    var userName = document.regForm.username.value;
    if (userName.trim().length <= 1) {
        alert("incorrect user name!");
        //focus on element
        document.regForm.username.focus();
        return false;
    }
    //all valid
    return true;
}

function lastNameValid() {
    var userName = document.regForm.lastName.value;
    if (userName.trim().length <= 1){
        alert("incorrect last name!");
        //focus on element
        document.regForm.username.focus();
        return false;
    }
    //all valid
    return true;
}

function pwdValid() {
    var pwd = document.regForm.pwd1.value;
    if(pwd.length < 8){
        alert("password length less then 8 characters!");
        document.regForm.pwd1.focus();
        return false
    }
    var pwd2 = document.regForm.pwd2.value;
    if (pwd != pwd2){
        alert("passwords not the same!");
        document.regForm.pwd2.focus();
        return false
    }
    return true
}

function emailValid() {
    var email = document.regForm.email.value;
    // if (email.trim().length <= 1){
    //     alert("empty email!");
    //     //focus on element
    //     document.regForm.email.focus();
    //     return false;
    // }
    var pos1 = email.indexOf("@");
    var pos2 = email.lastIndexOf("."); // john.doe@gmail.com
    if(pos1 < 1 || (pos2 - pos1 < 2) ){
        alert("incorrect email!");
        document.regForm.email.focus();
        return false;
    }
    return true;
}
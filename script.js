var  nameError = document.getElementById("name-error");
var  phoneError = document.getElementById("phone-error");
var  emailError = document.getElementById("email-error");
var  messageError = document.getElementById("message-error");
var  submitError = document.getElementById("submit-error");


function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length==0){
        nameError.innerHTML = "Name is required";
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write Full-name";
        return false;
    }

    nameError.innerHTML= '<i class="fa-solid fa-check"></i>';
    return true;
}

function validatePhone(){
    var phone = document.getElementById('phone-name').value;

    if(phone.length == 0){
        phoneError.innerHTML='Phone no should be 10 digits';
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML= 'Phone should  be 10 digits';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = ' only digits please.';
    }

    phoneError.innerHTML = '<i class="fa-solid fa-check"></i>'
    return true;
}

function validateEmail(){
    var email = document.getElementById('email-name').value;

    if(email.length == 0){
        emailError.innerHTML='Email is required';
        return false;
    }
    
    if(!email.match(/^[A-Za-z[0-9]*[@][A-Za-z]*[\.[a-z]{2,4}$/)){
        emailError.innerHTML = "email invalid";
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-check"></i>'
    return true;
}

function validateMessage(){
    var message = document.getElementById('message-name').value;

    var required = 30;
    var left=  required - message.length;

    if(left>0){
        messageError.innerHTML = left + 'more character required';
        return false;
    }

    messageError.innerHTML ='<i class="fa-solid fa-check"></i>';
    return true;
} 


function validateForm(){
    if(!validateEmail()|| !validateMessage() || !validateName()|| !validatePhone()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(function(){
            submitError.style.display='none';
        },3000);
        return false;
    }

}
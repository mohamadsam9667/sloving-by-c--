let username=document.querySelector(".username");
let password=document.querySelector(".password");
let validationUser=document.querySelector(".user-validation");
let validationPassword=document.querySelector(".password-validation");
let printer=document.querySelector(".type");
console.log(printer)
// console.log(validationUser,validationPassword,username,password);
function exitUser(){

  if(username.value.length>12)
    {
      validationUser.style.color='red';
      validationUser.style.display='block';
      validationUser.innerHTML="چون اسمت بیشتر  از 12 حرفه پس کسخلی";

    }
    
    else{
      validationUser.style.color='green';
      validationUser.style.display='block';
      validationUser.innerHTML="چون اسمت کمتر از 12 حرفه پس تو بچه خوبی هستی";
    }
}

function exitPass(){
  if(password.value.length>8)
    {
     validationPassword.style.display='block';
     validationPassword.style.color='green';
     validationPassword.innerHTML="چون پسورد بیشتر از 8 حرفه تو سیگمایی"; 
    }
    else{
      validationPassword.style.display='block';
      validationPassword.style.color='red';
      validationPassword.innerHTML="چون پسورد کمتر از 8 حرفه تو کسخلی هیچی نمیشی میدونم باباتم بهت گفته";    
    }

}


function login(){
    validationPassword.style.display="none";
    validationUser.style.display="none";
    // validationUser.innerHTML="";
    username.value="";
    password.value=""
    printer.style.display='block';
    printer.style.color="yellow";
    printer.style.width="200px"
    setTimeout(function(){
       printer.style.display='none'
      
    },8000)

}
  
  
  
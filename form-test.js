var form_button = document.getElementById("button"); 

function Validate(event){
  event.preventDefault(); 
  var form_name = document.getElementById("name"); 
  var form_email = document.getElementById("email"); 


  var value = form_name.value; 
  var value = form_email.value; 


  if (!value){ 
      form_name.style.border = "1px solid red"; 
      form_email.style.border = "1px solid red"; 

    } else {
            form_name.style.border = "1px solid gray"; 
            form_email.style.border = "1px solid gray"; 

          }
          console.log(value);
        }


form_button.addEventListener("click", Validate); 

var form_button = document.getElementById("button"); 


function Validate2(event){
  event.preventDefault(); 
  var form_name = document.getElementById("name"); 
  var form_email = document.getElementById("email"); 
  var form_button = document.getElementById("button"); 

  var value = form_name.value; 
  var value = form_email.value; 
  var value = form_button.value; 

 if (!value){
form_name.style.display = "none"; 
form_email.style.display = "none";
form_button.style.display = "none";
alert( "Сообщение отправлено" );
}
          console.log(value);
        }


form_button.addEventListener("click", Validate2); 



function Func3(){
  // первая + вторая
Validate(event);
Validate2(event);
}
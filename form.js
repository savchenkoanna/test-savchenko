var form_button = document.getElementById("button");


function Validate2(event){
  event.preventDefault();
  var form_name = document.getElementById("name");
  var form_email = document.getElementById("email");

  var value_name = form_name.value;
  var value_email = form_email.value;

  if (!value_name){
    form_name.style.border = "1px solid red";
  }

  if (!value_email){
    form_email.style.border = "1px solid red";
  }

  if (value_name && value_email) {
    var form = document.getElementById("form");
    form.style.display = "none";
    alert( "Сообщение отправлено" );

  }

}


form_button.addEventListener("click", Validate2);




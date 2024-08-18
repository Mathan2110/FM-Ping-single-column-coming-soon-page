function check() {
  var email = document.querySelector("#email-input").value;
  var errorMsg = document.querySelector(".error");
  var emailBox = document.querySelector(".email");

  if (
    email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    errorMsg.style.display="none";
    emailBox.style.gap="0.8rem"
  }
  else{
    errorMsg.style.display="block";
    emailBox.style.gap="5px"
  }
}

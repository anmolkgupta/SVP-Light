function loginValidation() {
    phonecheck();
    passwordcheck();
  }
  
  function phonecheck() {
    let phone = document.getElementById("phone-number").value;
    let p3 =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (email == "") {
      alert("Enter a valid phone number.");
    } else if (!p3.test(phone)) {
      alert("Invalid phone number.");
      document.getElementById("phone-number").value = "";
      document.getElementById("phone-number").focus();
    }
  }
  function passwordcheck() {
    let pass = document.getElementById("password").value;
    let p4 = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  
    if (pass == "") {
      alert("Enter a password");
    } else if (!p4.test(pass)) {
      alert(
        "Password should contain atleast one digit and one special character."
      );
      document.getElementById("password").value = "";
      document.getElementById("password").focus();
    }
  }
  
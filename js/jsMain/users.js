var admin = 
  {
    user: "admin",
    password: "admin",
  }; 
  localStorage.setItem("admin", JSON.stringify(admin));
function checkpw() {
    if (
      document.formDangKi.password.value !== document.formDangKi.rppassword.value
    ) {
      document.formDangKi.rppassword.style.border = "1px solid red";
    } else {
      document.formDangKi.rppassword.style.border = "none";
    }
  }
  var id;
  var userConfirm = JSON.parse(localStorage.getItem("userConfirm")) || [];
  document.getElementById('Email').innerHTML = 'Xin chào bạn: '+ userConfirm[0].email;
  function register() {
    var code = document.getElementById('code').value;
    let userConfirm = JSON.parse(localStorage.getItem("userConfirm")) || [];
    var users = JSON.parse(localStorage.getItem("users")) || [];
    for (i = 0; i <= users.length; i++) {
      id = i;
    }
    let userData = {
      id: id,
      name: userConfirm[0].name,
      username: userConfirm[0].username,
      password: userConfirm[0].password,
      rppassword: userConfirm[0].rppassword,
      email: userConfirm[0].email,
      phone: userConfirm[0].phone,
      address: userConfirm[0].address
    };
    if(userConfirm[0].codeConfirm == code ) {
      users.push(userData);
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.removeItem("userConfirm");
      alert("Đăng kí thành công!");
      window.location.href = "login.html";
    }
    else {
      alert("Mã không chính xác");
      window.location.href = "confirmEmail.html";
    }
     
  }
  function validateForm() {
    var val = Math.floor(1000 + Math.random() * 9000);
    var userConfirm = JSON.parse(localStorage.getItem("userConfirm")) || [];
    let userData = {
      name: document.formDangKi.name.value,
      username: document.formDangKi.username.value,
      password: document.formDangKi.password.value,
      rppassword: document.formDangKi.rppassword.value,
      email: document.formDangKi.email.value,
      phone: document.formDangKi.phone.value,
      address: document.formDangKi.address.value,
      codeConfirm: val,
    };
    var x = document.getElementsByClassName("fadeIn");
    var count = 0;
    for (var i = 0; i < x.length; i++) {
      if (x[i].value == "") {
        count++;
        alert("Vui lòng điền " + x[i].placeholder);
      } else {
        count = 0;
      }
    }
    var email = document.formDangKi.email.value;
    var password= document.formDangKi.password.value;
    var rppassword= document.formDangKi.rppassword.value;
    if (password == rppassword && count == 0) {
      var mail = {
        SecureToken: "74c01be1-b851-4b5f-9bcf-ab45e9b7f05d",
        Host: "smtp.gmail.com",
        Username: "kienquat2005@gmail.com",
        Password: "Nguyenvankien",
        To: email,
        From: "kienquat2005@gmail.com",
        Subject: "Đăng kí tài khoản",
        Body:  "Mã đăng kí tài khoản của bạn là: " +val
    }
    Email.send(mail).then(
      message => alert(message)
    );
    userConfirm.push(userData);
    localStorage.setItem("userConfirm", JSON.stringify(userConfirm));
      alert("Đã đăng kí!");
      window.location.href = "confirmEmail.html";
    } else {
      alert("Mật khẩu không khớp");
    }
  }
  
  var customer;
  function Login() {
    var users = JSON.parse(localStorage.getItem("users")) || [];
    var admin = JSON.parse(localStorage.getItem("admin")) || [];
  
    let usernames = document.login.name.value;
    let password = document.login.password.value;
    if (admin.user == usernames && admin.password == password) {
      alert("xin chào Admin!");
      window.location.href = "admin.html";
    } else {
      for (i in users) {
        if (users[i].username == usernames && users[i].password == password) {
          window.location.href = "index.html";
          customer = [
            {
              id: users[i].id,
              user: users[i].name,
            },
          ];
        } else {
          document.getElementById("demo").innerHTML =
            "Tên đăng nhập hoặc mật khẩu không đúng!";
        }
      }
    }
    localStorage.setItem("customer", JSON.stringify(customer));
  }
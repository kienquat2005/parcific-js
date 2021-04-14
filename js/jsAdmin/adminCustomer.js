var admin = JSON.parse(localStorage.getItem("admin")) || [];
document.getElementById('admin').innerHTML = admin.user;
var user = [];
function loadCus() {
  var users = JSON.parse(localStorage.getItem("users")) || [];
  if (users.length > 0) {
    show();
  }
}

var id;
function save() {
  document.getElementById("huy").style.display = "none";
  document.getElementById("themmoi").style.display = "block";
  document.getElementById("divAddHotel").style.display = "none";
  var users = JSON.parse(localStorage.getItem("users")) || [];
  for (i = 0; i <= users.length; i++) {
    id = users.length;
  }
  var nameCus = document.getElementById("nameCus").value;
  var passwordCus = document.getElementById("passwordCus").value;
  var name = document.getElementById("name").value;
  var phoneCus = document.getElementById("phoneCus").value;
  var emailCus = document.getElementById("emailCus").value;
  let addressCus = document.getElementById("addressCus").value;
  if (nameCus | passwordCus | name | phoneCus | emailCus | addressCus) {
    var oneCus = {
      id: id,
      username: nameCus,
      password: passwordCus,
      name: name,
      phone: phoneCus,
      email: emailCus,
      address: addressCus,
    };
    users.push(oneCus);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Thêm người dùng thành công!");
    show();
  } else {
    reset();
  }
}
document.getElementById("divAddHotel").style.display = "none";
document.getElementById("huy").style.display = "none";
function addHotel() {
  document.getElementById("divAddHotel").style.display = "block";
  document.getElementById("huy").style.display = "block";
  document.getElementById("themmoi").style.display = "none";
}
function removeHotel() {
  document.getElementById("divAddHotel").style.display = "none";
  document.getElementById("huy").style.display = "none";
  document.getElementById("themmoi").style.display = "block";
}
function show() {
  var users = JSON.parse(localStorage.getItem("users")) || [];
  let row = "";
  for (i in users) {
    row += "<tr >";
    row += "<td>" + users[i].id + "</td>";
    row += "<td>" + users[i].username + "</td>";
    row += "<td>" + users[i].password + "</td>";
    row += "<td>" + users[i].name + "</td>";
    row += "<td>" + users[i].phone + "</td>";
    row += "<td>" + users[i].email + "</td>";
    row += "<td>" + users[i].address + "</td>";
    row +=
      "<td>" +
      `<button type="button" onclick="editsp(${i})" class="btn btn-success">Edit</button>` +
      "</td>";
    row +=
      "<td>" +
      `<button type="button" onclick="deletesp(${i})" class="btn btn-danger">Delete</button>` +
      "</td>";
    row += "</tr>";
  }
  document.getElementById("tab").innerHTML = row;
}
function editsp(id) {
  document.getElementById("huy").style.display = "block";
  document.getElementById("themmoi").style.display = "none";
  document.getElementById("divAddHotel").style.display = "block";
  var users = JSON.parse(localStorage.getItem("users")) || [];
  document.getElementById("ok").style.display = "none";
  document.getElementById("edit").style.display = "block";

  document.getElementById("nameCus").value = users[id].username;
  document.getElementById("passwordCus").value = users[id].password;
  document.getElementById("name").value = users[id].name;
  document.getElementById("phoneCus").value = users[id].phone;
  document.getElementById("emailCus").value = users[id].email;
  document.getElementById("addressCus").value = users[id].address;
  document.getElementById(
    "edit"
  ).innerHTML = `<button type="button" onclick="editok(${id})" class="btn btn-success">save</button>`;
}
function editok(id) {
  var users = JSON.parse(localStorage.getItem("users")) || [];
  document.getElementById("huy").style.display = "none";
  document.getElementById("themmoi").style.display = "block";
  document.getElementById("divAddHotel").style.display = "none";
  user = users;
  user[id].id = users[id].id;
  user[id].username = document.getElementById("nameCus").value;
  user[id].password = document.getElementById("passwordCus").value;
  user[id].phone = document.getElementById("phoneCus").value;
  user[id].email = document.getElementById("emailCus").value;
  user[id].address = document.getElementById("addressCus").value;
  localStorage.setItem("users", JSON.stringify(user));
  if (document.getElementById("edit").style.display === "block") {
    document.getElementById("edit").style.display = "none";
    document.getElementById("ok").style.display = "block";
  } else {
    document.getElementById("edit").style.display = "block";
    document.getElementById("ok").style.display = "none";
  }
  alert("Cập nhật thành công!");
  show();
  reset();
}
function deletesp(id) {
  var r = confirm("Bạn có chắc muốn xoá người dùng này?");
  if (r === true) {
    var users = JSON.parse(localStorage.getItem("users")) || [];
    user = users;
    user.splice(id, 1);
    localStorage.setItem("users", JSON.stringify(user));
    show();
  } else {
    window.location.href = "adminCustomer.html";
  }
}

function reset() {
  document.getElementById("nameCus").value = "";
  document.getElementById("passwordCus").value = "";
  document.getElementById("name").value = "";
  document.getElementById("phoneCus").value = "";
  document.getElementById("emailCus").value = "";
  document.getElementById("addressCus").value = "";
}

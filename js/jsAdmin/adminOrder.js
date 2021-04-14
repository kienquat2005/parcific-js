var admin = JSON.parse(localStorage.getItem("admin")) || [];
document.getElementById("admin").innerHTML = admin.user;
var order = [];
function loadOrder() {
  var orders = JSON.parse(localStorage.getItem("OrderCompleted")) || [];
  if (orders.length > 0) {
    show();
  }
}

function show() {
  var orders = JSON.parse(localStorage.getItem("OrderCompleted")) || [];
  let row = "";
  for (i in orders) {
    row += "<tr >";
    row += "<td>" + orders[i].id + "</td>";
    row += "<td>" + orders[i].name + "</td>";
    row += "<td>" + orders[i].sdt + "</td>";
    row += "<td>" + orders[i].email + "</td>";
    row += "<td>" + orders[i].diachi + "</td>";
    row +=
      "<td>" +
      `<button type="button" class="btn btn-success " data-toggle="modal" onclick="getData(${orders[i].id})" data-target="#myModal">Xem chi tiết</button>` +
      "</td>";

    row += "<td>" + orders[i].total + " VNĐ" + "</td>";
    row +=
      "<td>" +
      `<select class="btn btn-primary isActive" id="thongbao"  onchange="changeOption(${i})">
            <option value="false">${orders[i].isActive}</option>
            <option value="false" >False</option>
            <option value="true">True</option>
      </select>` +
      "</td>";
    row +=
      "<td>" +
      `<button type="button" onclick="deletesp(${i})" class="btn btn-danger">Delete</button>` +
      "</td>";
    row += "</tr>";
  }

  document.getElementById("tab").innerHTML = row;
}
function getData(id) {
  var orders = JSON.parse(localStorage.getItem("OrderCompleted")) || [];
  let table = `
    <h3>Danh sách phòng đã đặt</h3>
    <table class="table table-bordered">
    <thead >
      <tr>
        <th scope="col">Tên phòng</th>
        <th scope="col">Ngày đặt</th>
        <th scope="col">Ngày trả</th>
        <th scope="col">Giá phòng</th>
      </tr>
    </thead>
    <tbody id="myOrders">  
    </tbody>
    </table>
    `;
  document.getElementById("divTable").innerHTML = table;
  for (i = 0; i < orders.length; i++) {
    if (orders[i].id == id) {
      var hotels = orders[i].hotels;
      console.log(hotels);
      for (j in hotels) {
        let a = `
          <tr>
              <td>${hotels[j].nameRoom}</td>
              <td>${hotels[j].dateIn}</td>
              <td>${hotels[j].dateOut}</td>
              <td>${hotels[j].priceRoom} VNĐ</td> 
          </tr>
          `;
        document.getElementById("myOrders").innerHTML += a;
      }
    }
  }
}
function changeOption(id) {
  var mailMessage = '';
  
  
  var orders = JSON.parse(localStorage.getItem("OrderCompleted")) || [];
  var res = orders;
  let selectBox = document.getElementsByClassName("isActive");
  
  for (var i = 0; i < selectBox.length; i++) {
    if (i == id) {
      var values = selectBox[id][selectBox[id].selectedIndex].value;
    }
    if (values == "true") {
      var messages = "Đặt phòng thành công";
      mailMessage = 'Đặt phòng thành công!';
    }
    if (values == "false") {
      document.getElementById("thongbao").className +=
        "btn btn-danger isActive";
      var messages = "Đang chờ xử lý";
      mailMessage = 'Phòng đã bị huỷ!';
    }
  }
  for (i = 0; i < res.length; i++) {
    if (res[i].id == id) {
      var hotels = res[i].hotels;
      res[i].id = orders[i].id;
      res[i].nameCustomer = orders[i].nameCustomer;
      res[i].name = orders[i].name;
      res[i].email = orders[i].email;
      res[i].diachi = orders[i].diachi;
      res[i].sdt = orders[i].sdt;
      res[i].hotels = hotels;
      res[i].total = orders[i].total;
      res[i].idCustomer = orders[i].idCustomer;
      res[i].idRoom = orders[i].idRoom;
      res[i].priceRoom = orders[i].priceRoom;
      res[i].isActive = values;
      res[i].messages = messages;

        var ressss = `
      <table class="table" name='tab'>
      <thead>
          <tr class="thead-dark">
            <th scope="col">Tên phòng</th>
            <th scope="col">Ngày đặt</th>
            <th scope="col">Ngày trả</th>
            <th scope="col">Giá phòng</th>
          </tr>
          
      </tr>
      </thead>
      <tbody id="tab">
      `;
      for (j in res[i].hotels) {
  
        let ii =j;
        ii++;
        var row = "<tr class='table-success'>";
        row += "<td>" + ii + "</td>";
        row += "<td>" + res[i].hotels[j].nameRoom + "</td>";
        row += "<td>" + res[i].hotels[j].dateIn + "</td>";
        row += "<td>" + res[i].hotels[j].dateOut + "</td>";
        row += "<td>" + res[i].hotels[j].priceRoom+" VNĐ" + "</td>";
        row += "</tr>";
        ressss   += row;
      }
     
      ressss += '</tbody></table>';
      var hmtl = '<div class="modal-content">' + ressss + '<div>'
      
      let message = `
  <h5>Thông tin đơn đặt gồm</h5>
  <ul>
    <li>Tên người đặt: ${res[i].name}</li>
    <li>SĐT: ${res[i].sdt}</li>
    <li>Email: ${res[i].email}</li>
    <li>Địa chỉ: ${res[i].diachi}</li>
    <li>Danh sách phòng: ${hmtl}</li>
    <li>Tổng tiền: ${res[i].total} VNĐ</li>
  </ul>
  `;
      var mail = {
        SecureToken: "74c01be1-b851-4b5f-9bcf-ab45e9b7f05d",
        Host: "smtp.gmail.com",
        Username: "kienquat2005@gmail.com",
        Password: "Nguyenvankien",
        To: orders[i].email,
        From: "kienquat2005@gmail.com",
        Subject: mailMessage,
        Body:  message
    }
    }
   
  }
  localStorage.setItem("OrderCompleted", JSON.stringify(res));
  Email.send(mail).then(
    message => alert(message)
  );
  loadOrder();
}

function deletesp(id) {
  var r = confirm("Bạn có chắc muốn xoá người đơn hàng này?");
  if (r === true) {
    var orders = JSON.parse(localStorage.getItem("OrderCompleted")) || [];
    order = orders;
    order.splice(id, 1);
    localStorage.setItem("OrderCompleted", JSON.stringify(order));
    show();
  } else {
    window.location.href = "adminOrder.html";
  }
}

function sendEmail() {
  
}

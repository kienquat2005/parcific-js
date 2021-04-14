function parseDate(str) {
  var mdy = str.split("-");
  return new Date(mdy[1], mdy[0] - 1, mdy[2]);
}

function datediff(first, second) {
  return Math.round((second - first) / (1000 * 60 * 60 * 24));
}

function onloadcheckout() {
  var cart = JSON.parse(localStorage.getItem("cart")) || [];
  var customer = JSON.parse(localStorage.getItem("customer")) || [];
  var user = JSON.parse(localStorage.getItem("users")) || [];
 
  for (i in user) {
    if (user[i].id == customer[0].id) {
      let html = `<div class="form-group">
            <span>Tên: ${customer[0].user}</span>
          </div>
          <div class="form-group">
            <span>SĐT: ${user[i].phone}</span>
          </div>
          <div class="form-group">
            <span>Email: ${user[i].email}</span>
          </div>
          <div class="form-group">
            <span>Địa chỉ: ${user[i].address}</span>
          </div>
          <table class="table table-bordered">
            <thead >
              <tr>
                <th scope="col">Tên phòng</th>
                <th scope="col">Ngày đặt</th>
                <th scope="col">Ngày trả</th>
                <th scope="col">Thành tiền</th>
              </tr>
            </thead>
            <tbody id="table">  
            
            </tbody>
            <tfoot>
              <tr id="total">
            
                
              </tr>
            </tfoot>
          </table>
         
          <div class="form-group">
            <button onclick="completed()" class="btn btn-primary py-3 px-5">Hoàn tất</button>
          </div>`;
      document.getElementById("checkoutcompleted").innerHTML = html;
    }
  }
  var total = 0;
  for (j in cart) {
    var date = datediff(parseDate(cart[j].dateIn), parseDate(cart[j].dateOut));
    total += parseFloat(date * cart[j].priceRoom);
    let table = `
    <tr>
        <td>${cart[j].nameRoom}</td>
        <td>${cart[j].dateIn}</td>
        <td>${cart[j].dateOut}</td>
        <td>${cart[j].priceRoom} VNĐ</td> 
    </tr>
  `;
    document.getElementById("table").innerHTML += table;
    
  }
    var htmlTotal = `

    <td colspan="4" style="text-align: right">Tổng tiền:  ${total} VNĐ</td>
    `;
  document.getElementById("total").innerHTML = htmlTotal;
}

var OrderComplete;
function completed() {
  var order = JSON.parse(localStorage.getItem("OrderCompleted")) || [];
  var cart = JSON.parse(localStorage.getItem("cart")) || [];
  var customer = JSON.parse(localStorage.getItem("customer")) || [];
  var user = JSON.parse(localStorage.getItem("users")) || [];
  var total = 0;
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
  for (h in cart) {
    var date = datediff(parseDate(cart[h].dateIn), parseDate(cart[h].dateOut));
    total += parseFloat(date * cart[h].priceRoom);
      let ii =j;
      ii++;
      var row = "<tr class='table-success'>";
      row += "<td>" + ii + "</td>";
      row += "<td>" + cart[h].nameRoom + "</td>";
      row += "<td>" + cart[h].dateIn + "</td>";
      row += "<td>" + cart[h].dateOut + "</td>";
      row += "<td>" + cart[h].priceRoom+" VNĐ" + "</td>";
      row += "</tr>";
      ressss   += row;
    }
    ressss += '</tbody></table>';
    var hmtl = '<div class="modal-content">' + ressss + '<div>'

  
  
  for (i in user) {
    if (user[i].id == customer[0].id) {
      for (j = 0; j <= order.length; j++) {
        OrderComplete = {
          id: j,
          idCustomer: user[i].id,
          nameCustomer: user[i].username,
          name: user[i].name,
          sdt: user[i].phone,
          email: user[i].email,
          diachi: user[i].address,
          hotels: cart,
          total: total,
          messages: "Đang chờ xử lý",
          isActive: false,
        };
        var mail = {
          SecureToken: "74c01be1-b851-4b5f-9bcf-ab45e9b7f05d",
          Host: "smtp.gmail.com",
          Username: "kienquat2005@gmail.com",
          Password: "Nguyenvankien",
          To: user[i].email,
          From: "kienquat2005@gmail.com",
          Subject: "Cảm ơn bạn đã đặt phòng của khách sạn chúng tôi!",
          Body: hmtl  
      }
      }
    }
  
}
  order.push(OrderComplete);
  localStorage.setItem("OrderCompleted", JSON.stringify(order));
  Email.send(mail).then(
    message => alert(message)
  );
  alert("Đặt phòng thành công! Chúng tôi sẽ sớm liên hệ với bạn, xin cảm ơn");
  localStorage.removeItem("cart");
  window.location.href = "index.html";
}

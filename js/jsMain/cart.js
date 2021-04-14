
function parseDate(str) {
    var mdy = str.split("-");
    return new Date(mdy[1], mdy[0] - 1, mdy[2]);
  }
  
  function datediff(first, second) {
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
  }
  
  function loadCart() {
    var roomdetail = JSON.parse(localStorage.getItem("roomdetail")) || [];
    var customer = JSON.parse(localStorage.getItem("customer")) || [];
    var cart = JSON.parse(localStorage.getItem("cart")) || [];
    var user = JSON.parse(localStorage.getItem("users")) || [];
    var date = datediff(parseDate(cart[0].dateIn), parseDate(cart[0].dateOut));
    var total = parseFloat(date * roomdetail[0].price);
    for (i in user) {
      if (user[i].id == customer[0].id) {
        let html = `<div class="row no-gutters">
              <div class="col-lg d-flex">
                <div class="form-group p-4">
                  <label for="#">Tên</label>
                  <div class="form-field">
                    <div class="icon"><span class="fa fa-user"></span></div>
                    <span class="form-control">${customer[0].user}</span>
                  </div>
                </div>
              </div>
              <div class="col-lg d-flex">
                <div class="form-group p-4">
                  <label for="#">Địa chỉ</label>
                  <div class="form-field">
                    <div class="icon"><span class="fa fa-map-marker"></span></div>
                    <span class="form-control">${user[i].address}</span>
                  </div>
                </div>
              </div>
             
            </div>
              
            <div class="row no-gutters">
          
                <div class="col-lg d-flex">
                  <div class="form-group p-4">
                    <label for="#">Số điện thoại</label>
                    <div class="form-field">
                      <div class="icon"><span class="fa fa-phone"></span></div>
                      <span class="form-control">${user[i].phone}</span>
                    </div>
                  </div>
                </div>
                <div class="col-lg d-flex">
                  <div class="form-group p-4">
                    <label for="#">Email</label>
                    <div class="form-field">
                      <div class="icon"><span class="fa fa-envelope-square"></span></div>
                      <span class="form-control">${user[i].email}</span>
                    </div>
                  </div>
                </div>
               
              </div>
              <div class="row no-gutters">
          
                <div class="col-lg d-flex">
                  <div class="form-group p-4">
                    <label for="#">Ngày nhận</label>
                    <div class="form-field">
                      <div class="icon"><span class="fa fa-calendar"></span></div>
                      <input type="text" class="form-control"  id="dayin" value="${cart[0].dateIn}"></input>
                    </div>
                  </div>
                </div>
                <div class="col-lg d-flex">
                  <div class="form-group p-4">
                    <label for="#">Ngày trả</label>
                    <div class="form-field">
                      <div class="icon"><span class="fa fa-calendar"></span></div>
                      <input type="text" class="form-control"  id="dayout" value="${cart[0].dateOut}"></input>
                    </div>
                  </div>
                </div>
               
              </div>
              <div class="row no-gutters">
          
                <div class="col-lg d-flex">
                  <div class="form-group p-4">
                    <label for="#">Tên phòng</label>
                    <div class="form-field">
                      <div class="icon"><span class="fa fa-home"></span></div>
                      <span class="form-control">${roomdetail[0].name}</span>
                    </div>
                  </div>
                </div>
                <div class="col-lg d-flex">
                  <div class="form-group p-4">
                    <label for="#">Thành tiền</label>
                    <div class="form-field">
                      <div class="icon"><span class="fa fa-dollar"></span></div>
                      <span class="form-control">${total} VNĐ</span>
                    </div>
                  </div>
                </div>
              </div>
            <div class="row no-gutters">
              <div class="col-lg d-flex">
                <div class="form-group d-flex w-100 border-0">
                  <div class="form-field w-100 align-items-center d-flex" style="height: 50px;">
                    
                    <input type="button" onclick="tieptuc()" value="Tiếp tục đặt phòng" class="align-self-stretch form-control btn btn-success">
                    <input type="button" onclick="savedata()" value="Thanh toán" class="align-self-stretch form-control btn btn-primary">
                  </div>
                </div>
              </div>
            </div>`;
        document.getElementById("cartdetail").innerHTML = html;
      }
    }
  }
  function savedata() {
    window.location.href = "checkout.html";
  }
  function tieptuc() {
    window.location.href = "hotel.html";
  }
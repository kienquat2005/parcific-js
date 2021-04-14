
  
function clickdatphong() {
    document.querySelector("#frmDatPhong").style.display = "block";
    document
      .getElementById("btnDatPhong")
      .setAttribute("style", "display: none !important");
  }

  function loadDetail() {
    var roomdetail = JSON.parse(localStorage.getItem("roomdetail")) || [];
    document.getElementById("h1name").innerHTML = roomdetail[0].name;
    let html = `<h2 class="mb-3">#1. Tổng quan về phòng</h2>
      <p>${roomdetail[0].detail}</p>
      <p>
        <img src="${roomdetail[0].img}" alt="" class="img-fluid">
      </p>
      <p>Với 2 phòng tắm đầy đủ tiện nghi cùng nột thất sang trọng lịch sự</p>
      <p>
        <img src="images/about.jpg" alt="" class="img-fluid">
        <img src="images/about.jpg" alt="" class="img-fluid">
      </p>
  
      <div class="form-group d-flex w-100 border-0" id="btnDatPhong">
        <div class="form-field w-100 align-items-center d-flex">
          <a onclick='clickdatphong()'  class="align-self-stretch form-control btn btn-primary">Đặt phòng</a>
        </div>
      </div>
  
      <form class="search-property-1" id="frmDatPhong">
        <div class="row no-gutters">
          <div class="col-lg d-flex">
            <div class="form-group p-4">
              <label for="#">Ngày nhận</label>
              <div class="form-field">
                <div class="icon"><span class="fa fa-calendar"></span></div>
                <input type="date" class="form-control checkin_date" id="in-date" placeholder="Check In Date">
              </div>
            </div>
          </div>
          <div class="col-lg d-flex">
            <div class="form-group p-4">
              <label for="#">Ngày trả</label>
              <div class="form-field">
                <div class="icon"><span class="fa fa-calendar"></span></div>
                <input type="date" class="form-control checkout_date" id="out-date" placeholder="Check Out Date">
              </div>
            </div>
          </div>
          <div class="col-lg d-flex">
            <div class="form-group d-flex w-100 border-0">
              <div class="form-field w-100 align-items-center d-flex">
                <input type="button" onclick="checkout()" value="Đặt ngay" class="align-self-stretch form-control btn btn-primary">
              </div>
            </div>
          </div>
        </div>
      </form>`;
    document.getElementById("detail").innerHTML = html;
  }

  function parseDate(str) {
    var mdy = str.split("-");
    return new Date(mdy[1], mdy[0] - 1, mdy[2]);
  }
  
  function datediff(first, second) {
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
  }
var cartNumber;
function checkout() {
  var cart = JSON.parse(localStorage.getItem("cart")) || [];
  var roomdetail = JSON.parse(localStorage.getItem("roomdetail")) || [];
  var customer = JSON.parse(localStorage.getItem("customer")) || [];
  if (customer.length == 0) {
    alert("Vui lòng đăng nhập để đặt phòng!");
    window.location.href = "login.html";
  }
  for(var i = 0; i <= cart.length; i++) {
    cartNumber = 
      {
        idRoom: roomdetail[0].id,
        idCustomer: customer[0].id,
        nameRoom : roomdetail[0].name,
        priceRoom: roomdetail[0].price,
        dateIn: document.getElementById("in-date").value ,
        dateOut: document.getElementById("out-date").value
      }
  }
  cart.push(cartNumber);
  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.href = "cart.html";
}
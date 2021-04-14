
  function parseDate(str) {
    var mdy = str.split("-");
    return new Date(mdy[1], mdy[0] - 1, mdy[2]);
  }
  function datediff(first, second) {
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
  }
function loadMyOrder() {
    var orders = JSON.parse(localStorage.getItem("OrderCompleted")) || [];
   
    var customer = JSON.parse(localStorage.getItem("customer")) || [];
    for (i = 0; i < orders.length; i++) {
      if (customer[0].id == orders[i].idCustomer) {
       
        let html = ` <div class="col-md-6 order-md-last d-flex" >
         <div  class="bg-light p-5 contact-form" >
         <div class="form-group">
              <span>Tên: ${orders[i].nameCustomer}</span>
            </div>
            <div class="form-group">
              <span>SĐT: ${orders[i].sdt}</span>
            </div>
            <div class="form-group">
              <span>Email: ${orders[i].email}</span>
            </div>
            <div class="form-group">
              <span>Địa chỉ: ${orders[i].diachi}</span>
            </div>
            <div class="form-group">
              <span>Tổng tiền: ${orders[i].total} VNĐ</span>
            </div>
            <div class="form-group">
            <button type="button" class="btn btn-success py-3 px-5 " data-toggle="modal" onclick="getData(${orders[i].id})" data-target="#myModal">Xem chi tiết</button>
              <button id="lblThongbao" class="btn btn-primary py-3 px-5 ">${orders[i].messages}</button>
            </div>
            </div>
            </div>`;
        document.getElementById("checkoutcompleted").innerHTML += html;
        
      }
    }
}
function getData(id){
  var orders = JSON.parse(localStorage.getItem("OrderCompleted")) || [];
   
    var customer = JSON.parse(localStorage.getItem("customer")) || [];
    let table  = `
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
    document.getElementById('divTable').innerHTML = table;
  for (i = 0; i < orders.length; i++) {
    if (customer[0].id == orders[i].idCustomer) {
      if(orders[i].id == id){
        var hotels = orders[i].hotels;
        console.log(hotels);
        for(j in hotels) {
          let a = `
          <tr>
              <td>${hotels[j].nameRoom}</td>
              <td>${hotels[j].dateIn}</td>
              <td>${hotels[j].dateOut}</td>
              <td>${hotels[j].priceRoom} VNĐ</td> 
          </tr>
          `;
          document.getElementById('myOrders').innerHTML += a;
        }
      }
      
    }
  }
  
}
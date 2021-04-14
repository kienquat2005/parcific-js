
var roomdetail;
function onloadHotels() {
  var hotels = JSON.parse(localStorage.getItem("hotels")) || [];
  for (i in hotels) {
    let hotel = `
        <div class="col-md-4 ftco-animate fadeInUp ftco-animated">
          <div class="project-wrap hotel">
            <a
            href="hotel-single.html"
            onclick="getdetail(${hotels[i].id})"
              class="img"
              style="background-image: url(${hotels[i].img});"
            >
              <span class="price">${hotels[i].price} VNĐ/Ngày</span>
            </a>
            <div class="text p-4">
              <p class="star mb-2">
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
              </p>
              <h3>
                <a onclick="getdetail(${hotels[i].id})" href="hotel-single.html">${hotels[i].name}</a>
              </h3>
              <p class="location">
                <span class="fa fa-map-marker"></span> ${hotels[i].note}
              </p>
              <ul>
                <li>
                  <span class="flaticon-shower"></span>1
                </li>
                <li>
                  <span class="flaticon-king-size"></span>2
                </li>
                <li>
                  <span class="flaticon-mountains"></span>Hướng núi
                </li>
              </ul>
            </div>
          </div>
        </div>
      `;

    document.getElementById("hotels").innerHTML += hotel;
  }
}

function getdetail(id) {
  var hotels = JSON.parse(localStorage.getItem("hotels")) || [];
  for (i in hotels) {
    if (hotels[i].id == id) {
      roomdetail = [
        {
          id: hotels[i].id,
          name: hotels[i].name,
          price: hotels[i].price,
          img: hotels[i].img,
          note: hotels[i].note,
          detail: hotels[i].detail,
        },
      ];
    }
  }
  localStorage.setItem("roomdetail", JSON.stringify(roomdetail));
}

var cart;
function checkout() {
  var roomdetail = JSON.parse(localStorage.getItem("roomdetail")) || [];
  var customer = JSON.parse(localStorage.getItem("customer")) || [];
  if (customer.length == 0) {
    alert("Vui lòng đăng nhập để đặt phòng!");
    window.location.href = "login.html";
  }
  cart = [
    {
      idRoom: roomdetail[0].id,
      idCustomer: customer[0].id,
      dateIn: document.getElementById("in-date").value,
      dateOut: document.getElementById("out-date").value,
    },
  ];
  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.href = "cart.html";
}

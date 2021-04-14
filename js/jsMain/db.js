 
var hotels = [
  {
    "id": "0",
    "name": "DELUXE ROOM",
    "price": 2850000,
    "img": "images/hotel-resto-1.jpg",
    "note": "tầng 1-2: Pacific- Đà Nắng",
    "detail":
      "Hiện đại và tiện nghi, với diện tích từ 34 m2, tất cả các phòng đều có ban công và tầm nhìn toàn cảnh ra thành phố Đà Nẳng",
  },
  {
    "id": "1",
    "name": "PREMIUM DELUXE",
    "price": 3350000,
    "img": "images/hotel-resto-2.jpg",
    "note": "tầng 3-4: Pacific- Đà Nắng",
    "detail":
      "Với diện tích rộng 38m2, phòng Premium Deluxe mang tới không gian tiện nghi cùng tầm nhìn rộng lớn ra hồ Đầm Vạc",
  },
  {
    "id": "2",
    "name": "FAMILY ROOM",
    "price": 10000000,
    "img": "images/hotel-resto-3.jpg",
    "note": "tầng 5-6: Pacific- Đà Nắng",
    "detail":
      "Sở hữu diện tích lên đến hơn 40m2 và trang thiết bị được bố trí thoải mái, Family Deluxe Room đúng như tên gọi, chính là sự lựa chọn tuyệt vời cho kỳ nghỉ của mọi gia đình",
  },
  {
    "id": "3",
    "name": "JUNIOR SUITE",
    "price": 50000000,
    "img": "images/hotel-resto-4.jpg",
    "note": "tầng 7-8: Pacific- Đà Nắng",
    "detail":
      "Junior Suite sẽ là một trải nghiệm cao cấp với phòng ngủ liền kề phòng khách và không gian phòng tắm lớn cùng ban công rộng và tầm nhìn toản cảnh ra hành phố và hồ Đầm Vạc",
  },
  {
    "id": "4",
    "name": "EXECUTIVE SUITE",
    "price": 15000000,
    "img": "images/hotel-resto-5.jpg",
    "note": "tầng 9-10: Pacific- Đà Nắng",
    "detail":
      "Sang trọng, hiện đại với phòng khách riêng biệt cùng diện tích lên tới 80m2, Executive Suite là sự lựa chọn hoàn hảo cho các chuyến công tác của doanh nhân",
  },
  {
    "id": "5",
    "name": "PRESIDENT SUITE",
    "price": 1000000,
    "img": "images/hotel-resto-6.jpg",
    "note": "tầng 11-12: Pacific- Đà Nắng",
    "detail":
      "Ngắm nhìn toàn bộ vẻ đẹp của thành phố Vĩnh Yên từ tầng cao nhất của khách sạn, trong không gian đẳng cấp lên tới 250m2 tại President Suite",
  },
  {
    id: "6",
    "name": "LUXURY ROOM",
    "price": 20000000,
    "img": "images/hotel-resto-7.jpg",
    "note": "tầng 13-14: Pacific- Đà Nắng",
    "detail":
      "Sở hữu diện tích lên đến hơn 40m2 và trang thiết bị được bố trí thoải mái, Family Deluxe Room đúng như tên gọi, chính là sự lựa chọn tuyệt vời cho kỳ nghỉ của mọi gia đình",
  },
  {
    "id": "7",
    "name": "SPECIAL ROOM",
    "price": 10000000,
    "img": "images/hotel-resto-8.jpg",
    "note": "tầng 15-16: Pacific- Đà Nắng",
    "detail":
      "Ngắm nhìn toàn bộ vẻ đẹp của thành phố Vĩnh Yên từ tầng cao nhất của khách sạn, trong không gian đẳng cấp lên tới 250m2 tại President Suite",
  },
  {
    "id": "8",
    "name": "MANILA ROOM",
    "price": 5500000,
    "img": "images/hotel-resto-1.jpg",
    "note": "tầng thượng: Pacific- Đà Nắng",
    "detail":
      "Với hệ thống mái vòm tự động, giúp quý khách có thể tự mình điều chỉnh theo điều kiện thời tiết. Từ đây có thể quan sát toàn bộ thành phố Đà Nẳng",
  }
];

localStorage.setItem("hotels", JSON.stringify(hotels));

function loadindex() {
  var customer = JSON.parse(localStorage.getItem("customer")) || [];
  if (customer.length > 0) {
    document
      .getElementById("nav-dangnhap")
      .setAttribute("style", "display: none!important");
      document
    .getElementById("ordercompleted")
    .setAttribute("style", "display: block!important");
    document
      .getElementById("nav-dangki")
      .setAttribute("style", "display: none!important");
      
    document.getElementById("user").innerHTML = customer[0].user;
  } else {
    document
    .getElementById("ordercompleted")
    .setAttribute("style", "display: none!important");
    document
      .getElementById("user")
      .setAttribute("style", "display: none!important");
    document
      .getElementById("nav-logout")
      .setAttribute("style", "display: none!important");
  }
}
document.getElementById("nav-logout").addEventListener("click", function () {
  window.location.href = "index.html";
  localStorage.removeItem("customer");
  localStorage.removeItem("cart");
});


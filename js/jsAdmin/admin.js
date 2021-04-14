var admin = JSON.parse(localStorage.getItem("admin")) || [];
document.getElementById('admin').innerHTML = admin.user;

var hotel = JSON.parse(localStorage.getItem("hotels")) || [];
document.getElementById('roomTotal').innerHTML = hotel.length + " phòng";

var users = JSON.parse(localStorage.getItem("users")) || [];
document.getElementById('users').innerHTML = users.length;

var total = JSON.parse(localStorage.getItem("OrderCompleted")) || [];
let sum = 0;
for(i in total) {
    if(total[i].isActive =="true") {
        sum += total[i].total
    }
}
document.getElementById('priceTotal').innerHTML = sum;

var totalOrder = JSON.parse(localStorage.getItem("OrderCompleted")) || [];
document.getElementById('totalOrder').innerHTML = totalOrder.length;
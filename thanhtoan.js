const displayprod = document.querySelector(".offers-item__wrap");
if (displayprod) {
  const travelname = sessionStorage.getItem("travelname");
  const travelprice = sessionStorage.getItem("travelprice");
  const travelidea = sessionStorage.getItem("travelidea");
  const bigimg = sessionStorage.getItem("travelphoto");
  displayprod.querySelector("a.offers-item__name").textContent = travelname;
  displayprod.querySelector("h4.offers-item__price").innerText = travelprice;
  displayprod.querySelector(".offers-item__desc").textContent = travelidea;
  displayprod.querySelector(".bgr-product").src = bigimg;
  console.log(bigimg)
}
// form
function validateForm() {
  var name = document.getElementById('name');
  var email = document.getElementById('email');
  var phone = document.getElementById('phone');
  var tour = document.getElementById('tour');
  var checkin = document.getElementById('checkin');
  var checkout = document.getElementById('checkout');
  var adults = document.getElementById('adults');
  var children = document.getElementById('children');
  var payment = document.getElementById('payment');
  var isValid = true;

  // Kiểm tra từng trường và thêm lớp "error" nếu không hợp lệ
  if (name.value === '') {
    name.classList.add('error');
    isValid = false;
  } else {
    name.classList.remove('error');
    name.classList.add('acp');
  }

  if (email.value === '') {
    email.classList.add('error');
    isValid = false;
  } else {
    email.classList.remove('error');
    email.classList.add('acp');
  }

  if (phone.value === '') {
    phone.classList.add('error');
    isValid = false;
  } else {
    phone.classList.remove('error');
    phone.classList.add('acp');
  }

  if (tour.value === '') {
    tour.classList.add('error');
    isValid = false;
  } else {
    tour.classList.remove('error');
    tour.classList.add('acp');
  }

  if (checkin.value === '') {
    checkin.classList.add('error');
    isValid = false;
  } else {
    checkin.classList.remove('error');
    checkin.classList.add('acp');
  }

  if (checkout.value === '') {
    checkout.classList.add('error');
    isValid = false;
  } else {
    checkout.classList.remove('error');
    checkout.classList.add('acp');
  }

  if (adults.value === '') {
    adults.classList.add('error');
    isValid = false;
  } else {
    adults.classList.remove('error');
    adults.classList.add('acp');
  }

  if (children.value === '') {
    children.classList.add('error');
    isValid = false;
  } else {
    children.classList.remove('error');
    children.classList.add('acp');
  }

  if (payment.value === '') {
    payment.classList.add('error');
    isValid = false;
  } else {
    payment.classList.remove('error');
    payment.classList.add('acp');
  }

  // Nếu thông tin không hợp lệ, ngăn người dùng gửi biểu mẫu
  if (!isValid) {
    event.preventDefault();
  }
}
// menu
function toggleMenu() {
  var menuContent = document.querySelector('.header-nav__menu-content');
  menuContent.classList.toggle('active');
}

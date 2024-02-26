const container = document.querySelector(".container");
const btnSignIn = document.querySelector(".btnSign-in");
const btnSignUp = document.querySelector(".btnSign-up");

btnSignIn.addEventListener("click", () => {
  container.classList.add("active");
});

btnSignUp.addEventListener("click", () => {
  container.classList.remove("active");
});
// account
function signup(event) {
  event.preventDefault();

  var email2 = document.getElementById("email2").value;
  var password2 = document.getElementById("password2").value;

  // Kiểm tra định dạng email của Gmail
  var emailRegex = /^[a-zA-Z0-9._-]+@gmail\.com$/;
  if (!emailRegex.test(email2)) {
    Swal.fire({
      text: "Vui lòng nhập địa chỉ email hợp lệ!",
    });
    return;
  }

  var user = {
    username: email2,
    password: password2,
  };
  var json = JSON.stringify(user);
  localStorage.setItem(email2, json); // Sửa 'username' thành 'email2' để lưu vào localStorage
  Swal.fire({
    text: "Đăng kí thành công",
  });
}

function login(event) {
  event.preventDefault();
  var username = document.getElementById("email1").value;
  var password1 = document.getElementById("password1").value;
  var user = localStorage.getItem(username);
  var data = JSON.parse(user);
  if (user == null) {
    Swal.fire({
      text: "Vui lòng nhập đầy đủ thông tin!",
    });
  } else if (username == data.username && password1 == data.password) {
    window.location.href = "index.html";
  } else {
    Swal.fire({
      text: "Đăng nhập thất bại!",
    });
  }
}

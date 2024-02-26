window.addEventListener("scroll", function () {
  var headerNav = document.querySelector(".header-nav");
  if (window.pageYOffset > 100) {
    // Điều chỉnh giá trị này để thay đổi khi nào thanh header mất đi
    headerNav.classList.add("header-nav--hidden");
  } else {
    headerNav.classList.remove("header-nav--hidden");
  }
});
// link
var acclink = document.querySelector("#account-link");
acclink.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "index2.html";
});
var contract = document.querySelector("#contract");
contract.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "contract.html";
});
var booktour = document.querySelector("#btn-tour");
booktour.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "tour.html";
});
// array
let productTravel = [
  {
    photo: "img/sea0.jpg",
    idea: "Biển Bali là một phần của Đại Tây Dương nằm ở phía tây của đảo Bali, một đảo nằm ở Indonesia. Bali nổi tiếng là một điểm đến du lịch hàng đầu, và bờ biển của đảo này có những bãi biển đẹp và đa dạng.",
    name: "BIỂN BALI",
    price: "80$",
  },
  {
    photo: "img/sea1.jpg",
    idea: "Biển Caribe là một điểm đến du lịch phổ biến, thu hút du khách từ khắp nơi trên thế giới để tận hưởng nắng, biển và các hoạt động vui chơi trong môi trường thiên nhiên tuyệt đẹp.",
    name: "BIỂN CARIBE",
    price: "90$",
  },
  {
    photo: "img/sea2.jpg",
    idea: "Biển El Nido là một điểm đến du lịch nổi tiếng nằm ở tỉnh Palawan, Philippines. El Nido được biết đến với cảnh quan thiên nhiên tuyệt đẹp, các bãi biển tuyệt vời và hệ sinh thái san hô đa dạng.",
    name: "BIỂN El Nido",
    price: "100$",
  },
  {
    photo: "img/sea3.jpg",
    idea: " Bãi biển Boulder's Beach. Bãi biển này nằm ở khu vực Simon's Town, cách Cape Town khoảng 40 km về phía nam. Boulder's Beach được nổi tiếng với đàn chim cánh cụt African penguin sống và sinh sản tại đây.",
    name: "BIỂN Rocks",
    price: "120$",
  },
  {
    photo: "img/sea4.jpg",
    idea: "Biển Maya Bay là một điểm đến nổi tiếng nằm trên hòn đảo Phi Phi Leh, ở tỉnh Krabi, miền nam Thái Lan. Nó nổi tiếng trở thành một địa điểm du lịch hấp dẫn nhờ vẻ đẹp hoang sơ và cảnh quan tuyệt đẹp của nó.",
    name: "BIỂN Maya Bay",
    price: "150$",
  },
  {
    photo: "img/sea5.jpg",
    idea: "Biển Whitehaven là một bãi biển nổi tiếng tại Whitsunday Islands, Queensland, Australia. Điều đặc biệt về bãi biển này là cát của nó được cho là không nhiễm tạp chất và không nóng dưới ánh nắng mặt trời, vì cát chủ yếu là các hạt silica.",
    name: "BIỂN Whitehaven",
    price: "170$",
  },
];
console.log(productTravel);
let displayin4 = productTravel.map((item) => {
  return ` <div class="offers-item__wrap">
  <div class="offers-item__bg" >
  <img src="${item.photo}" alt="" class="bgr-product">
      <a href="" class="offers-item__name">${item.name}</a>
  </div>
  <div class="offers-item__bg" >
      <div class="offers-item__content">
          <h4 class="offers-item__price">${item.price} <span>MỘT ĐÊM</span></h4>
          <div class="offers-item__rating">
            <i class="ti-star"></i>
            <i class="ti-star"></i>
            <i class="ti-star"></i>
            <i class="ti-star"></i>
            <i class="ti-star"></i>
          </div>
          <p class="offers-item__desc">
          ${item.idea}</p>
          <div class="offers-item__action">
              <img src="https://khoatranvn00.github.io/travelix/assets/images/ofi1.webp" alt="" class="offers-item__action-img">
              <img src="https://khoatranvn00.github.io/travelix/assets/images/ofi2.webp" alt="" class="offers-item__action-img">
              <img src="https://khoatranvn00.github.io/travelix/assets/images/ofi3.webp" alt="" class="offers-item__action-img">
              <img src="https://khoatranvn00.github.io/travelix/assets/images/ofi4.webp" alt="" class="offers-item__action-img">
          </div>
      </div>
      
  </div>
</div>`;
});
document.querySelector(".offers-content").innerHTML = displayin4.join("");
// save travel
const proddt = document.querySelectorAll(".offers-item__wrap");
proddt.forEach((item, index) => {
  item.addEventListener("click", function () {
    const travelname = item.querySelector(".offers-item__name").textContent;
    const travelidea = item.querySelector(".offers-item__desc").textContent;
    const travelprice = item.querySelector(".offers-item__price").textContent;
    sessionStorage.setItem("travelname", travelname);
    sessionStorage.setItem("travelidea", travelidea);
    sessionStorage.setItem("travelprice", travelprice);
    sessionStorage.setItem("travelphoto", productTravel[index].photo);
    window.location.href = "thanhtoan.html";
  });
});
// menu
function toggleMenu() {
  var menuContent = document.querySelector(".header-nav__menu-content");
  menuContent.classList.toggle("active");
}
// amination
document.addEventListener("DOMContentLoaded", function () {
  var tourItems = document.querySelectorAll(".tour-item");

  function checkTourItems() {
    for (var i = 0; i < tourItems.length; i++) {
      var tourItem = tourItems[i];
      var positionFromTop = tourItem.getBoundingClientRect().top;

      if (positionFromTop - window.innerHeight <= 0) {
        tourItem.classList.add("show");
      }
    }
  }

  checkTourItems();

  window.addEventListener("scroll", function () {
    checkTourItems();
  });
});
// amination2
document.addEventListener("DOMContentLoaded", function () {
  var offersContent = document.querySelector(".offers-content");

  function checkOffersContent() {
    var positionFromTop = offersContent.getBoundingClientRect().top;

    if (positionFromTop - window.innerHeight <= 0) {
      offersContent.classList.add("show");
    }
  }

  checkOffersContent();

  window.addEventListener("scroll", function () {
    checkOffersContent();
  });
});

// amination 3
document.addEventListener("DOMContentLoaded", function () {
  var packageContainer = document.querySelector(".package-container");

  function checkPackageContainer() {
    var positionFromLeft = packageContainer.getBoundingClientRect().left;

    if (positionFromLeft - window.innerWidth <= 0) {
      packageContainer.classList.add("show");
    }
  }

  checkPackageContainer();

  window.addEventListener("scroll", function () {
    checkPackageContainer();
  });
});
// scroll
document.getElementById("sale").addEventListener("click", function (event) {
  event.preventDefault();
  window.scrollTo(0, document.querySelector(".offers").offsetTop);
});
document.getElementById("product").addEventListener("click", function (event) {
  event.preventDefault();
  window.scrollTo(
    0,
    document.getElementById("content-heading__video").offsetTop
  );
});
document.getElementById("home").addEventListener("click", function (event) {
  event.preventDefault();
  window.scrollTo(0, 0);
});
// darkmode
function toggleDarkMode() {
  var body = document.body;
  body.classList.toggle("dark-mode");
  var isdarkmode = body.classList.contains("dark-mode");
  sessionStorage.setItem("darkMode", isdarkmode);
}
var darklay = sessionStorage.getItem("darkMode");
if (darklay === "true") {
  var body = document.body;
  body.classList.add("dark-mode");
} else if (darklay === "false") {
  var body = document.body;
  body.classList.remove("dark-mode");
}
// dragdrop
window.onload = function () {
  var dragOverlay = document.getElementById("dragOverlay");
  var hasDropped = sessionStorage.getItem("hasDropped");

  if (!hasDropped) {
    dragOverlay.style.display = "block";
  } else {
    dragOverlay.style.display = "none";
    var savedImageUrl = sessionStorage.getItem("imageURL");
    if (savedImageUrl) {
      // Hiển thị ảnh từ Local Storage
      var dropZone = document.getElementById("dropZone");
      var imgElement = document.createElement("img");
      imgElement.src = savedImageUrl;
      dropZone.appendChild(imgElement);
    }
  }
};

function dragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.src);
}

function dragOver(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  var imageUrl = event.dataTransfer.getData("text/plain");
  var dropZone = document.getElementById("dropZone");
  var imgElement = document.createElement("img");
  imgElement.src = imageUrl;
  dropZone.appendChild(imgElement);

  // Lưu đường dẫn ảnh vào Local Storage và đánh dấu là đã thực hiện kéo và thả
  sessionStorage.setItem("imageURL", imageUrl);
  sessionStorage.setItem("hasDropped", true);

  var dragOverlay = document.getElementById("dragOverlay");
  dragOverlay.style.display = "none";
  alert("Truy cập thành công!");
}
// map
function showmap(event) {
  var mapelement = document.getElementById("map");
  mapelement.style.display = "block";
  initMap();
  event.preventDefault();
}
function initMap() {
  var myLocation = { lat: 10.829384, lng: 106.694321 };

  var map = new google.maps.Map(document.getElementById("map"), {
    center: myLocation,
    zoom: 15,
  });

  var marker = new google.maps.Marker({
    position: myLocation,
    map: map,
    title: "Vị trí của tôi",
  });
}

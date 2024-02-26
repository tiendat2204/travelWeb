var productTravel = [
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

  // Lấy phần tử để hiển thị danh sách tour
  var tourList = document.getElementById("tour-list");

  // Tạo phần tử HTML cho mỗi tour du lịch
  productTravel.forEach(function(tour) {
    var tourElement = document.createElement('div');
    tourElement.classList.add('tour');

    var tourPhotoElement = document.createElement('img');
    tourPhotoElement.src = tour.photo;
    tourPhotoElement.alt = tour.name;
    tourPhotoElement.style.width = "200px";

    var tourNameElement = document.createElement('h3');
    tourNameElement.textContent = tour.name;

    var tourIdeaElement = document.createElement('p');
    tourIdeaElement.textContent = tour.idea;

    var tourPriceElement = document.createElement('p');
    tourPriceElement.textContent = 'Giá: ' + tour.price;

    var btnElement = document.createElement('a');
    btnElement.href = "#"; // Thay thế bằng URL xử lý đặt tour
    btnElement.textContent = "Đặt tour";
    btnElement.classList.add("btn-book");

    tourElement.appendChild(tourPhotoElement);
    tourElement.appendChild(tourNameElement);
    tourElement.appendChild(tourIdeaElement);
    tourElement.appendChild(tourPriceElement);
    tourElement.appendChild(btnElement);

    tourList.appendChild(tourElement);
  });
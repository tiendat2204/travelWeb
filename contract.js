// Các câu hỏi và câu trả lời tự động
var faq = [
    {
      question: 'Xin chào',
      answer: 'Chào bạn! Bạn cần hỗ trợ gì hôm nay?'
    },
    {
      question: 'Làm thế nào để đặt một đơn hàng?',
      answer: 'Để đặt một đơn hàng, bạn có thể truy cập trang web của chúng tôi và làm theo các bước hướng dẫn trên trang đặt hàng.'
    },
    {
      question: 'Có hỗ trợ khách hàng không?',
      answer: 'Tất nhiên! Chúng tôi có đội ngũ hỗ trợ khách hàng 24/7 sẵn sàng giúp bạn giải đáp mọi thắc mắc.'
    },
   
  ];
  
  // Lấy các phần tử HTML cần thiết
  var contactForm = document.getElementById('contact-form');
  var questionContainer = document.getElementById('question-container');
  
  // Xử lý sự kiện khi gửi biểu mẫu
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn chuyển tiếp mặc định
  
    // Lấy giá trị từ biểu mẫu
    var questionInput = document.getElementById('question');
    var question = questionInput.value;
  
    // Tạo một phần tử câu hỏi
    var questionElement = document.createElement('div');
    questionElement.classList.add('question');
    questionElement.innerHTML = '<p><strong>Bạn:</strong> ' + question + '</p>';
  
    // Thêm câu hỏi vào danh sách câu hỏi
    questionContainer.appendChild(questionElement);
  
    // Xử lý câu trả lời tự động
    var answer = getAutoResponse(question);
  
    // Tạo một phần tử câu trả lời
    var answerElement = document.createElement('div');
    answerElement.classList.add('question');
    answerElement.innerHTML = '<p><strong>Bot:</strong> ' + answer + '</p>';
  
    // Thêm câu trả lời vào danh sách câu hỏi
    questionContainer.appendChild(answerElement);
  
    // Đặt lại giá trị của ô nhập câu hỏi
    questionInput.value = '';
  });
  
  // Hàm tìm câu trả lời tự động dựa trên câu hỏi
  function getAutoResponse(question) {
    for (var i = 0; i < faq.length; i++) {
      var faqItem = faq[i];
      var faqQuestion = faqItem.question.toLowerCase();
  
      if (faqQuestion === question.toLowerCase()) {
        return faqItem.answer;
      }
    }
  
    return 'Xin lỗi, tôi không thể hiểu câu hỏi của bạn. Vui lòng liên hệ với đội ngũ hỗ trợ khách hàng của chúng tôi.';
  }
// bgrauto
var colors = ["#fa9e1b", "#8d4fff"]; // Danh sách màu sắc để thay đổi
var currentIndex = 0;

function changeBackgroundGradient() {
  var background = document.getElementById("brg");
  background.style.backgroundImage = "linear-gradient(to right, " + colors[currentIndex] + ", " + colors[(currentIndex + 1) % colors.length] + ")";
  currentIndex = (currentIndex + 1) % colors.length;
}

setInterval(changeBackgroundGradient, 1000); // Thay đổi gradient mỗi 5 giây (5000ms)

  
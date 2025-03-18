// Xử lý form liên hệ
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Ngăn form gửi đi

    // Lấy giá trị từ form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Hiển thị thông báo
    alert(`Cảm ơn bạn, ${name}! Tin nhắn của bạn đã được gửi. Tôi sẽ liên hệ lại qua email: ${email}.`);

    // Reset form
    document.getElementById('contact-form').reset();
});

// Hiệu ứng scroll mượt mà khi nhấp vào các liên kết trong menu
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Ngăn hành vi mặc định
        const targetId = this.getAttribute('href'); // Lấy ID của phần cần scroll đến
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth' // Scroll mượt mà
        });
    });
});
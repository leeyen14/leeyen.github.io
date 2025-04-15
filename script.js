// Hàm kiểm tra xem phần tử có trong viewport hay không
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Hàm kích hoạt hiệu ứng fade-in
function activateFadeIn() {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('visible');
        }
    });
}

// Kích hoạt hiệu ứng khi trang được tải
document.addEventListener('DOMContentLoaded', activateFadeIn);

// Kích hoạt hiệu ứng khi người dùng scroll
window.addEventListener('scroll', activateFadeIn);

// Xử lý click vào dự án để chuyển hướng đến trang chi tiết
document.querySelectorAll('.project-item').forEach(project => {
    project.addEventListener('click', function () {
        const projectId = this.getAttribute('data-project');
        window.location.href = `project-detail.html?id=${projectId}`;
    });
});

// Xử lý sự kiện click vào các tab
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Ngăn hành vi mặc định

        // Xóa lớp active từ tất cả các tab
        document.querySelectorAll('nav ul li a').forEach(tab => {
            tab.classList.remove('active');
        });

        // Thêm lớp active vào tab được click
        this.classList.add('active');

        // Lấy ID của phần cần scroll đến
        const targetId = this.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);

        // Scroll mượt mà đến phần tương ứng
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Tự động thêm lớp active khi scroll đến phần tương ứng
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
            const targetId = section.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-target') === targetId) {
                    link.classList.add('active');
                }
            });
        }
    });
});
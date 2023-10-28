function checkReigesterForm() {
  var fullName = document.getElementById('fullname').value;
  var phone = document.getElementById('phone').value;
  var date = document.getElementById('date').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  if (fullName.trim() === '') {
    alert('Vui lòng nhập họ tên');
    return false;
  }

  if (phone.trim() === '') {
    alert('Vui lòng nhập số điện thoại');
    return false;
  }

  var phoneFormat = /^\d{10}$/;
  if (!phone.match(phoneFormat)) {
    alert('Vui lòng nhập số điện thoại hợp lệ (10 chữ số)');
    return false;
  }

  if (date.trim() === '') {
    alert('Vui lòng nhập ngày sinh');
    return false;
  }

  if (email.trim() === '') {
    alert('Vui lòng nhập địa chỉ email');
    return false;
  }

  var emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.match(emailFormat)) {
    alert('Vui lòng nhập đúng định dạng địa chỉ email');
    return false;
  }

  if (password.trim() === '') {
    alert('Vui lòng nhập mật khẩu');
    return false;
  }

  if (Array.from(password).length < 6) {
    alert('Mật khẩu phải chứa ít nhất 6 ký tự');
    return false;
  }

  alert('Đăng ký thành công!');
  return true;
}

function checkLoginForm() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  if (email.trim() === '') {
    alert('Vui lòng nhập địa chỉ email');
    return false;
  }

  var emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.match(emailFormat)) {
    alert('Vui lòng nhập đúng định dạng địa chỉ email');
    return false;
  }

  if (password.trim() === '') {
    alert('Vui lòng nhập mật khẩu');
    return false;
  }

  alert('Đăng nhập thành công!');
  return true;
}

function addToCart() {
  alert("Sản phẩm đã được thêm vào giỏ hàng!");
}

function contactForm() {
  var message = document.getElementById('message').value;
  if (message.trim() === '') {
    alert("Vui lòng nhập lời nhắn!");
    return false;
  }
  alert("Gửi lời nhắn thành công, vui lòng đợi phản hồi!");
}

function payment() {
  alert("Xác nhận mua hàng thành công!");
}

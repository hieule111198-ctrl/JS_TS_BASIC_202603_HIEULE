let score = 95;
if (score >= 50) {
    console.log(" Đậu ");
}else if (score >= 90){
    console.log("Xuất Sắc");
}
// Ứng dụng trong API testing
let statusCode = 404;
if (statusCode === 200){
    console.log("API hoạt đôngnj OK");
    
} else if (statusCode === 400){
    console.log("Lỗi dữ liệu gửi lên - Bad request");
} else if (statusCode === 404) {
    console.log("Lỗi ko tìm thấy đường dẫn Not found");
} else {
    // dành cho tất cả các TH còn lại - 503, 502
    console.log("Server gặp lỗi");
    
}

// BT nhỏ
let loginStatus = "locked";
// 1. Nếu loginStatus === 'success' => In Test passed: login thành công
// 2. Nếu loginStatus === 'locked'  => Tài khoản bị khoá
// 3. Các TH còn lại => In test falied: login thất bại

if (loginStatus === 'success') {
    console.log("Test passed: login thành công");
}else if (loginStatus === 'locked') {
    console.log("Tài khoản bị khoá");
} else {
    console.log("Test failed: login thất bại");   
}

// Nguồn gốc Toán tử 3 ngôi - mình sẽ trả kết quả result dựa trên score2
let score2 = 95;
let result;

if (score >= 90) {
    result = "XS";
}else if (score >= 50){
    result = "Đạt";
}else{
    result = "Tèo";
}
console.log(result); // = XS, vì gọi biến bằng let thì có thể gán giá trị cho nó được bằng cachs này

let diem = 8;
// let trangThai;
// if (diem >= 5){
//     console.log("PASS");
    
// }else{
//     console.log("FAIL");   
// }

// =>>> Toán tử 3 ngôi
let trangThai = diem >= 5 ? "PASS" : "FAIL";
console.log(trangThai);

// Gán text
let isSaving = true;
let buttonText = isSaving ? "Đang lưu" : "Lưu";
console.log(buttonText);

// chọn config
let isCI = false;
let reportMode = isCI ? "html" : "list"

// Hiển thị nhãn đơn giản
let hasBug = true;
let statusLabel = hasBug ? "Có bug" : "Ổn";

//Toán tử 3 ngôi lồng nhau - HẠN CHẾ DÙNG - Khó debug - áp dụng ví dụ về score ở trên:
let result2 = score2 >= 90 ? "XS" : score2 >= 50 ? "ĐẬU" : "TÈO" 

// Dùng if/else: Trong mỗi nhánh có nhiều hành động
// let isLoginSuccess = true;
// if (isLoginSuccess){
//     console.log("Pass");
//     takeScreenShot();
//     goToDashBoard();
// }else{
//     console.log("Fail");
//     takeScreenShot();
// }

// BT nhỏ
let failedTests = 2;

// let suiteStatus = failedTests === 0 ? "PASS" : failedTests <= 2? "WARNING" : "FAIL";
// viết lại đoạn code trên bằng if/else if/else
let suiteStatus;
if (failedTests === 0) {
    suiteStatus = "PASS";
    
}else if (failedTests <= 2) {
    suiteStatus = "WARNING";
    
}else{
    suiteStatus = "FAIL";
    
}
console.log(suiteStatus);

// Truthy và Falsy
let age3 = 18;
if (age3){
    console.log("điều kiện đúng");
    
}
console.log(typeof age3);

if ("0") {
    console.log("có chạy vào đây");  // Chuỗi k rỗng
}
if (0) {
    console.log("ko chạy vào đây"); // Falsy = 0
    
}

// CHÚ Ý BẪY:
let soLuong = "0";
if (soLuong) {
    console.log("vẫn vào đây, nhưng thực ra k có sản phẩm nào");
}
// Cách fix
if (Number(soLuong)) {
    console.log("show số lương");
}else{
    console.log("k có số lượng");  
}
let userName = "   ";
if (userName) {
    console.log("Đã nhập user name");
    
}
//fix
if (userName.trim()) {
    console.log("username đã nhập");
    
}else{
    console.log("username rỗng");
    
}

// Ví dụ AT
let githubLink = "";
if (githubLink) {
    console.log("đã gửi link");
    
}else{
    console.log("link rỗng");
    
}
let rawUserName = "   ";
if (rawUserName.trim()) {
    console.log("user name hiển thị đầy đủ");
    
}else {
    console.log("username rỗng");
    
}

// switch
let role = "admin";
switch (role) {
    case "admin":
        console.log("Cấp quyền truy cập vào toàn bộ hệ thống"); // chỉ log ra dòng này
        break; // Nếu khúc này ko có break thì sẽ log luôn mấy dòng bên dưới, sau khi đã tìm đúng giá trị của biến
    case "editor":
        console.log("Quyền chỉnh sửa");
        break;
    default:
        console.log("Lỗi role ko hợp lệ");
        
}

let score5 = 75; // Ko thể đung đc switch vì switch chỉ so sánh bằng chính xác---có thể dùng if/else để >= / <=....

let httpStatus = 404;
switch (httpStatus) {
    case 200:
        console.log("OK");
        break; 
    case 301:
        console.log("Redirect");
        break;
    default:
        console.log("Unknown status");
}

// GOm nhóm
let browserName = "firefox";
switch (browserName) {
    case "chrome":
    case "edge":
    case "firefox":
        console.log("Khởi động driver");
        break;
}
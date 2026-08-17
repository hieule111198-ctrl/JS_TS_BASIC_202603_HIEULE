// Toán tử
// Phép cộng: (+)
// đây là phép toán nguy hiểm nhất vì có tính chất lươngx cực
// Nếu cả 2 là số: nó làm toán + bth
// Nếu 1 trong 2 là chuỗi (string) => keo dán, ví dụ ("10" + 5 = 105)
console.log(10+5);
console.log("10"+5);
console.log("10"- 5);
console.log("Mười"- 5); // NaN
console.log("10"*5);
console.log("10"/5);
console.log("10"%3);
// Toán tử gán -  dùng dấu bằng, quy tắc phải sang trái
let diemSo = 10 // gán 10 là điểm số cho biến diemSo
diemSo = diemSo + 5;
// Toán tử rút gọn: x = x+5
// = -> x = 10
// += -> x+ = 5 => x=x+5

// Lúc đầu giỏ hàng rỗng
let tongTien = 0;
const giaAo = 25000;
tongTien += giaAo; // tongTien = 0+25000
const giaQuan = 30000;
tongTien += giaQuan; //tongTien = 25000+30000=55000
console.log(`Tổng hoá đơn: ${tongTien}`);

// Toán tử so sánh: >, <, >=, <=
let pwLength = 5;
let isPasswordValid1 = pwLength >= 8;
console.log(isPasswordValid1);
// Bằng nhau == và bằng nhau tuyệt đối ===
// Bằng nhau ==: so sánh lỏng lẻo, chỉ quan tâm giá trị, k quan tâm kiểu dữ liệu, nếu kiểu dữ liệu khác nhau thì sẽ tự động ép kiểu để cho chúng bằng nhau
console.log(10 == "10"); // true
console.log(0 == false); // false = 0
// Bằng nhau ===: so sánh nghiêm ngặt, kiểm tra cả giá trị + kiểu dữ liệu
console.log(10 === "10");

// Toán tử logic
// 1. phép VÀ (&& - logic AND) - chỉ trả về true khi tất cả điều kiện đều là true
let isEmailCorrect = true;
let isPasswordCorrect = false;
let canLogin = isEmailCorrect && isPasswordCorrect;
console.log(canLogin);

// Phép HOẶC (||) - chỉ trả về true khi có ít nhất 1 đk là true, chỉ trả về false khi tất cả đk là false
// VD: tính năng search
let searchByName = false;
let searchBySKU = true;
let isProductFound = searchByName || searchBySKU;
console.log(isProductFound); // true

// Phép phủ định (! - logic NOT) - đảo ngược giá trị Boolean, đang TRUE thì thành FALSE
// Cách đọc: Không / Không phải / Phủ định của
// !isLoading: đọc là Không loading/ ko phải đang loading
// Mẹo: hãy dịch luôn thành 1 câu phủ định

// BT: Mình cần test 1 chức năng đki tài khoản, nút đki chỉ sáng lên khi đồng thời thoả mãn 3 diều kiện
// 1 là tuổi người dùng phải từ 18 trở lên
// 2. mật khẩu phải có 8 kí tự
// 3. checkbox đồng ý phải đc tích
let userAge = 20;
let passwordInput = "Neko1234";
let isTermAccepted = true;
// 1. tạo biến isAgeValid để ktra tuổi >=18 ko
// 2. tạo biến isPasswordValid kiểm tra mk có đúng 8 kt
// Kết hợp toàn bộ điều kiện để tạo biến isSubmitButtonEnabled
let isAgeValid = userAge >=18;
// console.log(isAgeValid);
let isPasswordValid2 = passwordInput.length === 8;
// console.log(isPasswordValid2);
let isSubmitButtonEnabled = isAgeValid && isPasswordValid2 && isTermAccepted;
console.log(isSubmitButtonEnabled);


// Toán tử tăng giảm (prefix and postfix)
// prefix (++i): tăng i lên 1 trước, rồi mới trả về giá trị i
// postfix (i++): trả về giá trị cũ của i trước, sau đó mới tăng i lên 1
// i--
// --i
// Sẽ ra hai câu hỏi: 1 là giá trị của cả biểu thức i++ hoặc ++i là gì
// 2 là giá trị cuối cùng của biến i sau khi dòng code chạy là gì
// NƠI DÙNG TOÁN TỬ NÀY
// phép gán: let y = i++;
// phép tính: let total = ++i \* 2;
// Hàm: console.log(i++);
// Điều kiện: if(i++ > 5)
// ĐIỂM MẤU CHỐT: Nơi đang dùng nó luôn nhận giá trị của cả biểu thức, chứ k phải cứ nhìn biến sau cùng là đủ
let a = 5;
let ketQua1 = a++; // ra 5
console.log(ketQua1);
console.log(a); // ra 6
let b = 5;
let ketQua2 = ++b;
console.log(ketQua2);
console.log(b); 

let x1 = 5;
console.log(x1++);

let count = 5;
count++; // NÊN DÙNG RIÊNG BIỆT, bản chất là tăng biến lên 1 đơn vị
console.log(count);

// Bài tập:
// Mình có 1 promotion -> Rule: Nếu KH > 18 tuổi và là thành viên VIP, thì đc giảm 30% giá vé, ngược lại vẫn giữ nguyên

let rawAge = " 25 tuổi";
let rawIsVIP = "true";
let rawTicketPrice = "  500.000 đ";
// Yêu cầu
// 1. Làm sạch và ép kiểu
// 2. Kiểm tra điều kiện. Nếu đủ tính giá sau giảm 30% -> Nếu ko giữ nguyên
// 3. In kết quả

// let age = parseInt(rawAge.trim());
let age = Number(rawAge.trim().replace("tuổi", ""));
let isAgePass = age > 18;
let isVIP = rawIsVIP === "true";
let ticketPrice = Number(rawTicketPrice.trim().replace(".","").replace("đ", ""));
if (isAgePass && isVIP) {
    console.log(`Gia san pham được giảm giá là ${ticketPrice * 0.7} đ`);
} else {
    console.log("Giá sản phẩm ko giảm giá là ticketPrice"); 
}
























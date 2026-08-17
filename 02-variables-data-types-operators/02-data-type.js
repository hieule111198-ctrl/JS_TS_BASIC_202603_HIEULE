




//Replace
//check cả chữ hoa chữ thường, thay thế chỗ đầu tiên tìm thấy
let giaTien = "100$";

let giaTienSo = giaTien.replace("$", "");
console.log(giaTienSo);

let tien ="1.000.000";
console.log(tien.replace(".", ""));

//replaceAll()
console.log(tien.replaceAll(".", ""));

let tenUI = "Nguyen Van A";
console.log(tenUI.replaceAll(" ", ""));

//indexOf() -  may đo vị trí
//Tìm vị trí- index của một chuỗi con bên trong chuỗi mẹ, nếu k tìm thấy thì trả về -1
//Cú pháp: chuoime.indexOf("chuoicon");
//Kết quả: trả về số ("vị trí bắt đầu tính từ 0")
let urlUI = "https://shopee.vn/product/12345";
console.log(urlUI.indexOf("product"));

//Kết hợp với substring() để cắt lấy 1 phần chuỗi từ vị trí tìm được
//substring() - slice() ---- cắt lấy 1 phần của chuỗi dựa trên vị trí bắt đầu và vị trí kết thúc 
//điểm cực kì quan trong: 
//start: đc tinh vaof
//end: k đc tinh vao
//LUU Y: slice() ho tro so am - chieu nguoc lai - vi du lay duoi chuoi, duoi file (-1/-2/-3/-4)
//Neu truyen vao k co end() thi no se lay tu vi tri start() cho den het chuoi
let text  = "ABCDEFG";
console.log(text.slice(1,4));

let maDon = "ORD-2026-00567";
console.log(maDon.substring(0,8));
console.log(maDon.slice(0,8));

let fileName = "report_2026.pdf";
console.log(fileName.slice(-4));



let errorMsg= "Error 404: Page not found";
let pos = errorMsg.indexOf(":");
console.log(errorMsg.slice(pos+2));

// TƯ DUY kết hợp nhiều string method - Mình nhớ method nào???
// Hãy đổi sang kiểu tư duy theo quy trình
// 1. Check dữ liệu có bẩn hay ko: dùng trim(), replace(), replaceAll(), toLowerCase()
// 2. Mình có cần biết sự tồn tại hay ko: dùng incluses()
// 3. Mốc bắt đầu nằm ở đâu: indexOf()
// 4. Sau khi biết vị trí rồi thì cần cắt đoạn nào: slice(); substring()
// 5. Kết quả có cần chuẩn hoá nữa ko: trim(), toLowerCase(), split()
// công thức tư duy: LÀM SACH -> TÌM MỐC -> CẮT/TÁCH -> CHUẨN HOÁ -> KIỂM TRA

//BAI TAP
let rawText = "    Order ID: ORD-2026-123 | Status: Success    ";
//Yêu cầu lấy ra đc ORD-2026-123 --- dùng indexOf + length + slice để lấy
//BAI LAM
//console.log(rawText.length);
console.log(rawText.indexOf("ORD"));
console.log(rawText.indexOf(3));
console.log(rawText.slice(14,26));

//LOI GIAI
//let textClean = rawText.trim();
let textStart = rawText.indexOf(":");
let textEnd = rawText.indexOf("|");
let result = rawText.slice(textStart +2, textEnd -1);
//console.log(textClean);
console.log(result);

// HỘP ĐỒ NGHỀ xử lý NUMBER
// A. Number()
// Nó cố gắng biến toàn bộ chuỗi thành số, nếu chuỗi có chứa dù chỉ là 1 kí tự lạ -> Báo lỗi NaN (Not a number)
let s1 = "100";
console.log(Number(s1));

let s2 = "100px";
console.log(Number(s2));

// B. parseInt() => Máy lọc số nguyên
// ĐỌc từ trái sang phải, gặp số thì lấy, gặp chữ thì stop - bỏ qua phần thập phân
console.log(parseInt(s2));
console.log(parseInt("10.999"));

// C. parseFloat() -> máy lọc số thập phân
// Giống parseInt() nhưng giữ lại phần thập phân
console.log(parseFloat("10.5 kg"));

//convert thanh 0
console.log(Number("")); //=> Result = 0
// => if(str.trim()) === ("") {//xu ly logic}
//1:52

// (so).toFixed() --- làm tròn số thập phân sau dấu chấm, thiếu thì thêm số 0, làm tròn như quy tắc bth - nhìn vào chữ số sau số mình muốn làm tròn
// Đầu vào là NUMBER, đầu ra là STRING
console.log((19.956).toFixed(2));

// ĐỐI TƯỢNG TOÁN HỌC (math objects)
// Làm tròn Nguyên
// Math.round() - làm tròn theo công thức toán học bth như trên
// Math.ceil() - làm tròn lên trần - 4,1 -> 5
// Math.floor() - làm tròn xuống - 4.9 -> 4

// Tạo số ngẫu nhiên: Math.random() -> Trả về 1 số lẻ từ 0 đến sát 1 (ví dụ 0.1233,...., 0.9999)
// TẠO số ngẫu nhiên từ MIN đến MAX:
// CÔNG THỨC: Math.floor(Math.random() * (max - min + 1)) + min
let min = 50;
let max = 55;
let soLuong = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(soLuong);
// Vì sao lại có công thức này
// B1. Math.random() -> 0 - 0.9999999
// B2. max - min +1 = 55-50+1 = 6 => Tính tổng số kết quả có thể có
// B3. Math.random(). (max - min + 1) = (0-0.99999)* 6 = 0 - 5.99999 => Kéo giãn khoảng ra 6 đơn vị
// B4. Math.floor() -> Làm tròn xuống: 0, 1,2,3,4,5
// B5. + min: dịch chuyển lên vị trí min -> 50,51,52,53,54,55

let diem = 4.2;
console.log(Math.ceil(diem));

// check type của 1 đầu ra
const checkType = (19.956).toFixed(2);
console.log(typeof checkType);

// min, max
console.log(Math.max(10, 2,4,8));
console.log(Math.min(10, 2,4,8));

//abs: giá trị tuyệt đối
console.log(Math.abs(-15));

// padStart(), padEnd() - đệm
// VD: ngày tháng 01, 02 // Mã đơn hàng: SP-00005 // Đồng hồ 00:05
// .padStart() -- chèn thêm kí tự vào đầu chuỗi cho đến khi đạt đủ độ dài của chuỗi - Phương thức STRING()
// Phải ép số sang chuỗi trước
// CÚ PHÁP: chuoi.padStart(độ dài mong muốn, kí tự chèn);
// SAI:
let ngay = 5;
//console.log(ngay.padStart());
//console.log(ngay.padStart(2, 0));

// ĐÚNG - ép kiểu
let chuoiNgay = String(ngay);
console.log(chuoiNgay.padStart(2, "0")); // (2,0) cũng ok

let orderNumber = 5; // làm thành SP-00005 - dùng backstick
let orderN = String(orderNumber);
let number = orderN.padStart(5, "0");
console.log(number);
//let chuoiOrder = ("SP-", ${number});
console.log(`SP-${number}`);

let sp = "iphone18";
let gia = "1000$";
console.log(sp.padEnd(20, ".") + gia);


///////
// MÌNH NHỚ HÀM NÀO:
// Đầu vào là number hay string
// Number - ép kiểu
//    Number(), parseInt(), parseFloat()
//   Thành số rồi: làm gì: cộng trừ nhân chia, min, max
//    Có cần làm tròn k, Cần hiển thị đẹp ko: toFixed(), padStart(), padEnd()


// CONSOLE.LOG - IN ra màn hình
// 1. Nối chuỗi bằng dấu +
let ten = "neko";
let tuoi = 18;
console.log("Tên: " + ten + " - Tuổi: " + tuoi);
// 2. Ngăn cách bằng dấu phẩy
console.log("Tên:", ten, "- Tuổi:", tuoi);
// 3. Dùng Backstick - template literal
console.log(`Tên: ${ten} - Tuổi: ${tuoi + 1}`);


//METHOD CHAINING là gì - gọi nhiều method liên tiếp trên cùng 1 KIỂU giá trị, bước sau lấy chính kết quả của bước trước làm đầu vào
const slug = "  Playwright Basic First test  "
console.log(slug.trim().toLowerCase().replaceAll(" ","-")); // -> playwright-basic-first-test

let amount = 9.5; // -> "009.50"
console.log(amount.toFixed(2).padStart(6, "0"));

// toLocaleString()
// Hãy hiện thị SỐ này theo thói quen của một quốc gia/ngôn ngữ cụ thể
// VD: cùng số 54M, ở VN: 54.000.000; ở Mỹ: 54,000,000
// CÚ PHÁP: so.toLocaleString(locale, options);
// locale: chuẩn cùng ngôn ngữ, vd: vi-VN; en-US
// options: cấu hình thêm như tiền tệ, %, số lẻ

// HOME work
let price = 54000000;
console.log(price.toLocaleString("vi-VN"));
console.log(price.toLocaleString("en-US"));

let moneyText = price.toLocaleString("vi-VN",{
    style: "currency",
    currency: "VND"
});
console.log(moneyText); //54.000.000 ₫
// DÙng slice()
let text2 = "ABCDEFGH";
// 01234567
// -8-7-6-5-4-3-2-1.  // Nếu là số âm, hãy đổi sang vị trí dương trước (bằng cách lấy length + với số âm)
// Đầu vào của slice() là String, dùng CT: String(tenBien).slice();
// Muốn lấy DEFGH dùng slice()
// slice() có thể nhận vào 1 tham số (start), nếu k có "end" thì nó sẽ lấy đến hết chuỗi
//slice(3);
//slice(-2); //lấy từ chữ G: = slice (6), vì tính theo CT  = length + số âm = 8 + (-2) = 6 
// Lấy BCDEF - start là dương, end là âm
//slice(1, -2); // = slice(1,6); 39p

// Dùng slice để đổi 54000000 sang 54.000.000
const resultPrice = "54000000";
let price1 = resultPrice.slice(2,5);
let price2 = resultPrice.slice(5);
let actualResult= 54 + "." + price1 + "." + price2
console.log(actualResult);
// Cách 2
const resultPrice2 = String(resultPrice).slice(0,2) + "." + String(resultPrice).slice(2,5)+ "." + String(resultPrice).slice(-3);
console.log(resultPrice2);
// Cách 3:
let formated = `${resultPrice.slice(0,-6)}.${resultPrice.slice(2,-3)}.${resultPrice.slice(5)}`;
console.log(formated);





 

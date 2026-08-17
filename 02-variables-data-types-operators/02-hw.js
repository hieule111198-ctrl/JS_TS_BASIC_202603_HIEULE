//Bài 1

// Dữ liệu đầu vào:

// Giá gốc (Lấy từ UI - String): " 1.000.000 đ "
// Phần trăm giảm (Lấy từ DB - Number): 20 (tức là 20%)
// Giá sau giảm (Lấy từ UI - String): " 800.000 đ "
// Yêu cầu: Viết code để:

// Làm sạch và chuyển đổi Giá gốc về Number.
// Tính toán giá mong đợi: Giá gốc * (100 - 20) / 100.

let giaGoc1 = " 1.000.000 đ "; 
let phanTramGiam = 20; 
let giaGocClean = Number(giaGoc1.trim().replaceAll(".","").replace(" đ", "")); 
let giaSauGiam = giaGocClean * (100-phanTramGiam)/100; 
console.log(giaSauGiam);

//Bài 2
let tenSanPham = "   macbook pro m3   ";
let giaGoc = "Price: 30,000,000 vnđ";
let soLuong = "Sl: 2 máy";
let maGiamGia = "DISCOUNT CODE: 10% OFF";

// Bạn phải viết code xử lý để khi chạy console.log, màn hình hiện ra y hệt như sau:
// HÓA ĐƠN THANH TOÁN - ID: #0002
// Sản phẩm: MACBOOK PRO M3
// Đơn giá: 30000000
// Số lượng: 2
// Tổng tiền (Gốc): 60000000
// Giảm giá: 10%
// THÀNH TIỀN: 54.000.000 VNĐ

let tenSanPhamClean = tenSanPham.trim().toUpperCase();
let giaGocClean1 = giaGoc.slice(7, -4);
let giaGocFinal = Number(giaGocClean1.replaceAll(",",""));
let soLuongFinal = soLuong.replace("Sl: ", "").replace(" máy","");
let maGiamGiaString = maGiamGia.slice(15, -4);
let thanhTien1 = giaGocFinal *2 * 0.9;
let thanhTien2 = String(thanhTien1);
let thanhTienFinal = thanhTien2.slice(0,2) + "." +thanhTien2.slice(2,5) + "." + thanhTien2.slice(5);
let ID = "#0002";
console.log(
`HÓA ĐƠN THANH TOÁN - ID: ${ID}
Sản phẩm: ${tenSanPhamClean}
Đơn giá: ${giaGocFinal}
Số lượng: ${soLuongFinal}
Tổng tiền (Gốc): ${giaGocFinal*2}
Giảm giá: ${maGiamGiaString}
THÀNH TIỀN: ${thanhTienFinal}`
);


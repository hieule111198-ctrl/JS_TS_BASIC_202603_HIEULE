Rẽ nhánh kịch bản: If/else
cấu trúc If/else: nếu...thì...
Syntax:
if (điều kiện đúng) {
    // Làm việc A
} else {
    // Làm việc B
}
Tạm thời: hiểu điều kiện là 1 biểu thức trả về Boolean: true hoặc false
ví dụ: age > 18, score < 5, status === 'success'
Nếu đkien cho ra true: vào cửa If
Nếu đkien cho ra false: vào cửa else



cấu trúc if/else if/else - ngã tư nhiều lối rẽ
if (đk1){
    chạy nếu đk1 đúng
} else if (đk2) {
    chạy nếu đk1 sai nhưng đk2 đúng
} else if (đk3) {
    chạy nếu các đk trên đều sai nhưng đk3 đúng
} else {
    chạy nếu tất cả các điều kiện trên là sai
}
Quy tắc: luôn bắt đầu bằng if
có thể 0,1 hoặc nhiều else if
else là tuỳ chọn k bắt buọc
nếu có else thì nó thươngf đứng cuối cùng
trong cả cụm này, máy tính chỉ chạy 1 nhánh duy nhất
nếu đkien nào đúng đầu tiên thì nó chạy vào nhánh đó và bỏ qua taats cả các nhánh bên dưới dù nhánh bên dưới có đúng đi nữa

2. Toán tử 3 ngôi  lối tắt của if/else
vì nó có 3 thành phần:
syntax:
let bien = điều kiện ? giá trị nếu đúng : giá trị nếu sai
dấu ? mang ý nghĩa hỏi xem điều kiện đúng hay sai
dấu: mang ý nghĩa ngăn cách giữa đúng-bên trái và sai-bên phải
=>> CÁCH ĐỌC: Nếu đkien đúng thì lấy vế bên trái dấu : còn nếu sai thì lấy vế bên phải
BEST PRACTICE:
If/else: là câu lệnh rẽ nhánh, dùng để quyết định chạy khối code nào
***Toán tử 3 ngôi: là biểu thức dùng để tạo ra một giá trị
Khi nào ưu tiên toán tử 3 ngôi:
- khi bạn chỉ cần chọn 1 giá trị 
- Khi bài toán chỉ có 2 kết quả
- Mỗi nhánh đều ngắn và đọc phát hiểu ngay
** Rất phù hợp cho các case:
  + Gán text cho biến
  + chọn config
  + Return 1 giá trị ngắn
  + Hiển thị nhãn đơn giản

*** Khi nào ưu tiên if/else:
- Trong mỗi nhánh có nhiều hành động:
   + Bạn cần clg, click, screenshot, gọi api,...
   + Bạn cần đọc code thật rõ từng bước
   + Hoặc biết trc là sẽ cần mở rộng thêm logic


Truthy và Falsy
Bình thường, câu lệnh if đòi hỏi điều kiện bên trong phải là kiểu Boolean (true or false)
Nếu bạn đưa vào 1 String, Number, 1 object... nó thường k báo lỗi ngay, thay vào đó nó sẽ làm 1 bước ngầm, gọi là ép kiểu
Hiểu đơn giản:
if (gia trị bất kì) {
    ....
}
JS nó sẽ tự xử lí theo kiểu:
- Giá trị bất kì đã là true hoặc false chưa
- Nếu chưa, hãy tạm thời đổi nó sang boolean: true vào if, false vào else

Thằng if ko hỏi mày thuộc kiểu dữ liệu gì, mà nó hỏi trong ngữ cảnh, điêu kiện, tao nên xem mày là đúng hay sai
đó là lí do tại sao sinh ra hai khái niệm:
Truthy: k phải boolean, nhưng khi đưa vào if thì xem là true
Falsy: ''''''                                     false

QUY TẮC: những gtri mang năng lương tiêu cực, trống rỗng, vô nghĩa bị ép thành false, gọi là falsy
còn tất cả những thứ còn lại bị ép thành truthy
LIST 6 FALSY:
- False
- số 0
- "" - chuỗi rỗng
- null (rỗng)
- undefined (chưa xác định)
- NaN
TẤT CẢ ĐIỀU KIỆN KHÁC ĐƯỢC COI LÀ TRUTHY
CHÚ Ý: các bẫy:
- Trò lừa bằng String: "0" --- một chuỗi chứa số 0
- "false"
- " " -- có 1 dấu cách
- Object/array: [] - mảng rỗng || {} - object rỗng ==>> TRUTHY


Switch case
Mình cứ tưởng tượng Switch case hoạt động y như 1 máy bán nước tự động
VD bạn nhét tiền vào và bấm mã số switch() 
==>> máy sẽ dò tìm đúng ô chứa mã số đó: case()
nhả ra chai nước (code thực thi)
Nếu bấm mã k tồn tại thì refund hay thông báo lỗi (default)
CÚ PHÁP:
switch (biểu thức): nơi bạn truyền vào biến cần kiểm tra --- Biểu thức có thể là String, Number, Boolean
case giá trị: điểm dừng (dấu : ở cuối)
break lệnh ngắt: gặp lệnh này sẽ thoát khỏi break
default: giống như else

Nếu ko có break => chạy đúng vào case đầu tiên khớp, nhưng sau đó nó chạy tuột xuống tất cả các case bên dưới mà k thèm tra điều kiện

Khi nào dùng switch và khi nào dùng is/else
- Điều kiện: dùng if/else khi điều kiện đa dạng, phức tạp (<,>,=, >=,...), điều kiện lồng nhau, nhiều biến
           dùng switch case khi có duy nhất 1 biểu thức trong switch rồi mỗi case là 1 giá trị cố định để so khớp === nghiêm ngặt
- Số lượng: if/else thì ít nhánh (2-3 trường hợp)
            switch case: rất nhiều nhánh, từ 4 TH trở lên
NÓI NGẮN GỌN, thằng switch ko mạnh ở điều kiện, logic mà mạnh ở so khớp NHIÈU GIÁ TRỊ CỐ ĐỊNH của 1 biến hay biểu thức
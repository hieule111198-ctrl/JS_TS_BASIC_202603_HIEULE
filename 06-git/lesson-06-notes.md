tk của thầy: meomew-auto
GIT - Giúp mình lưu nhiều phiên bản của project theo thời gian - lưu lịch sử project
Ưu điểm: 
- Ko sợ hỏng code vì có lịch sử lưu lại
- Có thể học đc cách chia nhỏ công việc thành từng bước
- Đưa code lên github để lưu trữ và chia sẻ
- Quen flow của team: branch, pull request, review, merge
Mỗi lần commit, git nó lưu lại cái gì:
- File nào thay đổi
- Nội dung thay đổi
- Ai commit
- THời điểm commit
- Commit message
- Commit trc đó là commit gì

Các khu vực quan trọng mà mn cần lưu ý:
- Working directory: folder project trên máy                                     ===> git add
- Staging area: vùng chuẩn bị commit                                             ===> git commit       
- Local repository: folder .git trên máy (nơi lưu lịch sử commit local)          ===> git push
- Remote repository: github/gitlab/bitbucket -> nơi lưu bản online

Các bước để đẩy code lên remote repository:
- B1: Khởi tạo git trong folder hiện
git init -- 1 lần duy nhất - tạo folder ẩn tên là .git
- B2: Kiểm tra trạng thái file
git status
Thường sẽ ra những untracked files
- B3: git add + tên file/folder
Hoặc chọn tất cả các files thay đổi: git add .
- B4: Tạo commit đầu tiên
git commit -m "nội dung mô tả commit"
- B5: dặt tên nhánh chính là main (vì github đặt tên nhánh chính là main)
git branch -M main
- B6: gắn folder này với remote repository ở trên git
git remote add origin ....đường link remote repository
git remote add origin https://github.com/hieule111198-ctrl/JS_TS_BASIC_202603_HIEULE.git
=> Sau này push thì đẩy code lên đường link này
- B7: push - đẩy code
lần đầu tiên chưa đẩy code: ta thiết lập upstream cho branch local hiện tại với remote
git push -u origin main 
-u: upstream
origin là tên ngắn của repo github mà mình đã gắn vào


Có nhiều môi trường:
dev: main => Nhánh này là nhánh chính chạy ổn định -> khi làm việc người ta sẽ tạo 1 nhánh khác để làm việc để ko ảnh hưởng tới nhánh chính đang sử dụng -> sau khi code ổn định ở nhánh phụ -> chúng ta mới merge code vào nhánh chính để bổ sung tính năng
uat: main

Cách đặt tên commit:
- Khi project có nhiều commit thì mình cần lịch sử để biết hôm đó sửa gì, ai sửa, sửa tính năng gì
- Công thức đơn giản nhất:
Động từ + nội dung thay đổi
ví dụ: add login test/ fix login validation
- Cách chuyên nghiệp: 
type: nội dung thay đổi
Ví dụ: 
docs: update git lesson
feat: add product search flow
test: test login test
fix: fix correct login selector

git log --oneline
9502db2 (HEAD -> main, origin/main) docs: add git lesson
445d5ae docs: add git lesson
06c02b5 first commit

HEAD -> main: vị trí đang đứng ở nhánh main, tương ứng vs nhánh main ở repository (origin/main)

Muốn lấy thông tin về code mới nhất ta dùng git pull 444
sjdflsjlfsdjflsj
local hieu,,,,



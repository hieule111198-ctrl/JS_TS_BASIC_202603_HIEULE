// Tình huống: Bạn đang viết một bản kiểm tra trước khi release. Hệ thống trả về dữ liệu thô từ UI và config. Bạn cần xử lý thành báo cáo rõ ràng.
// Dữ liệu đầu vào:

let rawProjectName = "   Neko CRM   ";
let rawEnvName = "   ";
let rawPassRate = "82";
let rawHasReport = "true";
let rawCriticalMessage = "   ";
let browserUsed = "chrome"; // "chrome", "firefox", "safari", "edge"


// Yêu cầu:
// Dùng .trim() để làm sạch rawProjectName và rawEnvName.
// Nếu rawEnvName sau khi trim() là rỗng -> gán environment = "Development". Nếu không rỗng -> dùng chính giá trị đã làm sạch.
// Ép rawPassRate sang Number.
// Ép rawHasReport sang Boolean đúng cách.
let projectName = rawProjectName.trim();
let envName = rawEnvName.trim();
if (envName === ""){
    envName = "Development";
}
console.log(envName);

let passRate = Number(rawPassRate);
let hasReport = Boolean(rawHasReport);

// Tạo hasCriticalBug theo quy tắc:
// nếu message là null hoặc undefined -> false
// nếu sau trim() là rỗng -> false
// ngược lại -> true
// Dùng if / else if để xếp hạng:
// >= 95 -> "EXCELLENT"
// >= 80 -> "GOOD"
// >= 60 -> "NEEDS IMPROVEMENT"
// còn lại -> "CRITICAL"
let criticalMessage = rawCriticalMessage.trim();
let hasCriticalBug;
if (rawCriticalMessage == null || rawCriticalMessage == undefined){
    hasCriticalBug = false;
} else if (criticalMessage == ""){
    hasCriticalBug = false;
}else {
    hasCriticalBug = true;
}
console.log(hasCriticalBug);

let rate;
if (passRate >= 95){
    rate = "EXCELLENT";
} else if (passRate >= 80) {
    rate = "GOOD";
}else if (passRate >=60) {
    rate = "NEEDS IMPROVEMENT";
}else {
    rate = "CRITICAL";
}
console.log(rate);


// Dùng switch/case để gán tên engine cho browserUsed:
// chrome -> "Chromium"
// edge -> "Chromium"
// firefox -> "Gecko"
// safari -> "WebKit"
// Nếu không khớp -> "Unknown"
let engine;
switch (browserUsed) {
    case "chrome":
        engine = "Chromium";
        break;
    case "firefox":
        engine = "Gecko";
        break;
    case "safari":
        engine = "WebKit";
        break;
    case "edge":
        engine = "Chromium";
        break;
    default:
        console.log("Unknown");  
} 
console.log(engine);

// Dùng toán tử 3 ngôi để tạo message cho report:
// nếu hasReport là true -> "Có report"
// ngược lại -> "Chưa có report"
let hasReportResult  = hasReport ? "Có report" : "Chưa có report";
console.log(hasReportResult);

// Tạo isReadyToRelease theo quy tắc:
// nếu pass rate dưới 80 -> false
// nếu có critical bug -> false
// nếu chưa có report -> false
// còn lại -> true
// In báo cáo ra console.
let isReadyToRelease;
if (passRate < 80 || hasCriticalBug || !hasReport) {
    isReadyToRelease = false;
} else{
    isReadyToRelease = true;
}
console.log(isReadyToRelease);

// Expected output
// Project:         Neko CRM
// Environment:     Development
// Browser:         chrome
// Engine:          Chromium

// Pass Rate:       82.00%
// Grade:           GOOD
// Report:          Có report
// Critical Bug:    Không có bug nghiêm trọng

// Ready:           YES

let hasCriticalBugFinal = hasCriticalBug ? "Có bug nghiêm trọng" : "Không có bug nghiêm trọng";
let isReadyToReleaseFinal = isReadyToRelease ? "YES" : "NO";
console.log(
    `Project: ${projectName}
    Environment: ${envName}
    Browser: ${browserUsed}
    Engine: ${engine}
    
    Pass Rate: ${passRate.toFixed(2)}%
    Grade: ${rate}
    Report: ${hasReportResult}
    Critical Bug: ${hasCriticalBugFinal}
    Ready: ${isReadyToReleaseFinal}`
);

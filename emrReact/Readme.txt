
Một số quy tắc trung.

#PascalCase:
	- Component (.tsx): PatientDashboard.tsx, UserManagement.tsx
	- Model entity, class, interface, và các type còn lại (class PatientViewModel, UserClass, PatientDashboard)

#camelCase:
	- File .ts
    - Tên các biến, và hàm bên trong 1 component.
    - Hook: useTranslate, useState, use

#kebab-case
    -Tên folder sẽ viết thường, nếu nhiều từ sẽ cách bằng dấu -
        user-management

#Nên đặt rõ ràng tên biến để tránh việc đọc vào khó hiểu, 
    Bad: 
        const abc = 60;
    Good:  
        const minutes = 60;

#Tránh việc tạo ra các magic number:
    Bad: 
        if(rule > 60)// 60 ???
    Good: 
        const TIME_EXPIRE = 60;
        if(rule > TIME_EXPIRE)

#Các biến liên quan đến hằng số, đây là ngoại lệ, nên viết hoa hết và cách nhau = dấu _ ví dụ: TIME_EXPIRE, DISCOUNT_PERCENT, LIMIT_RATE

#Nên xài const và let, hạn chế xài var trong typescript (liên quan đến scope của 1 biến)

#Tránh đặt tên file tsx giống với tên folder, ví dụ pages/patient/Patient.tsx => vì khi import nó sẽ thành 'pages/patient/Patient' 
        => Nên đặt khác với tên folder pages/patient/PatientManagement.tsx
	
#Tránh tự viết css liên quan đến vấn đề responsive ui:
    - Nên sử dụng component của MUI để làm
    - Chỉ nên override các style của MUI.
    
#Tránh viết 1 page quá dài, nên break ra các component nhỏ hơn

#Nên tạo ra các Model để nhận dữ liệu và passing dữ liệu thay vì sử dụng any. 
    Any vẫn có thể đc sử dụng, nhưng trong 1 số phạm vi nhất định, có thể sử dụng trong các callback của MUI hoặc javascript.
    Có thể sử dụng interface hoặc type để tạo Model, class vẫn được nhưng cú pháp dài hơn (thường dùng để làm chuyện khác)
    
#Nên viết theo hướng đối tượng.

1 số quy tắt khác có thể tham khảo link sau
https://github.com/airbnb/javascript/tree/master/react#naming
















1 số extension visual Code NÊN có:
    - indent-rainbow: tô màu để group các đoạn code đoạn html cho dễ nhìn
    - Prettier: format code.
    - SVN (Chris Johnston) - cài svn phải cài chức năng command line, thì tool nó mới work.
    - Debugger for Chrome
    - ES7+ React/Redux/React-Native snippets: gợi ý mã trong react, code cho nhanh.
    - Bracket Pair Colorizer  (vscode tự có, enable chức năng này trong setting) 
        dùng để đánh highlight group cái dấu { } trong code để dễ nhìn hơn.

Khác:
    - Code Spell Checker: check chính tả tên biến tiếng anh
    - Polacode: dùng screenshot đoạn code mà k cần xài sniping tool của micrsoft, thì có thể xài.
    - Quokka.js (Wallaby.js) tự động print kết quả của 1 số đoạn code trên visual code mà mình k cần phải xài console.log để coi ngoài trình duyệt

----------------------------------------------------------
Quy tắc về source control. 

    - Đang trong giai đoạn Dev
        + Khi implement 1 chức năng mới. Nên checkout từ trunk ra 1 branch mới để làm chức năng đó
            - Quy tắc tên branch: dev/[Mã của task trên bitrix]-[Tóm tắt tổng quát tên branch]
                ví dụ: thực hiện code màn hình quản lý người dùng
                        dev/123_UserManagement.
            - Khi commit bắt buộc phải nhập message cho lần commit đó. Nội dung sẽ xoay quanh vấn đề implement task đó.
                ví dụ: "[123] thực hiện chỉnh sửa giao diện." -> 123 ở đây là tên task, giúp cho mình dễ dàng search trên SVN hoặc GIT.
        + Quá trình merge code:
            1. Commit tất cả code trên branch của mình [BranchDev].
            2. Switch qua brank trunk để pull code mới nhất về.
            3. Qua lại brank của mình tiến hành merge code từ Trunk vào Branch của mình (tránh làm ngược lại). 
            4. Resolve conflict nếu có sau đó test xem build code có lỗi hay không sau đó commit.
            5. Switch qua brank trunk và thực hiện merge từ [BranchDev] qua trunk và commit.
            6. Kết thúc quá trình.
    - Giai đoạn Production: (sẽ update)
    

# MovieHub2
🔧 Yêu cầu trước khi bắt đầu
cần cài đặt các phần mềm sau:

Node.js & npm (hoặc yarn)

Java JDK 11+

Spring Boot

XAMPP (chạy MySQL và phpMyAdmin)

Maven

🧱 1. Cài đặt và cấu hình CSDL (MySQL)
✅ Bước 1: Cài đặt và khởi động XAMPP
Tải và cài XAMPP từ https://www.apachefriends.org/

Mở XAMPP Control Panel

Nhấn Start cho cả Apache và MySQL

✅ Bước 2: Tạo database
Truy cập phpMyAdmin qua trình duyệt: http://localhost/phpmyadmin

Tạo một cơ sở dữ liệu mới tên là: netflix

Nếu có sẵn file SQL/video_meta_data.sql, bạn có thể:

Chọn database netflix

Chọn tab Import

Chọn file video_meta_data.sql trong thư mục dự án

Nhấn Go để import dữ liệu vào bảng video_meta_data

✅ Bước 3: Cấu hình kết nối MySQL
Mở file src/main/resources/application.properties và chỉnh sửa như sau:

properties
Sao chép
Chỉnh sửa
spring.application.name=backend
spring.jpa.hibernate.ddl-auto=update
spring.datasource.url=jdbc:mysql://localhost:3306/movie?createDatabaseIfNotExist=true
spring.datasource.username=root
spring.datasource.password=  # nếu bạn đặt mật khẩu cho MySQL thì điền vào đây
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.show-sql=true
Lưu ý: Nếu MySQL có mật khẩu,thêm dòng spring.datasource.password=your_password.

✅ Bước 3: Chạy backend
Cách 1: Dùng Maven
bash
Sao chép
Chỉnh sửa
mvn spring-boot:run
Cách 2: Chạy thủ công bằng Java
bash
Sao chép
Chỉnh sửa
cd src/main/java/com/netflixClone/backend
java BackendApplication.java
Backend sẽ chạy tại địa chỉ: http://localhost:8080

🌐 . Thiết lập và chạy Frontend (React)
✅ Bước 1: Mở terminal mới và điều hướng đến thư mục frontend
bash
Sao chép
Chỉnh sửa
cd netflix-clone
✅ Bước 2: Cài đặt các thư viện cần thiết
bash
Sao chép
Chỉnh sửa
npm install
# hoặc
yarn install
✅ Bước 3: Chạy ứng dụng React
bash
Sao chép
Chỉnh sửa
npm start
# hoặc
yarn start
Frontend sẽ chạy tại địa chỉ: http://localhost:3000

🧪 Cách sử dụng
Mở trình duyệt truy cập: http://localhost:3000

Đảm bảo backend đang chạy ở cổng 8080, để frontend có thể gọi API

Leader: Nguyễn Anh Tuấn

# 📖 Cosmic Tasks - Todo List

Một ứng dụng Todo List full-stack hiện đại với giao diện dark-mode cao cấp tuyệt đẹp được xây dựng bằng React, Vite và Tailwind CSS v4, cùng với một backend mạnh mẽ sử dụng Express.js và Prisma.

## 🎯 Tổng Quan (Overview)

**Cosmic Tasks** là một ứng dụng web hiện đại cho phép người dùng quản lý các công việc hàng ngày.  
Nền tảng tập trung vào trải nghiệm người dùng mượt mà, quy trình tạo tác vụ trực quan và kiến trúc full-stack dễ dàng mở rộng.

Dự án này được xây dựng với mục đích học tập là chính, tập trung vào việc học cách viết backend bằng **Express.js**, kết nối với cơ sở dữ liệu đám mây trực tuyến (**Neon**), và triển khai (deploy) dịch vụ sử dụng **Render**.

---

## 🌐 Demo Trực Tuyến (Live Demo)

Dự án đã được triển khai và có thể truy cập công khai tại:

👉 **Frontend (Vercel):** [https://todo-list-srt.vercel.app/](https://todo-list-srt.vercel.app/)  
👉 **Backend API (Render):** [https://todo-list-srt.onrender.com](https://todo-list-srt.onrender.com)

Bạn có thể trải nghiệm toàn bộ luồng người dùng, bao gồm thêm, đánh dấu hoàn thành và xóa tác vụ trực tiếp trên trang web.

---

## 🧩 Tính Năng Nổi Bật (Key Features)

- 📚 Tạo, đọc, cập nhật và xóa tác vụ với giao diện gọn gàng, không gây phân tâm
- 🤖 Tích hợp full-stack hoàn chỉnh với RESTful APIs
- ☁️ Tích hợp cơ sở dữ liệu đám mây sử dụng Neon (PostgreSQL)
- 📱 Thiết kế hoàn toàn tương thích (responsive) với phong cách glassmorphism
- ⚡ Tối ưu hiệu suất với Vite và React Query

---

## 🛠️ Công Nghệ Sử Dụng (Tech Stack)

- **Frontend Framework**: React (Vite)
- **Backend Framework**: Express.js
- **Database ORM**: Prisma
- **Database**: Neon (PostgreSQL Cloud)
- **Ngôn ngữ**: TypeScript
- **Styling**: Tailwind CSS v4
- **State & Data Fetching**: TanStack Query (React Query)
- **API Communication**: REST API (Axios)
- **Deployment**: Vercel (Frontend), Render (Backend)
- **Quản lý phiên bản**: Git & GitHub

---

## 🚀 Hướng Dẫn Cài Đặt (Getting Started)

### Yêu Cầu Cần Có

- Node.js **v18+**
- pnpm (khuyên dùng) / npm / yarn
- Cơ sở dữ liệu PostgreSQL (Local hoặc dịch vụ Cloud như Neon)

### Tải Mã Nguồn

Clone dự án về máy:

```bash
git clone https://github.com/SapphrieMoon/todo_list_SRT.git
cd todo-list
```

---

### Cài Đặt Backend

```bash
cd backend
pnpm install

# Tạo file cấu hình biến môi trường
cp .env.example .env
```
Cập nhật file `.env` với Database URL của bạn:
```env
DATABASE_URL="postgresql://user:password@host/database"
BASE_URL="http://localhost:3000"
```
Chạy migrations và khởi động backend:
```bash
npx prisma db push
npx prisma generate
npm run dev
```

---

### Cài Đặt Frontend

Mở một cửa sổ terminal mới:
```bash
cd frontend
pnpm install

# Tạo file cấu hình biến môi trường
cp .env.example .env
```
Cập nhật file `.env`:
```env
VITE_BACKEND_URL="http://localhost:3000"
```
Khởi động giao diện web:
```bash
pnpm dev
```

Mở http://localhost:5173 trên trình duyệt để xem kết quả.

---

## 🔗 Các Liên Kết Liên Quan

Đây là một monorepo chứa cả frontend và backend.
Repository Dự Án: https://github.com/SapphrieMoon/todo_list_SRT

---

## 📈 Những Gì Tôi Đã Học Được (What I Learned)

- Thiết kế và xây dựng RESTful API sử dụng Express.js và TypeScript
- Tích hợp cơ sở dữ liệu PostgreSQL trên nền tảng đám mây (Neon) bằng Prisma ORM
- Cấu trúc ứng dụng full-stack theo dạng monorepo
- Làm việc với luồng gọi API thực tế bằng React Query và Axios
- Triển khai và bảo trì một ứng dụng web thực tế (Vercel & Render)
- Viết code sạch, dễ bảo trì và có tài liệu rõ ràng

---

## 👨‍💻 Tác Giả (Author)

**SapphireMoon**

- GitHub: https://github.com/SapphrieMoon
- Repository Dự Án: https://github.com/SapphrieMoon/todo_list_SRT

---

## 📄 Bản Quyền (License)

Dự án này được tạo ra nhằm mục đích học tập và làm portfolio cá nhân.

<p align="center">Made with ❤️ using React & Express</p>

# 📖 Cosmic Tasks - Todo List

A full-stack Todo List application featuring a beautiful, premium dark-mode UI built with React, Vite, and Tailwind CSS v4, alongside a robust backend built with Express.js and Prisma.

## 🎯 Overview

**Cosmic Tasks** is a modern web application that allows users to manage their daily tasks.  
The platform focuses on a smooth user experience, intuitive task creation flows, and scalable full-stack architecture.

This project was built primarily for educational purposes, focusing on learning how to build a backend with **Express.js**, connect to an online cloud database (**Neon**), and deploy the service using **Render**.

---

## 🌐 Live Demo

The project has been deployed and is publicly accessible at:

👉 **Frontend (Vercel):** [https://todo-list-srt.vercel.app/](https://todo-list-srt.vercel.app/)  
👉 **Backend API (Render):** [https://todo-list-srt.onrender.com](https://todo-list-srt.onrender.com)

You can explore the full user flow, including adding, checking, and deleting tasks directly on the live website.

---

## 🧩 Key Features

- 📚 Create, read, update, and delete tasks with a clean, distraction-free UI
- 🤖 Full-stack integration with RESTful APIs
- ☁️ Cloud database integration using Neon (PostgreSQL)
- 📱 Fully responsive design with glassmorphism aesthetic
- ⚡ Optimized performance with Vite and React Query

---

## 🛠️ Tech Stack

- **Frontend Framework**: React (Vite)
- **Backend Framework**: Express.js
- **Database ORM**: Prisma
- **Database**: Neon (PostgreSQL Cloud)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **State & Data Fetching**: TanStack Query (React Query)
- **API Communication**: REST API (Axios)
- **Deployment**: Vercel (Frontend), Render (Backend)
- **Version Control**: Git & GitHub

---

## 🚀 Getting Started

### Prerequisites

- Node.js **v18+**
- pnpm (recommended) / npm / yarn
- PostgreSQL database (Local or Cloud provider like Neon)

### Installation

Clone the repository:

```bash
git clone https://github.com/SapphrieMoon/todo_list_SRT.git
cd todo-list
```

---

### Backend Setup

```bash
cd backend
pnpm install

# Create environment file
cp .env.example .env
```
Update your `.env` file with your Database URL:
```env
DATABASE_URL="postgresql://user:password@host/database"
BASE_URL="http://localhost:3000"
```
Run migrations and start the backend:
```bash
npx prisma db push
npx prisma generate
npm run dev
```

---

### Frontend Setup

Open a new terminal window:
```bash
cd frontend
pnpm install

# Create environment file
cp .env.example .env
```
Update your `.env` file:
```env
VITE_BACKEND_URL="http://localhost:3000"
```
Start the frontend server:
```bash
pnpm dev
```

Open http://localhost:5173 with your browser to see the result.

---

## 🔗 Related Links

This is a monorepo containing both the frontend and backend.
Project Repository: https://github.com/SapphrieMoon/todo_list_SRT

---

## 📈 What I Learned

- Designing and building a RESTful API using Express.js and TypeScript
- Integrating a cloud PostgreSQL database (Neon) using Prisma ORM
- Structuring full-stack applications in a monorepo format
- Working with real-world API flows using React Query and Axios
- Deploying and maintaining a production-ready web application (Vercel & Render)
- Writing clean, maintainable, and documented code

---

## 👨‍💻 Author

**SapphireMoon**

- GitHub: https://github.com/SapphrieMoon
- Project Repository: https://github.com/SapphrieMoon/todo_list_SRT

---

## 📄 License

This project is for educational and portfolio purposes.

<p align="center">Made with ❤️ using React & Express</p>

# Cosmic Tasks - Todo List App

A modern, full-stack Todo List application featuring a beautiful, premium dark-mode UI built with React, Vite, and Tailwind CSS v4, alongside a robust backend built with Express.js and Prisma.

## 🚀 Live Demo

- **Frontend (Vercel):** [https://todo-list-srt.vercel.app/](https://todo-list-srt.vercel.app/)
- **Backend API (Render):** [https://todo-list-srt.onrender.com](https://todo-list-srt.onrender.com)
*(Yes, it's great to share the backend URL so others can test the API endpoints or view Swagger docs if available!)*

---

## 📁 Project Structure

- `/frontend`: The React UI app (Vite + Tailwind v4 + React Query + Axios)
- `/backend`: The REST API (Express.js + Prisma ORM + PostgreSQL)

---

## ⚙️ Getting Started (Local Development)

### Prerequisites
- Node.js (v18+)
- `pnpm` (recommended) or `npm`/`yarn`
- PostgreSQL database (Local or Cloud provider like Neon/Supabase)

### 1. Clone the repository
```bash
git clone https://github.com/SapphrieMoon/todo_list_SRT.git
cd todo-list
```

### 2. Backend Setup
Open your terminal and navigate to the backend folder:
```bash
cd backend

# Install dependencies
npm install # (or pnpm install)

# Create environment file
cp .env.example .env
```
Open `backend/.env` and configure your local settings:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/your_database"
BASE_URL="http://localhost:3000"
```
Initialize the database and start the server:
```bash
# Push Prisma schema to your database
npx prisma db push

# Generate Prisma Client
npx prisma generate

# Run the backend dev server
npm run dev
```

### 3. Frontend Setup
Open a new terminal window and navigate to the frontend folder:
```bash
cd frontend

# Install dependencies
pnpm install

# Create environment file
cp .env.example .env
```
Open `frontend/.env` and point it to your local backend server:
```env
VITE_BACKEND_URL="http://localhost:3000"
```
Start the frontend development server:
```bash
pnpm dev
```
The web app will now be running on `http://localhost:5173`. Happy coding! ✨

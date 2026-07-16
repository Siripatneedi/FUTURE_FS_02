# FUTURE_FS_02 - Login Authentication System

## 📌 Project Overview

FUTURE_FS_02 is a full-stack Login Authentication System developed using Node.js, Express.js, MongoDB, HTML, CSS, and JavaScript. The application allows users to securely log in using their credentials and access a protected dashboard after successful authentication.

---

## 🚀 Features

- User Login Authentication
- Secure Password Verification
- Dashboard Access after Login
- MongoDB Database Integration
- REST API using Express.js
- Responsive User Interface
- Error Handling for Invalid Credentials

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

---

## 📂 Project Structure

```
FUTURE_FS_02/
│
├── config/
├── middleware/
├── models/
├── routes/
├── dashboard.html
├── dashboard.js
├── index.html
├── login.js
├── style.css
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/Siripatneedi/FUTURE_FS_02.git
```

### Move into the project

```bash
cd FUTURE_FS_02
```

### Install dependencies

```bash
npm install
```

### Start the server

```bash
node server.js
```

The server will run on:

```
http://localhost:5000
```
## 🌐 Live Demo

Frontend:

https://siripatneedi.github.io/FUTURE_FS_02/

> **Note:** GitHub Pages hosts only the frontend (HTML, CSS, JavaScript). The backend (Node.js, Express.js, MongoDB) must be deployed separately on a platform such as Render for login functionality to work. :contentReference[oaicite:0]{index=0}

---

## 📡 API

### Login

```
POST /api/login
```

#### Request

```json
{
  "username": "example",
  "password": "password"
}
```

#### Response

```json
{
  "message": "Login Successful"
}
```

---

## 📦 Dependencies

- Express.js
- Mongoose
- CORS
- dotenv
- bcrypt
- jsonwebtoken

---

## 👨‍💻 Developed By

**Sri Satya Siri Patneedi**

GitHub: https://github.com/Siripatneedi

LinkedIn: https://www.linkedin.com/in/sri-satya-siri-patneedi-2b1182324

---

## 📄 License

This project is developed for educational and internship purposes.

---

⭐ If you found this project useful, don't forget to give it a Star!

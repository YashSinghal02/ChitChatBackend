# 💬 ChitChat — Backend

The backend service for **ChitChat**, a real-time one-to-one messaging application built with Node.js, Express.js, MongoDB, and Socket.IO.

It provides authentication, messaging, real-time communication, image handling, email services, API protection, and user management for the ChitChat frontend.

---

## ✨ Features

* 🔐 **JWT Authentication** — Secure authentication using HttpOnly cookies.
* 💬 **Real-Time Messaging** — Instant communication using Socket.IO.
* 👥 **User Management** — User registration, login, profiles, and contacts.
* 📨 **Message Management** — Send and retrieve conversations and messages.
* 🖼️ **Image Uploads** — Image handling through Cloudinary.
* 📧 **Email Service** — Transactional emails using Resend.
* 🛡️ **API Protection** — Rate limiting and request protection.
* 🟢 **Online / Offline Presence** — Real-time user availability.
* 🔒 **Protected Routes** — Authentication middleware for private resources.
* ⚡ **REST API** — Structured API endpoints for frontend communication.

---

## 🛠️ Tech Stack

| Technology        | Purpose                             |
| ----------------- | ----------------------------------- |
| **Node.js**       | Server-side JavaScript runtime      |
| **Express.js**    | REST API framework                  |
| **MongoDB**       | Database                            |
| **Mongoose**      | MongoDB object modeling             |
| **Socket.IO**     | Real-time communication             |
| **JWT**           | Authentication                      |
| **bcryptjs**      | Password hashing                    |
| **Cloudinary**    | Image storage                       |
| **Resend**        | Transactional email                 |
| **Arcjet**        | API security and request protection |
| **cookie-parser** | Cookie handling                     |
| **CORS**          | Cross-origin request configuration  |
| **dotenv**        | Environment configuration           |

---

## 🔐 Authentication

ChitChat uses **JSON Web Tokens (JWT)** for authentication.

After successful authentication, the JWT is stored in an **HttpOnly cookie** rather than browser-accessible storage.

This helps prevent client-side JavaScript from directly accessing the authentication token.

Protected API routes verify the JWT before allowing access to authenticated resources.

---

## 💬 Real-Time Communication

The backend uses **Socket.IO** to provide real-time communication between connected users.

This enables:

* Real-time message delivery
* Online/offline presence
* User socket management
* Real-time conversation updates

Each authenticated user is associated with an active socket connection so messages can be delivered to the intended recipient.

---

## 📨 Messaging

The backend provides APIs for:

* Sending messages
* Retrieving conversations
* Retrieving messages between users
* Retrieving chat partners
* Managing authenticated conversations

Messages are stored in MongoDB and associated with the sender and receiver.

---

## 🖼️ Image Uploads

ChitChat supports sending images within conversations.

Images are uploaded and managed using **Cloudinary**, while the resulting image information is stored with the corresponding message.

---

## 📧 Email Service

ChitChat uses **Resend** for transactional email delivery.

The email service is used for application-related emails such as welcome messages.

---

## 🛡️ API Protection

The backend includes request protection to help prevent excessive or abusive API requests.

Rate limiting and security controls help reduce automated abuse, spam-like traffic, and unnecessary requests.

---

## 🌐 CORS & Cookies

Because the frontend and backend are deployed separately, the backend is configured to support cross-origin authenticated requests.

The application uses:

* CORS configuration
* Credentialed requests
* HttpOnly cookies
* Appropriate cookie security settings

These configurations allow the frontend and backend to communicate securely across their deployed environments.

---

## 📁 Project Structure

```text
src/
├── controllers/
├── emails/
├── lib/
├── middleware/
├── models/
├── routes/
├── seeds/
├── index.js
└── server.js
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

* **Node.js**
* **npm**
* **MongoDB** or a MongoDB Atlas database

### 1. Clone the repository

```bash
git clone https://github.com/YashSinghal02/ChitChatBackend.git
```

### 2. Navigate to the project

```bash
cd ChitChatBackend
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The backend will start on the configured port.

---

## 🔗 Frontend

The backend powers the ChitChat frontend application.

**Frontend Repository:**
https://github.com/YashSinghal02/ChitChatFrontend

**Live Application:**
https://chitchat.yashsinghal.co.in

---

## 🌐 API Overview

The backend exposes REST API endpoints for core application functionality, including:

```text
/api/auth
/api/message
```

The exact endpoints and request formats can be found within the project's route definitions.

---

## 🔒 Security

The backend follows several security practices:

* HttpOnly authentication cookies
* Password hashing with bcrypt
* Protected API routes
* JWT verification
* CORS configuration
* API rate limiting
* Environment-based configuration
* Private credentials stored outside the source code

---

## 👨‍💻 Author

**Yash Singhal**

ChitChat was built as a hands-on full-stack project to gain practical experience with backend development, REST APIs, authentication, real-time communication, databases, cloud services, API security, and production deployment.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

Copyright © 2026 Yash Singhal.

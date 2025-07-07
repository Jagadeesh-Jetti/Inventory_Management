# 🛠️ Inventory_Management – Backend API for Inventoma

This is the **Node.js + Express** backend powering **Inventoma**, a full-stack inventory management system. It provides secure RESTful APIs for user authentication, product management, category operations, and stock control.

> 🔐 JWT Auth | 📦 Product CRUD | 📊 Stock Management | ⚙️ Built with MongoDB + Express.js

---

## 📦 Features

- 🔐 **User Authentication** (Login / Register with JWT)
- 📦 **Products API**
  - Create, read, update, delete products
  - Filter by category or availability
- 🧾 **Categories API**
  - Add/delete product categories
- 📈 **Stock Controls**
  - Increment/decrement product stock
  - Flag low/inactive stock
- 🌐 **Cross-Origin Support** for frontend integration
- 🔒 **Role-Based Access** *(can be extended)*

---

## 🛠 Tech Stack

- Node.js  
- Express.js  
- MongoDB (Mongoose ODM)  
- JSON Web Token (JWT)  
- CORS, dotenv, bcryptjs

---

## 🚀 Getting Started

### Clone the Repo

```bash
git clone https://github.com/Jagadeesh-Jetti/Inventory_Management.git
cd Inventory_Management

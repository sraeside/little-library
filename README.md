# **Little Library - A Scalable React & Firebase Inventory Management System**  

## **Project Overview**  
Little Library is a personal library inventory management application built with **React and Firebase**, demonstrating **full CRUD functionality** while navigating real-world development constraints. This project highlights **technical problem-solving, structured component architecture, and scalable data management**.

---

## **Technical Challenges & Decisions**  

### **1. Authentication & Session Persistence**  
**Challenge:** Firebase Authentication v9 enables user login, but maintaining state across sessions without excessive API calls was necessary for a smooth UX.  
**Technical Decision:** Implemented **Local Storage** to preserve login state, allowing users to remain authenticated without redundant authentication requests, reducing **performance overhead**.

### **2. Handling Image Storage Without Paid Firebase Storage**  
**Challenge:** Firebase Storage requires a paid account for full functionality, making image uploads inaccessible as a student developer.  
**Technical Decision:** Designed a **dynamic placeholder image system** to ensure a polished UI for books without covers, maintaining visual consistency without requiring paid storage access.

### **3. Structuring CRUD Operations for Performance**  
**Challenge:** Ensuring scalable **Create, Read, Update, Delete** operations while minimizing unnecessary re-renders and optimizing API calls.  
**Technical Decision:**  
- Used **Firestore Database** to store book inventory efficiently.  
- Leveraged **React hooks** for state management, reducing unnecessary component updates.  
- Optimized API calls to minimize network requests, improving responsiveness.

### **4. Component-Based Architecture for Maintainability**  
**Challenge:** Ensuring singular responsibility for each feature while keeping code maintainable and scalable for future expansions.  
**Technical Decision:**  
- Structured components by feature, ensuring clear separation of concerns.  
- Applied modular folder structuring to maintain **clean code** and improve debugging efficiency.  
- Enforced reusable components to enhance scalability for future feature additions.

### **5. Enhancing UI & Accessibility**  
**Challenge:** Achieving a **high aesthetic quality** while ensuring usability across devices.  
**Technical Decision:**  
- Implemented **responsive styling with CSS** to ensure cross-device compatibility.  
- Incorporated **accessibility-first design principles** to improve readability and usability for all users.

---

## **Outcome & Impact**  
Little Library isn’t just a CRUD app—it represents **problem-solving under constraints, efficient architecture, and strategic technical decisions**. Through practical engineering approaches, I optimized authentication, storage, and performance while maintaining **clean, scalable, and reusable code**. This foundation makes it a **strong template for future inventory systems or scalable React applications**.


--

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

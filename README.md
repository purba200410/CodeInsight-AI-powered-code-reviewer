# CodeInsight AI 🚀

An AI-powered Code Review Assistant that combines static code analysis and Generative AI to review source code, detect bugs, identify security vulnerabilities, and suggest improvements.

---

## Features

### Authentication
- JWT Authentication
- Secure Password Hashing
- Protected Routes
- Input Validation using Zod

### Project Management
- Create Project
- View Projects
- Update Project
- Delete Project

### AI Review (Coming Soon)
- Paste Code Snippet
- Upload Source Files
- ESLint Analysis
- Gemini AI Review
- Code Metrics
- Security Analysis
- Performance Suggestions

### Dashboard (Coming Soon)
- Review History
- Analytics
- Project Statistics

---

## Tech Stack

### Frontend

- React
- TypeScript
- Tailwind CSS
- Monaco Editor

### Backend

- Node.js
- Express.js
- Prisma ORM
- PostgreSQL
- JWT Authentication

### AI

- Google Gemini API

### Static Analysis

- ESLint

---

## Project Structure

```text
client/
server/
docs/
```

---

## Backend Architecture

User

↓

Authentication

↓

Project

↓

Review

↓

Static Analysis

↓

Gemini AI

↓

Database

---

## Database Models

- User
- Project
- Review
- ReviewFinding
- StaticIssue
- ReviewMetric

---

## API

### Authentication

POST /api/auth/register

POST /api/auth/login

GET /api/auth/profile

### Projects

POST /api/projects

GET /api/projects

GET /api/projects/:id

PUT /api/projects/:id

DELETE /api/projects/:id

---

## Current Progress

- [x] Project Setup
- [x] Authentication
- [x] JWT Authorization
- [x] PostgreSQL Database
- [x] Prisma ORM
- [x] Project CRUD
- [x] Zod Validation
- [ ] AI Code Review
- [ ] ESLint Integration
- [ ] File Upload
- [ ] Dashboard
- [ ] Analytics
- [ ] Frontend

---

## Screenshots

Coming Soon

---



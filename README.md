# AI Code Review Assistant - Backend

A production-inspired REST API that powers an AI-assisted code review platform. The backend performs authentication, project management, static code analysis using ESLint, AI-powered code reviews using Google Gemini, and persists review history for future analysis.

---

# Features

## Authentication

* User Registration
* User Login
* JWT Authentication
* Password Hashing using bcrypt
* Protected Routes
* Input Validation using Zod

---

## Project Management

* Create Project
* View All Projects
* View Single Project
* Update Project
* Delete Project

Each authenticated user manages their own projects.

---

## AI Code Review

The review pipeline consists of two stages.

### Stage 1 – Static Analysis

JavaScript code is analyzed using ESLint to detect:

* Undefined variables
* Unused variables
* Syntax problems
* General coding issues

Static analysis results are stored in the database.

---

### Stage 2 – AI Review

The submitted code is sent to Google Gemini.

The AI analyzes the code for:

* Bugs
* Security issues
* Performance improvements
* Code smells
* Readability
* Best practices
* Maintainability

The AI returns structured JSON which is normalized before storing in the database.

---

## Review Management

Every review stores:

* Source Code
* AI Summary
* Overall Score
* AI Findings
* Static Issues
* Quality Metrics
* Review Status

Review Status Lifecycle

```
PROCESSING
      │
      ▼
COMPLETED

or

FAILED
```

---

## Dashboard

Dashboard statistics include:

* Total Projects
* Total Reviews
* Average Score
* Highest Score
* Lowest Score
* Completed Reviews
* Processing Reviews
* Failed Reviews
* Recent Reviews

---

# Tech Stack

| Layer            | Technology        |
| ---------------- | ----------------- |
| Runtime          | Node.js           |
| Framework        | Express.js        |
| Database         | PostgreSQL        |
| ORM              | Prisma            |
| Authentication   | JWT               |
| Password Hashing | bcrypt            |
| Validation       | Zod               |
| Static Analysis  | ESLint            |
| AI Model         | Google Gemini     |
| File Upload      | Multer (Prepared) |

---

# Folder Structure

```
server
│
├── prisma
│   ├── migrations
│   └── schema.prisma
│
├── src
│   ├── app.js
│
│   ├── config
│   │     prisma.js
│
│   ├── controllers
│   │     auth.controller.js
│   │     dashboard.controller.js
│   │     project.controller.js
│   │     review.controller.js
│
│   ├── middleware
│   │     auth.middleware.js
│   │     validate.middleware.js
│
│   ├── routes
│   │     auth.routes.js
│   │     dashboard.routes.js
│   │     project.routes.js
│   │     review.routes.js
│
│   ├── services
│   │
│   │   ├── ai
│   │   │      gemini.service.js
│   │   │
│   │   ├── lint
│   │   │      eslint.service.js
│   │   │
│   │   └── review
│   │          review.service.js
│
│   ├── validators
│   │      auth.validator.js
│   │      project.validator.js
│   │      review.validator.js
│   │
│   └── utils
│          jwt.js
│
├── server.js
├── package.json
└── README.md
```

---

# Database Design

The backend consists of six primary entities.

```
User
 │
 └────────────┐
              │
          Project
              │
              │
           Review
      ┌───────┼────────┐
      │       │        │
      │       │        │
Finding  StaticIssue  Metric
```

---

# Review Pipeline

```
User submits code
        │
        ▼
Validation (Zod)
        │
        ▼
Authentication (JWT)
        │
        ▼
ESLint Static Analysis
        │
        ▼
Google Gemini AI Review
        │
        ▼
Normalize AI Response
        │
        ▼
Save Review
        │
        ├───────────────┐
        ▼               ▼
 Save Findings     Save Static Issues
        │               │
        └──────┬────────┘
               ▼
        Save Metrics
               │
               ▼
      Update Review Status
               │
               ▼
      Return API Response
```

---

# REST API

## Authentication

| Method | Endpoint           | Description         |
| ------ | ------------------ | ------------------- |
| POST   | /api/auth/register | Register a new user |
| POST   | /api/auth/login    | Login user          |
| GET    | /api/auth/profile  | Get logged in user  |

---

## Projects

| Method | Endpoint          | Description       |
| ------ | ----------------- | ----------------- |
| POST   | /api/projects     | Create Project    |
| GET    | /api/projects     | Get User Projects |
| GET    | /api/projects/:id | Get Project       |
| PUT    | /api/projects/:id | Update Project    |
| DELETE | /api/projects/:id | Delete Project    |

---

## Reviews

| Method | Endpoint                        | Description         |
| ------ | ------------------------------- | ------------------- |
| POST   | /api/reviews/snippet            | Review Code Snippet |
| GET    | /api/reviews/project/:projectId | Review History      |
| GET    | /api/reviews/:reviewId          | Review Details      |

---

## Dashboard

| Method | Endpoint             | Description          |
| ------ | -------------------- | -------------------- |
| GET    | /api/dashboard/stats | Dashboard Statistics |

---

# Environment Variables

Create a `.env` file inside the server directory.

```
PORT=5000

DATABASE_URL=your_postgresql_database_url

JWT_SECRET=your_secret_key

GEMINI_API_KEY=your_google_gemini_api_key

GEMINI_MODEL=gemini-2.5-flash-lite
```

---

# Installation

Clone the repository

```
git clone <repository-url>
```

Move to the backend

```
cd server
```

Install dependencies

```
npm install
```

Generate Prisma Client

```
npx prisma generate
```

Push database schema

```
npx prisma db push
```

Run the server

```
npm run dev
```

Server starts on

```
http://localhost:5000
```

---

# Response Structure

Successful API response

```json
{
    "success": true,
    "data": {}
}
```

Validation error

```json
{
    "success": false,
    "message": "Validation failed",
    "errors": []
}
```

Server error

```json
{
    "success": false,
    "message": "Server Error"
}
```

---

# Future Improvements

* File Upload Review
* Python Static Analysis
* Multi-language Support
* Review Trends & Analytics
* Team Collaboration
* AI Chat Assistant for Code
* Swagger/OpenAPI Documentation
* Docker Deployment
* CI/CD Pipeline
* Unit and Integration Tests

---

# Author

**Purba Dey**

Internship Project – AI Code Review Assistant

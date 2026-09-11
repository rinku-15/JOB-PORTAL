🚀 HireHeaven — AI-Powered Job Portal

HireHeaven is a full-stack, microservices-based job portal that connects job seekers and recruiters through a single platform.

The project provides job management, applications, user profiles, AI-powered career guidance, resume analysis, authentication, and subscription payments.

✨ Features

🔐 JWT-based authentication for Job Seekers & Recruiters

💼 Create, search, update and manage jobs

🏢 Recruiter company management

📄 Apply for jobs and manage application status

👤 User profile, skills and resume management

🤖 AI Career Guidance using Google Gemini

📊 AI Resume Analyzer with ATS-oriented scoring

☁️ Resume/profile/company uploads using Cloudinary

💳 Razorpay subscription/payment integration

📧 Asynchronous email processing using Apache Kafka

⚡ Redis-based password-reset token management

🏗️ Architecture

                     Next.js Frontend
                            │
          ┌─────────────────┼─────────────────┐
          ▼                 ▼                 ▼
      Auth Service      User Service      Job Service
          │                 │                 │
          └─────────────────┼─────────────────┘
                            ▼
                        PostgreSQL

       Payment Service ─────────► Razorpay
       Utils Service ───────────► Gemini / Cloudinary
       Kafka ───────────────────► Email Processing
       Redis ───────────────────► Reset Tokens

🛠️ Tech Stack

Frontend

Next.js

React

TypeScript

Tailwind CSS

Axios

React Context API

Backend

Node.js

Express.js

TypeScript

Microservices Architecture

Database & Services

PostgreSQL / Neon

Redis

Apache Kafka

Cloudinary

Google Gemini

Razorpay

Nodemailer

Development

Docker

npm

📂 Project Structure

JOB-PORTAL-development/
├── frontend/
│   └── Next.js application
│
└── services/
    ├── auth/              # Authentication
    ├── user/              # Profiles & applications
    ├── job/               # Jobs & companies
    ├── payment/           # Razorpay integration
    └── utils/             # AI, uploads & email processing

🔄 Application Flow

User
  ↓
Next.js Frontend
  ↓
REST API
  ↓
Microservice
  ↓
PostgreSQL / External Service
  ↓
Response
  ↓
Frontend UI

🤖 AI Resume Analyzer

Google Gemini is used to analyze uploaded resumes and generate:

ATS compatibility score

Formatting score

Keyword score

Structure score

Readability score

Strengths

Suggestions

Summary

💳 Payment Flow

Razorpay is integrated for subscription payments.

Checkout
   ↓
Razorpay Order
   ↓
Payment
   ↓
Signature Verification
   ↓
Subscription Update

Payment signatures are verified using HMAC-SHA256.

🔐 Security

JWT authentication

bcrypt password hashing

Protected APIs

Redis-backed password reset tokens

CORS

Payment signature verification

Parameterized PostgreSQL queries

Environment variables for sensitive configuration

⚙️ Run Locally

Frontend

cd frontend
npm install
npm run dev

Backend Services

Install dependencies and start each service separately:

cd services/auth
npm install
npm run dev

Repeat for:

services/user
services/job
services/payment
services/utils

Configure the required .env variables before starting the services.

📌 Default Service Ports

Service

Port

Frontend

3000

Auth

5000

Utils

5001

User

5002

Job

5003

Payment

5004

🚧 Future Improvements

Automated unit and integration testing

API Gateway

Centralized logging and monitoring

CI/CD pipeline

Stronger request validation

Rate limiting

Production deployment and scalability improvements

📌 Project Status

The project is currently developed and tested locally.Production deployment has not been implemented yet.

👩‍💻 Project Highlights

This project demonstrates practical experience with:

Microservices • REST APIs • Next.js • React • TypeScript • Node.js • Express • PostgreSQL • JWT • Redis • Kafka • Gemini AI • Cloudinary • Razorpay • Docker

⭐ HireHeaven — Building a smarter and more efficient hiring experience.

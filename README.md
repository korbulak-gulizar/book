📚 Book Management Application
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor[JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) https://img.shields.io/badge/JSON_Server-blackbadge ![Responsive](https://img.shields.io/badge/Responsive-Yes-success?style=for-thern book management application built with JavaScript and Vite.

📖 Overview
This application allows users to manage a collection of books through a clean and responsive interface.

The project demonstrates frontend development concepts such as component organization, state management, API communication, and CRUD operations.

✨ Features
Book Management
View Books
Add New Books
Update Book Information
Delete Books
Search Books
Book Details
User Experience
Responsive Design
Interactive Interface
Dynamic Data Rendering
Fast Navigation
Data Management
JSON Server Integration
REST API Requests
CRUD Operations
🛠 Tech Stack
Frontend
JavaScript
HTML5
CSS3
Vite
Backend Mock Server
JSON Server
📂 Project Structure
book/
│
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── styles/
│   └── utils/
│
├── db.json
├── package.json
└── vite.config.js
🚀 Installation
Clone the repository:

git clone https://github.com/korbulak-gulizar/book.git
Install dependencies:

npm install
Start JSON Server:

npx json-server --watch db.json --port 3001
Run application:

npm run dev
🏗 Architecture Diagram
graph TD

User --> Frontend

Frontend --> Pages

Pages --> Components

Components --> APIService

APIService --> JSONServer

JSONServer --> DB[(db.json)]
🔄 User Flow Diagram
flowchart TD

A[Open Application]

A --> B[Book List]

B --> C{Action}

C --> D[Add Book]

C --> E[Edit Book]

C --> F[Delete Book]

C --> G[View Details]

D --> B

E --> B

F --> B

G --> B
🧩 Component Diagram
graph LR

App --> Navbar

App --> BookList

BookList --> BookCard

BookCard --> BookDetails

App --> AddBookForm

App --> EditBookForm

BookList --> APIService

AddBookForm --> APIService

EditBookForm --> APIService
📂 Data Flow Diagram
graph TD

User

User --> UI

UI --> CRUD

CRUD --> GET
CRUD --> POST
CRUD --> PUT
CRUD --> DELETE

GET --> JSONServer
POST --> JSONServer
PUT --> JSONServer
DELETE --> JSONServer

JSONServer --> db.json
🎯 Learning Outcomes
This project demonstrates:

CRUD Operations
REST API Usage
JSON Server
Modern JavaScript
Frontend Architecture
Responsive Design
Component-Based Development
🔮 Future Improvements
Authentication
Categories
Author Management
Pagination
Book Reviews
Favorites Feature
Search Filters
Dark Mode
👩‍💻 Author
Gülizar Körbulak

Frontend Developer

GitHub: GitHub Profile

📄 License
MIT License

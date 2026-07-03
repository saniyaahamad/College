# College Database Management System

## Overview

This project is a College Database Management System developed using Node.js and MySQL. It demonstrates how to connect a Node.js application with a MySQL database and perform basic database operations such as creating databases, creating tables, inserting records, retrieving data, and deleting records.

## Features

- Connect Node.js with MySQL
- Create MySQL database
- Create tables
- Insert records
- Display records
- Delete records
- Retrieve specific data
- Perform CRUD operations

## Technologies Used

- Node.js
- MySQL
- mysql2
- JavaScript
- VS Code

## Project Structure

```
college/
│
├── dbcollege.js
├── package.json
├── package-lock.json
├── node_modules/
└── README.md
```

## Database

**Database Name**

```
college2
```

## Tables

### Faculty

| Column | Type |
|--------|------|
| FacultyName | VARCHAR(25) |
| Subject | VARCHAR(25) |
| Experience | VARCHAR(25) |

### Library Details

| Column | Type |
|--------|------|
| LID | INT |
| LibraryName | VARCHAR(25) |

### Marks

| Column | Type |
|--------|------|
| StudentName | VARCHAR(25) |
| English | INT |
| Maths | INT |
| Science | INT |

## Operations Performed

- Create Database
- Create Tables
- Insert Records
- Retrieve Records
- Delete Records
- Display Table Data

## Installation

Clone the repository:

```bash
git clone https://github.com/saniyaahamad/college.git
```

Navigate to the project folder:

```bash
cd college
```

Install dependencies:

```bash
npm install
```

Install MySQL package:

```bash
npm install mysql2
```

Update the MySQL configuration in `dbcollege.js`:

```javascript
host: "localhost",
user: "root",
password: "your_password",
database: "college2"
```

Run the application:

```bash
node dbcollege.js
```

## Sample SQL Operations

- CREATE DATABASE
- CREATE TABLE
- INSERT INTO
- SELECT
- DELETE

## Output

The application displays:

- Faculty details
- Library details
- Student marks

using the Node.js terminal.


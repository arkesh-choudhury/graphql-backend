# GraphQL Backend

A simple GraphQL backend implementation using Express and Apollo Server with local persistent storage.

## Features

- GraphQL API using Apollo Server
- Express.js for handling HTTP requests
- Local persistent storage with JavaScript objects
- Basic CRUD operations with GraphQL resolvers

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or later)

## Installation

Clone the repository:

```sh
git clone https://github.com/arkesh-choudhury/graphql-backend.git
cd graphql-backend
```

Install dependencies:

```sh
npm install
```

## Running the Server

Start the development server:

```sh
npm start
```

The GraphQL playground will be available at `http://localhost:4444/graphql`.

## API Usage

### Sample Query

#### Get All Books
```graphql
query {
  getBooks {
    id
    name
    author
  }
}
```

#### Get All Authors
```graphql
query {
  getAuthors {
    id
    name
    userName
    email
  }
}
```

#### Get Book by ID
```graphql
query {
  getBook(id: "1") {
    id
    name
    author
  }
}
```

#### Get Author by ID
```graphql
query {
  getBook2(id: "1") {
    id
    name
    userName
    email
  }
}
```

## Folder Structure

```
/graphql-backend
│── src
│   ├── books.js        # Local storage for books
│   ├── authors.js      # Local storage for authors
│   ├── index.js        # Entry point of the application
│
│── package.json
│── README.md
```


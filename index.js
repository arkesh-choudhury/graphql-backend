const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const bodyParser = require('body-parser');
const cors = require('cors');
const {books} = require('./books');
const {authors} = require('./authors');

// const booksArray = books.books;
// console.log(booksArray.map(book => book.id + 1));

async function runServer(){
    const app = express();
    const server = new ApolloServer({typeDefs: `type Book {
               id: ID!
               name: String!
               author: String!
           }

           type Author {
                id: ID!
                name: String!
                userName: String!
                email: String!
           }
           
           type Query {
               getBooks: [Book]
               getAuthors: [Author]
               getBook(id: ID!): Book
               getBook2(id: ID!): Author
           }
           `,
        resolvers: {
            Query:{
                getBooks: () => {
                    return books;
                },
                getAuthors: () =>{return authors;},
                getBook: (parent, {id}) => books.filter( book => book.id == id)[0],
                getBook2: (parent, {id}) => authors.filter(author => author.id==id)[0],
            }
        }
    });

    app.use(bodyParser.json());
    app.use(cors());

    await server.start();
    app.use("/graphql", expressMiddleware(server));

    app.listen(4444, () => {
        console.log("server started listening at port 4444");
    });
}

runServer();
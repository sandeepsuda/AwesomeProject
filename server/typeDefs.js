const {gql} = require('apollo-server');

const typeDefs = gql`
  type Query {
    players: [Player]
    authors: [Author]
  }

  type Player {
    position: String
    name: String
    team: String
    jerseyNumber: Int
    wonSuperBowl: Boolean
  }

  type Book {
    id: String
    title: String
  }

  type Author {
    id: String
    firstName: String
    lastName: String
    books: [Book]
  }

  schema {
    query: Query
  }
`;

module.exports = typeDefs;

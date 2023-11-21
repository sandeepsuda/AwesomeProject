import players from './players.json';
import authors from './authors.json';

//const Player = require('./connectors');

const resolvers = {
  Query: {
    players: () => players,
    authors: () => authors,
  },
};

module.exports = resolvers;

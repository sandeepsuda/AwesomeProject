const mongoose = require('mongoose');

const Schema = mongoose.Schema;

mongoose.connect(
  process.env.CONNECTION_STRING,
  {useNewUrlParser: true},
  error => {
    if (error) {
      console.log('Database Connection Error---------', error);
    }
    console.log('Database connected');
  },
);

const player = new Schema({
  position: String,
  name: String,
  team: String,
  jerseyNumber: Number,
  wonSuperBowl: Boolean,
});

module.exports = mongoose.model('Player', player);

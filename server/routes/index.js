const todoRoutes = require('./todoRouts.js');

module.exports = function(app, db){
  todoRoutes(app, db);
};

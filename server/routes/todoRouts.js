var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {

  // get todo list

  //create todo
  app.post('/todos', (req, res) => {
    const todo = {
      todo_description: req.body.todo_description,
      todo_responsible: req.body.todo_responsible,
      todo_priority: req.body.todo_priority,
      todo_completed: req.body.todo_completed
    };
    db.collection('todos').insert(todo, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send(result.ops[0])
      }
    });
  });

};

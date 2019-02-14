var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {

  // get todo list
  app.get('/todos', (req, res) => {
    db.collection('todos').find().toArray(function(err, result) {
      if (err) {
        res.send({ 'error' : 'An error has occurred'});
      } else {
        res.send(result);
      }
    });
  });

  app.get('/todos/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id' : new ObjectID(id) };
    db.collection('todos').findOne(details, (err, item) => {
      if (err) {
        res.send({'error': "can't find that one"});
      } else {
        res.send(item);
      }
    });
  });

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

  // edit todo
  app.put('/todos/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    const todo = {
      todo_description: req.body.todo_description,
      todo_responsible: req.body.todo_responsible,
      todo_priority: req.body.todo_priority,
      todo_completed: req.body.todo_completed
    }
    db.collection('todos').update(details, todo, (err, result) => {
      if (err) {
          res.send({'error':'An error has occurred'});
      } else {
          res.send(todo);
      }
    });
  });

};

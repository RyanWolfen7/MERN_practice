import React, {Component} from 'react'
import axios from 'axios';

class CreateTodo extends Component {
  constructor(props) {
    super(props);

    // binds the stat so we can borrow it for other methods
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeResponsible = this.onChangeResponsible.bind(this);
    this.onChangePriority = this.onChangePriority.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      todo_description: '',
      todo_responsible: '',
      todo_priority: '',
      todo_completed: false
    }
  }

  onChangeDescription(e){
    this.setState({
      todo_description: e.target.value
    });
  }
  onChangeResponsible(e) {
       this.setState({
           todo_responsible: e.target.value
       });
   }

   onChangePriority(e) {
       this.setState({
           todo_priority: e.target.value
       });
   }

   onSubmit(e) {
     // Because not hooked up to a backend Remove after backend complete
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Todo Description: ${this.state.todo_description}`);
        console.log(`Todo Responsible: ${this.state.todo_responsible}`);
        console.log(`Todo Priority: ${this.state.todo_priority}`);

        const newTodo = {
            todo_description: this.state.todo_description,
            todo_responsible: this.state.todo_responsible,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed
        };
        
        const config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };
        const qs = require('qs');

        axios.post('http://localhost:8000/todos', qs.stringify(newTodo), config)
            .then(res => console.log(res.data));

        this.setState({
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        })
    }

  render() {
    return (
      <div style={{marginTop: 10}}>
                <h3>Create New Todo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.todo_description}
                                onChange={this.onChangeDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input
                                type="text"
                                className="form-control"
                                value={this.state.todo_responsible}
                                onChange={this.onChangeResponsible}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityLow"
                                    value="Low"
                                    checked={this.state.todo_priority==='Low'}
                                    onChange={this.onChangePriority}
                                    />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityMedium"
                                    value="Medium"
                                    checked={this.state.todo_priority==='Medium'}
                                    onChange={this.onChangePriority}
                                    />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityHigh"
                                    value="High"
                                    checked={this.state.todo_priority==='High'}
                                    onChange={this.onChangePriority}
                                    />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
    )
  }
}

export default CreateTodo;

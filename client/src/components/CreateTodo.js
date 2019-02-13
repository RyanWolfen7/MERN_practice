import React, {Component} from 'react'


class CreateTodo extends Component {
  constructor(props) {
    super(props);

    this.stat = {
      todo_description: '',
      todo_responsible: '',
      todo_priority: '',
      todo_completed: false
    }
    // binds the stat so we can borrow it for other methods
    this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
    this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
    this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onchangeDescription(state){
    this.setState({
      todo_description: state.target.value
    });
  }
  onChangeResponsible(state) {
       this.setState({
           todo_responsible: state.target.value
       });
   }

   onChangePriority(state) {
       this.setState({
           todo_priority: state.target.value
       });
   }

   onSubmit(state) {
     // Because not hooked up to a backend Remove after backend complete
        state.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Todo Description: ${this.state.todo_description}`);
        console.log(`Todo Responsible: ${this.state.todo_responsible}`);
        console.log(`Todo Priority: ${this.state.todo_priority}`);

        this.setState({
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        })
    }

  render() {
    return (
      <div>
        Create Todo
      </div>
    )
  }
}

export default CreateTodo;

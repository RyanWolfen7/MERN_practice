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

  render() {
    return (
      <div>
        Create Todo
      </div>
    )
  }
}

export default CreateTodo;

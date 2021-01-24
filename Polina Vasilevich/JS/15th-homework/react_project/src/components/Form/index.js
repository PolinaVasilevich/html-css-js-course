import React from "react";
import { connect } from "react-redux";
import { createAddTodo } from "../../ducks/todo";
class Form extends React.Component {
  state = {
    value: "",
  };

  onChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  onClick = (e) => {
    const { addTodo } = this.props;
    const { value } = this.state;
    e.preventDefault();

    addTodo(value);
  };

  render() {
    const { buttonLabel } = this.props;
    const { value } = this.state;
    return (
      <form>
        <input type="text" value={value} onChange={this.onChange} />
        <button onClick={this.onClick}>{buttonLabel}</button>
      </form>
    );
  }
}

const mapStateToProps = () => {};
//   return {
//     todo: state.todo,
//     counter: state.counter,
//     todoList: state.todo.list,
//     counterValue: state.counter.count,
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(createAddTodo(todo)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);

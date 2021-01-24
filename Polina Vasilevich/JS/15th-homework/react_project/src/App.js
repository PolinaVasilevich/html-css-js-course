import React from "react";
import Form from "./components/Form";
import List from "./components/List";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>ToDo List</h1>
        </header>
        <Form buttonLabel="Add" />
        <List />
      </div>
    );
  }
}

export default App;

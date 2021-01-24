import React from "react";
import { connect } from "react-redux";
const List = ({ data }) => (
  <ul>
    {data.map((item) => (
      <li key={item.id}>{item.value}</li>
    ))}
  </ul>
);

const mapStateToProps = (state) => ({
  data: state.todo.list,
});

export default connect(mapStateToProps)(List);

const initialTotoState = {
  list: [],
};

export const ADD_TODO = "ADD_TODO";

export const createAddTodo = (data) => ({
  type: ADD_TODO,
  payload: data,
});

const todo = (state = initialTotoState, action) => {
  switch (action.type) {
    case ADD_TODO:
      console.log(action);
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: state.list.length + 1,
            value: action.payload,
          },
        ],
      };

    default:
      return {
        ...state,
      };
  }
};

export default todo;

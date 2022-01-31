import { v4 as uuidv4 } from "uuid";

export default function reducer(state, { type, payload }) {
  switch (type) {
    case "add-todo":
      return {
        todos: [
          ...state.todos,
          { id: uuidv4(), title: payload, isCompleted: false },
        ],
      };
    case "check-todo":
      return { todos: checkCondition(state.todos, payload) };
    case "delete-todo":
      return { todos: state.todos.filter((todo) => todo.id !== payload) };
    default:
      return state;
  }
}

const checkCondition = (todos, payload) => {
  // Deep Copy will play a key role here... Be carefull..

  const todoList = [...todos];
  const finalCopy = [];
  for (let i = 0; i < todoList.length; i++) {
    finalCopy.push({ ...todoList[i] });
  }
  for (let i = 0; i < finalCopy.length; i++) {
    if (finalCopy[i].id === payload) {
      finalCopy[i].isCompleted = !finalCopy[i].isCompleted;
    }
  }
  return finalCopy;
};

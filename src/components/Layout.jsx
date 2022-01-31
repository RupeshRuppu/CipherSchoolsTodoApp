import { useReducer, useRef, useState } from "react";
import Todo from "./Todo";
import reducer from "../reducers/reducer";
import Modal from "./Modal";

const Layout = () => {
  const inputReference = useRef("");
  const [activeState, setActiveState] = useState(false);
  const [state, dispatch] = useReducer(reducer, {
    todos: [],
  });

  const handleAddTodoEvent = (action) => {
    if (
      typeof action.payload === "object" ||
      action.payload === "" ||
      action.payload.match(/[a-zA-Z]/i) === null
    ) {
      setActiveState(true);
      return;
    } else {
      dispatch(action);
    }
  };

  return (
    <>
      <Modal active={activeState} setState={setActiveState} />
      <div className="relative">
        <section
          id="header_section"
          className="h-28 flex justify-center items-center"
        >
          <h1 className="text-5xl text-white font-bold tracking-wide">
            Todo Application
          </h1>
        </section>
        <section
          id="add_todo_section"
          className="relative flex flex-col w-3/5 left-1/2 -translate-x-1/2 mt-8"
        >
          <h1 className="m-4 text-3xl text-white tracking-wide">Add Todo</h1>
          <input
            ref={inputReference}
            type="text"
            name="text"
            id="text"
            className="px-5 bg-slate-400 text-slate-600 w-11/12 py-1 border-none outline-none bg-none rounded-3xl text-2xl 
          caret-purple-600 focus:ring-4 ring-blue-500"
            onChange={(e) => {
              setActiveState(false);
              inputReference.current = e.target.value;
            }}
          />
          <button
            className="mt-4 w-28 bg-sky-600 px-5 py-2 rounded-full text-white uppercase 
          active:ring-2 active:ring-offset-2
          tracking-wider"
            onClick={() =>
              handleAddTodoEvent({
                type: "add-todo",
                payload: inputReference.current,
              })
            }
          >
            Submit
          </button>
        </section>
        <section
          id="todos_list"
          className="relative top-16 flex flex-col space-y-4 items-center mb-24"
        >
          {state.todos.length === 0 ? (
            <div className="text-slate-900 text-4xl tracking-wide font-bold">
              No Tasks To Do....
            </div>
          ) : (
            state.todos.map((todo) => (
              <Todo key={todo.id} todo={todo} dispatch={dispatch} />
            ))
          )}
        </section>
      </div>
    </>
  );
};

export default Layout;

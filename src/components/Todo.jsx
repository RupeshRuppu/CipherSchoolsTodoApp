import { XIcon, CheckIcon } from "@heroicons/react/outline";

const Todo = ({ todo: { title, id, isCompleted }, dispatch }) => {
  return (
    <div className="bg-slate-800/25 w-3/4 rounded-lg flex justify-between items-center p-4">
      <h1
        className={`text-3xl text-gray-300 ml-6 ${
          isCompleted && "line-through"
        }`}
      >
        {title}
      </h1>
      <div className="flex w-32 justify-around">
        <CheckIcon
          width={40}
          height={40}
          className={`bg-sky-700 rounded-full text-white p-2 cursor-pointer ${
            isCompleted && "bg-green-500"
          }`}
          onClick={() => dispatch({ type: "check-todo", payload: id })}
        />
        <XIcon
          width={40}
          height={40}
          className="bg-red-600 rounded-full text-white p-2 cursor-pointer"
          onClick={() => dispatch({ type: "delete-todo", payload: id })}
        />
      </div>
    </div>
  );
};

export default Todo;

import { XIcon } from "@heroicons/react/outline";

const Modal = ({ active, setState }) => {
  return (
    <div
      className={`bg-slate-400 w-96 flex justify-around items-center font-semibold
    rounded-md py-1 fixed -right-96 transition-all duration-500 top-28 z-10 select-none ${
      active && "right-8"
    }`}
    >
      <h1 className="text-xl">Todo Task Must Not Be Empty....</h1>
      <XIcon
        width={35}
        height={35}
        className="p-2 bg-red-600 rounded-full cursor-pointer "
        onClick={() => setState(false)}
      />
    </div>
  );
};

export default Modal;

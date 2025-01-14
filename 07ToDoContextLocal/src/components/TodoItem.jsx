import { useState } from "react";
import { useTodo } from "../context/";

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggle = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`flex justify-center items-center border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="peer h-5 w-6 cursor-pointer transition-all appearance-none rounded-full bg-slate-100 shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
        checked={todo.completed}
        onChange={toggle}
      />
      <input
        type="text"
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
        className={`text-transform: capitalize border outline-none w-full rounded-lg bg-transparent ${
          isTodoEditable
            ? "border-black/10 px-2 bg-slate-200"
            : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
      />
      <button
        className="text-sm border border-black-10 bg-gray-50 hover:bg-gray-100 p-1 rounded-md disabled:opacity-50"
        onClick={() => {
          if (isTodoEditable) {
            editTodo();
          } else {
            setIsTodoEditable((prev) => !prev);
          }
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "💾" : "✏️"}
      </button>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-sm border border-black-10 bg-gray-50 hover:bg-gray-100 p-1 rounded-md disabled:opacity-50"
      >
        🗑
      </button>
    </div>
  );
}

export default TodoItem;

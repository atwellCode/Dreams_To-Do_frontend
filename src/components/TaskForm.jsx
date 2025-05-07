import { useState } from "react";
import { createTask } from "../services/taskService";
import { useAuth } from "../context/AuthContext";
import { FiPlus } from "react-icons/fi"; // Plus icon

export default function TaskForm({ refresh }) {
  const [title, setTitle] = useState("");
  const { token } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      await createTask({ title }, token);
      setTitle("");
      refresh();
    } catch (err) {
      console.error("Task creation failed:", err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/20 backdrop-blur-md p-4 sm:p-6 rounded-xl shadow-md w-full max-w-2xl mx-auto flex items-center gap-4 border border-white/30"
    >
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter a new task..."
        className="flex-1 px-4 py-2 rounded-lg border border-white/30 bg-white/70 text-black focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-700"
      />

      <button
        type="submit"
        className="min-w-[48px] min-h-[48px] rounded-full bg-indigo-500 text-white flex items-center justify-center hover:bg-indigo-600 transition-all duration-200 shadow-md"
        title="Add Task"
      >
        <FiPlus className="text-xl" />
      </button>
    </form>
  );
}

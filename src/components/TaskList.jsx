import React, { useEffect, useState } from "react";
import { getTasks, deleteTask, updateTask } from "../services/taskService";
import { useAuth } from "../context/AuthContext";
import { PencilIcon, TrashIcon, CheckIcon } from "@heroicons/react/24/solid";

const TaskList = () => {
  const { token } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [editTaskId, setEditTaskId] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");

  const fetchTasks = async () => {
    try {
      const res = await getTasks(token);
      setTasks(res.data);
    } catch (err) {
      console.error("Failed to fetch tasks:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTask(id, token);
      fetchTasks();
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  const handleEdit = (task) => {
    setEditTaskId(task._id);
    setEditedTitle(task.title);
  };

  const handleUpdate = async (id) => {
    try {
      await updateTask(id, { title: editedTitle }, token);
      setEditTaskId(null);
      fetchTasks();
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  const [completedTasks, setCompletedTasks] = useState({});

  const toggleComplete = (id) => {
    setCompletedTasks((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="mt-4">
      <h2 className="text-3xl  uppercase font-bold text-white mb-4 ">
        Your Tasks
      </h2>
      <ul className="space-y-4  overflow-y-auto pr-2">
        {tasks.map((task) => {
          const isCompleted = completedTasks[task._id];
          const formattedDate = new Date(task.createdAt).toLocaleString();

          return (
            <li
              key={task._id}
              className="bg-white/30 backdrop-blur-lg p-2 rounded-lg shadow-md flex items-center justify-between border border-white/20"
            >
              {editTaskId === task._id ? (
                <div className="flex flex-col md:flex-row md:items-center w-full gap-3">
                  <input
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                    className="flex-1 p-2 rounded border focus:outline-none"
                  />
                  <button
                    onClick={() => handleUpdate(task._id)}
                    className="text-lime-500 hover:text-lime-600"
                    title="Save"
                  >
                    <CheckIcon className="w-6 h-6" />
                  </button>
                </div>
              ) : (
                <div className="flex flex-col md:flex-row md:items-center justify-between w-full">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={isCompleted || false}
                      onChange={() => toggleComplete(task._id)}
                      className="w-5 h-5"
                    />
                    <div>
                      <span
                        className={`text-lg ${
                          isCompleted
                            ? "line-through text-white/70"
                            : "text-gray-800 capitalize"
                        }`}
                      >
                        {task.title}
                      </span>
                      <div className="text-sm text-gray-500">
                        {formattedDate}
                      </div>
                    </div>
                  </div>
                  <div className="flex  px-2 gap-4 mt-2 md:mt-0">
                    <button
                      className="text-orange-400 hover:text-orange-600"
                      onClick={() => handleEdit(task)}
                      title="Edit"
                    >
                      <PencilIcon className="w-6 h-6" />
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleDelete(task._id)}
                      title="Delete"
                    >
                      <TrashIcon className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TaskList;

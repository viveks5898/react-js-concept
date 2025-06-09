"use client";
import React, { useState } from "react";

const Page = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleClick = () => {
    if (!task.trim()) return;
    setTasks((prev) => [...prev, { name: task, isChecked: false }]);
    setTask("");
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, idx) => idx !== index));
  };

  const handleChecked = (index) => {
    setTasks((prev) =>
      prev.map((item, idx) =>
        idx === index ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleClearAll = () => {
    setTasks([]);
  };

  const handleClearCompleted = () => {
    setTasks(tasks.filter((item) => !item.isChecked));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.isChecked;
    if (filter === "active") return !task.isChecked;
    return true;
  });

  return (
    <div className="max-w-[800px] w-full m-auto container p-8">
      <h2 className="text-3xl font-bold mb-3">ToDo Manager</h2>

      {/* Input Section */}
      <div className="flex gap-3 items-center mb-6">
        <input
          type="text"
          value={task}
          onChange={handleChange}
          className="px-3 py-2 border rounded w-full"
          placeholder="Enter a task"
        />
        <button
          onClick={handleClick}
          disabled={task.length === 0}
          className={`bg-amber-800 ${
            task.length === 0 ? "cursor-not-allowed" : "cursor-pointer"
          } disabled:opacity-60 text-white px-5 py-2 rounded`}
        >
          Add Task
        </button>
      </div>

      {/* Filters + Actions */}
      {tasks.length > 0 && (
        <>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">
              Show Tasks ({filteredTasks.length}/{tasks.length})
            </h2>

            <div className="flex gap-3 items-center">
              <select
                className="border bg-amber-950 text-white px-2 py-2 rounded"
                onChange={handleFilterChange}
                value={filter}
              >
                <option value={"all"}>All</option>
                <option value={"completed"}>Completed</option>
                <option value={"active"}>Active</option>
              </select>

              <button
                onClick={handleClearCompleted}
                className="bg-yellow-600 text-white px-4 py-2 rounded"
              >
                Clear Completed
              </button>

              <button
                onClick={handleClearAll}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Clear All
              </button>
            </div>
          </div>

          {/* Task List */}
          {filteredTasks.map((item, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center bg-gray-100 p-3 my-2 rounded"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={item.isChecked}
                  onChange={() => handleChecked(idx)}
                />
                <p
                  className={`text-xl ${
                    item.isChecked ? "line-through text-gray-500" : ""
                  }`}
                >
                  {item.name}
                </p>
              </div>
              <button
                onClick={() => handleDelete(idx)}
                className="text-red-500 text-xl font-bold"
              >
                X
              </button>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Page;

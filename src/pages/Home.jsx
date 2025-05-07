import React from "react";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-sky-500 via-purple-600 to-indigo-500 overflow-hidden">
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-4">
        <div className="w-full max-w-5xl bg-white/30 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg p-6 sm:p-8 md:p-10 flex flex-col space-y-6 h-full max-h-[calc(100vh-160px)] overflow-hidden">
          {/* Header */}
          <h1 className="text-3xl sm:text-4xl  text-white text-center drop-shadow">
            Welcome to{" "}
            <span className="text-yellow-300 font-[Pacifico]">
              Dreams To-Do
            </span>
          </h1>

          {/* Task Form */}
          <TaskForm refresh={() => window.location.reload()} />

          {/* Scrollable Task List */}
          <div className="flex-grow overflow-y-auto custom-scrollbar pr-2">
            <TaskList />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;

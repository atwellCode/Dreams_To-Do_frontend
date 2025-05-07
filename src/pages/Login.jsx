import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3089/api/auth/login", {
        name,
        password,
      });
      login(res.data.token);
      navigate("/");
    } catch (err) {
      alert("Login failed: " + err.response?.data?.message || err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-purple-600 via-pink-500 to-red-400 px-4">
      <div className="text-center space-y-2 mb-6">
        <p className="text-3xl font-extrabold text-white drop-shadow-sm">
          Welcome
        </p>
        <p className="text-md text-white opacity-90">To</p>
        <p className="text-5xl font-black  font-[Pacifico] text-gray-700 tracking-wider">
          Dreams To-Do
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white/30 backdrop-blur-xl shadow-xl rounded-2xl p-8 w-full max-w-md space-y-5 border border-white/20 transition-all duration-300"
      >
        <h2 className="text-2xl font-bold text-center text-white uppercase drop-shadow">
          Login
        </h2>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 rounded-md bg-white/80 placeholder-gray-600 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          required
        />

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 rounded-md bg-white/80 placeholder-gray-600 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
          required
        />

        <button
          type="submit"
          className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md transition duration-300 shadow-md"
        >
          Login
        </button>

        <p className="text-md text-white text-center mt-4">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-gray-500 hover:text-yellow-100 underline underline-offset-2 transition"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;

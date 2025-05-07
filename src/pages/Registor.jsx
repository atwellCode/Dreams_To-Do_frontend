import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3089/api/auth/register", {
        name,
        password,
      });
      alert("Account created successfully! Please log in.");
      navigate("/login");
    } catch (err) {
      alert(
        "Registration failed: " +
          (err.response?.data?.message || err.message)
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 px-4">
      <div className="text-center mb-6 space-y-2">
        <p className="text-3xl font-extrabold text-white drop-shadow-sm">
          Create Account
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white/30 backdrop-blur-xl shadow-xl rounded-2xl p-8 w-full max-w-md space-y-5 border border-white/20 transition-all duration-300"
      >
        <h2 className="text-2xl font-bold text-center text-white uppercase drop-shadow">
          Register
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
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 rounded-md bg-white/80 placeholder-gray-600 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
          required
        />

        <button
          type="submit"
          className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md transition duration-300 shadow-md"
        >
          Register
        </button>

        <p className="text-md text-white text-center mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-gray-500 hover:text-yellow-100 underline underline-offset-2 transition"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;

import { useState } from "react";

export default function Navbar({ darkMode, setDarkMode, setHandle }) {
  const [input, setInput] = useState("");

  const submitHandle = () => {
    if (input.trim() !== "") {
      setHandle(input.trim());
      setInput("");
    }
  };

  return (
    <div className="w-full px-8 py-4 border-b 
        bg-white border-gray-200 
        dark:bg-zinc-900 dark:border-zinc-800 
        flex justify-between items-center transition-colors duration-300">

      {/* Left Section */}
      <div className="flex items-center gap-8">
        <h1 className="text-xl font-bold tracking-wide">
          CF Dashboard
        </h1>

        <nav className="hidden md:flex gap-6 text-sm text-gray-600 dark:text-zinc-400">
          <a href="#" className="hover:text-purple-500 transition">Home</a>
          <a href="#" className="hover:text-purple-500 transition">Contests</a>
          <a href="#" className="hover:text-purple-500 transition">Problems</a>
          <a href="#" className="hover:text-purple-500 transition">Rating</a>
          <a href="#" className="hover:text-purple-500 transition">Calendar</a>
        </nav>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter handle..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="px-3 py-1 rounded-lg text-sm outline-none border
              bg-gray-100 border-gray-300
              dark:bg-zinc-800 dark:border-zinc-700
              focus:border-purple-500 transition"
          />

          <button
            onClick={submitHandle}
            className="px-3 py-1 rounded-lg bg-purple-600 hover:bg-purple-700 text-sm text-white transition"
          >
            Search
          </button>
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-1 rounded-lg border text-sm
            border-gray-300 hover:border-purple-500
            dark:border-zinc-700 transition"
        >
          {darkMode ? "Light" : "Dark"}
        </button>

      </div>
    </div>
  );
}

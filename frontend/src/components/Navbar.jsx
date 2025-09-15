import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="text-xl font-bold text-gray-800">
          Navbar
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle navigation"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div className={`md:flex items-center space-x-4 ${isOpen ? "block" : "hidden"}`}>
          <a href="/register" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600">
            Register
          </a>
          <a href="/login" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}

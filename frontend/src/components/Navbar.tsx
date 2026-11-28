import { Link } from "react-router-dom";
import { Plane } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b bg-white px-6 py-4">
      <Link to="/" className="flex items-center gap-2">
        <Plane className="text-indigo-600" size={28} />
        <span className="text-xl font-bold text-gray-900">
          TripSync AI
        </span>
      </Link>

      <div className="flex items-center gap-5">
        <Link to="/" className="text-gray-600 hover:text-indigo-600">
          Home
        </Link>

        <Link to="/login" className="text-gray-600 hover:text-indigo-600">
          Login
        </Link>

        <Link
          to="/register"
          className="rounded-lg bg-indigo-600 px-4 py-2 text-white"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}
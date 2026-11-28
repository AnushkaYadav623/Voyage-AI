import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import { registerUser } from "../services/authService";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setError("");

    if (password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    try {
      setLoading(true);

      await registerUser({ name, email, password });

      navigate("/login");
    } catch (err: any) {
      setError(
        err.response?.data?.message || "Registration failed."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-indigo-50 px-4">
      <form
        onSubmit={handleRegister}
        className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl"
      >
        <h1 className="text-3xl font-bold text-gray-900">
          Create Account
        </h1>

        <p className="mb-7 mt-2 text-gray-500">
          Start planning amazing trips with your friends.
        </p>

        <Input
          label="Full Name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <Input
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Input
          label="Password"
          type={showPassword ? "text" : "password"}
          placeholder="Minimum 8 characters"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label className="mb-5 flex items-center gap-2 text-sm text-gray-600">
          <input
            type="checkbox"
            checked={showPassword}
            onChange={(e) => setShowPassword(e.target.checked)}
          />
          Show password
        </label>

        {error && (
          <p className="mb-4 text-sm text-red-600">{error}</p>
        )}

        <Button type="submit" disabled={loading} className="w-full">
          {loading ? "Creating Account..." : "Register"}
        </Button>

        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import { loginUser } from "../services/authService";
import { useAuth } from "../context/AuthContext";
import type { User } from "../types";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setError("");

    try {
      setLoading(true);

      const result = await loginUser({ email, password });

      login(result.token, result.user as User);

      navigate("/dashboard");
    } catch (err: any) {
      setError(
        err.response?.data?.message || "Invalid email or password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-indigo-50 px-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl"
      >
        <h1 className="text-3xl font-bold">Welcome Back!</h1>

        <p className="mb-7 mt-2 text-gray-500">
          Login to continue planning your trips.
        </p>

        <Input
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && (
          <p className="mb-4 text-sm text-red-600">{error}</p>
        )}

        <Button type="submit" disabled={loading} className="w-full">
          {loading ? "Logging in..." : "Login"}
        </Button>

        <p className="mt-6 text-center text-sm">
          Don't have an account?{" "}
          <Link to="/register" className="text-indigo-600">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
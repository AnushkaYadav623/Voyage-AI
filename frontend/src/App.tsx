import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

import { AuthProvider, useAuth } from "./context/AuthContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

// Temporary pages until their full implementations are added.
function Placeholder({ title }: { title: string }) {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="mt-3 text-gray-500">
        This feature is under development.
      </p>
    </div>
  );
}

function ProtectedLayout() {
  const { user } = useAuth();

  return user ? <Outlet /> : <Navigate to="/login" replace />;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<ProtectedLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/create-trip" element={<Placeholder title="Create Trip" />} />
        <Route path="/join-trip" element={<Placeholder title="Join Trip" />} />

        <Route path="/trips/:tripId" element={<Placeholder title="Trip Workspace" />} />
        <Route path="/preferences/:tripId" element={<Placeholder title="Trip Preferences" />} />
        <Route path="/recommendations/:tripId" element={<Placeholder title="AI Recommendations" />} />
        <Route path="/voting/:tripId" element={<Placeholder title="Voting" />} />
        <Route path="/conflicts/:tripId" element={<Placeholder title="Conflict Resolution" />} />
        <Route path="/itinerary/:tripId" element={<Placeholder title="AI Itinerary" />} />
        <Route path="/modify-trip/:tripId" element={<Placeholder title="Modify Trip" />} />
        <Route path="/expenses/:tripId" element={<Placeholder title="Expenses" />} />
        <Route path="/notifications" element={<Placeholder title="Notifications" />} />
        <Route path="/profile" element={<Placeholder title="Profile" />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}
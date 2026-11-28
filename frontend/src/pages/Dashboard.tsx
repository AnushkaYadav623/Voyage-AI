import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Plus, LogIn } from "lucide-react";

import api from "../services/api";
import type { Trip } from "../types";
import TripCard from "../components/TripCard";
import Button from "../components/Button";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  const [trips, setTrips] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    api.get("/trips/my-trips")
      .then((response) => setTrips(response.data))
      .catch(() => setError("Unable to load your trips."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">
              Welcome, {user?.name || "Traveler"}!
            </h1>
            <p className="mt-2 text-gray-500">
              Let's plan your next adventure.
            </p>
          </div>

          <div className="flex gap-3">
            <Link to="/join-trip">
              <Button variant="secondary">
                <LogIn size={16} className="mr-2 inline" />
                Join Trip
              </Button>
            </Link>

            <Link to="/create-trip">
              <Button>
                <Plus size={16} className="mr-2 inline" />
                Create Trip
              </Button>
            </Link>
          </div>
        </div>

        <h2 className="mb-6 mt-12 text-xl font-bold">
          My Trips
        </h2>

        {loading ? (
          <p>Loading trips...</p>
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : trips.length === 0 ? (
          <div className="rounded-2xl border border-dashed bg-white p-12 text-center">
            <h3 className="text-xl font-bold">
              No trips planned yet!
            </h3>
            <p className="mt-2 text-gray-500">
              Create a trip or join your friends.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {trips.map((trip) => (
              <TripCard key={trip.id} trip={trip} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
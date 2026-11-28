import { Link } from "react-router-dom";
import type { Trip } from "../types";

export default function TripCard({ trip }: { trip: Trip }) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-bold">{trip.name}</h3>

        <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs text-indigo-600">
          {trip.status}
        </span>
      </div>

      <p className="mt-3 text-sm text-gray-500">
        📍 {trip.startingLocation}
      </p>

      <p className="mt-2 text-sm text-gray-500">
        📅 {trip.startDate} – {trip.endDate}
      </p>

      <p className="mt-2 text-sm text-gray-500">
        👥 {trip.memberCount} members
      </p>

      <Link
        to={`/trips/${trip.id}`}
        className="mt-5 inline-block font-semibold text-indigo-600"
      >
        Open Workspace →
      </Link>
    </div>
  );
}
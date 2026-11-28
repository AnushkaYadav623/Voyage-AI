import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
  Users,
  MapPin,
  Vote,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Collaborative Planning",
    description: "Plan trips together with your friends.",
  },
  {
    icon: Sparkles,
    title: "AI Recommendations",
    description: "Discover destinations based on group preferences.",
  },
  {
    icon: Vote,
    title: "Group Voting",
    description: "Let everyone vote on destinations and activities.",
  },
  {
    icon: MapPin,
    title: "Smart Itinerary",
    description: "Generate organized day-by-day travel plans.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="grid items-center gap-10 px-8 py-20 md:grid-cols-2 md:px-20">
        <div>
          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm text-indigo-700">
            Your AI-powered travel companion
          </span>

          <h1 className="mt-7 text-5xl font-extrabold leading-tight text-gray-900">
            Your group trip,
            <span className="text-indigo-600"> perfectly planned.</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Stop struggling with spreadsheets and endless group chats.
            Plan, vote, organize and travel together with TripSync AI.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/register"
              className="rounded-xl bg-indigo-600 px-7 py-3 font-semibold text-white"
            >
              Start Planning
            </Link>

            <Link
              to="/login"
              className="rounded-xl border bg-white px-7 py-3 font-semibold"
            >
              Login
            </Link>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1000"
          alt="Beautiful mountain travel destination"
          className="h-96 w-full rounded-3xl object-cover shadow-xl"
        />
      </section>

      <section className="px-8 py-16 md:px-20">
        <h2 className="text-center text-3xl font-bold">
          Everything you need for a perfect group trip
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl border bg-white p-6 shadow-sm"
              >
                <Icon size={35} className="text-indigo-600" />

                <h3 className="mt-5 font-bold">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
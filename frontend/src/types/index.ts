export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Trip {
  id: number;
  name: string;
  startingLocation: string;
  destination?: string;
  startDate: string;
  endDate: string;
  description: string;
  memberCount: number;
  status: "UPCOMING" | "ONGOING" | "COMPLETED";
}

export interface Member {
  id: number;
  name: string;
  role: "ADMIN" | "MEMBER";
  preferencesSubmitted: boolean;
}

export interface Destination {
  id: number;
  name: string;
  description: string;
  estimatedCost: number;
  bestTime: string;
  imageUrl: string;
  reason: string;
}

export interface PollOption {
  id: number;
  name: string;
  votes: number;
}

export interface Poll {
  id: number;
  question: string;
  status: "OPEN" | "CLOSED";
  options: PollOption[];
  deadline: string;
}

export interface Expense {
  id: number;
  title: string;
  amount: number;
  paidBy: string;
  category: string;
}
"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";

const dummyDonations = [
  {
    id: 1,
    title: "Winter Jackets",
    category: "Clothes",
    image: "/1.png",
    method: "Pickup",
  },
  {
    id: 2,
    title: "Fresh Vegetables",
    category: "Food",
    image: "/2.png",
    method: "Delivery",
  },
  {
    id: 3,
    title: "Story Books",
    category: "Books",
    image: "/3.png",
    method: "Pickup",
  },
];

const categories = [
  { label: "All", image: "/Box.png" },
  { label: "Clothes", image: "Clothes.png" },
  { label: "Food", image: "/Food.png" },
  { label: "Books", image: "/Book.png" },
  { label: "Electronics", image: "/Electronic.png" },
  { label: "Toys", image: "/Toys.png" },
];

const methods = [
  { label: "All", image: "/Group.png" },
  { label: "Pickup", image: "/Pickup.png" },
  { label: "Delivery", image: "/Delivered.png" },
];

export default function BrowsePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedMethod, setSelectedMethod] = useState("All");

  const filteredDonations = dummyDonations.filter((d) => {
    const categoryMatch =
      selectedCategory === "All" || d.category === selectedCategory;
    const methodMatch = selectedMethod === "All" || d.method === selectedMethod;
    return categoryMatch && methodMatch;
  });

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto p-6">
        {/* Heading */}
        <h1 className="text-5xl font-sans text-center mb-8 text-[#5E4132]">
          Browse Donations
        </h1>

        {/* Category Filter (Top Icons) */}
        <div className="flex justify-center gap-6 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => setSelectedCategory(cat.label)}
              className={`flex flex-col items-center p-3 rounded-xl transition ${
                selectedCategory === cat.label
                  ? "bg-[#C99372] text-white"
                  : "bg-white text-gray-700 hover:bg-[#F2E6DD]"
              }`}
            >
              <img
                src={cat.image}
                alt={cat.label}
                className="w-12 h-12 object-contain mb-2 rounded-full border border-gray-300"
              />
              <span className="text-sm">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Layout with Sticky Sidebar + Cards */}
        <div className="flex gap-8">
          {/* Sticky Sidebar */}
          <aside className="w-50 h-fit bg-white border border-gray-200 rounded-lg shadow-md p-5 sticky top-24">
            <div className="flex flex-col gap-6">
              {methods.map((m) => (
                <button
                  key={m.label}
                  onClick={() => setSelectedMethod(m.label)}
                  className={`flex flex-col items-center p-4 rounded-xl border transition ${
                    selectedMethod === m.label
                      ? "bg-[#C99372] text-white border-[#C99372]"
                      : "bg-white border-gray-300 text-gray-700 hover:bg-[#F2E6DD]"
                  }`}
                >
                  <img
                    src={m.image}
                    alt={m.label}
                    className="w-12 h-12 mb-2 object-contain"
                  />
                  <span className="text-sm font-medium">{m.label}</span>
                </button>
              ))}
            </div>
          </aside>

          {/* Cards Grid */}
          <div className="flex-1 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredDonations.map((donation) => (
              <Link
                key={donation.id}
                href={`/browse/${donation.id}`}
                className="block bg-white rounded-xl border shadow-md hover:shadow-lg transition p-4"
              >
                <img
                  src={donation.image}
                  alt={donation.title}
                  className="w-full h-70 object-cover rounded-md mb-3"
                />
                <h2 className="text-xl font-semibold text-[#5E4132] mb-1">
                  {donation.title}
                </h2>
                <p className="text-gray-600 text-sm mb-1">
                  {donation.category}
                </p>
                <span
                  className={`inline-block text-xs px-3 py-1 rounded-full ${
                    donation.method === "Pickup"
                      ? "bg-green-100 text-green-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {donation.method}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

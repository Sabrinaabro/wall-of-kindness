import Link from "next/link";

// Dummy data for now
const dummyDonations = [
  {
    id: 1,
    title: "Winter Jackets",
    category: "Clothes",
    image: "/1.png",
    description: "A bundle of warm jackets for winter.",
    city: "New York",
    street: "123 Broadway St",
    latitude: 40.7128,
    longitude: -74.006,
  },
  {
    id: 2,
    title: "Fresh Vegetables",
    category: "Food",
    image: "/2.png",
    description: "Organic vegetables ready for pickup.",
    city: "Los Angeles",
    street: "456 Sunset Blvd",
    latitude: 34.0522,
    longitude: -118.2437,
  },
];

export default function DonationDetails({ params }) {
  const donation = dummyDonations.find((d) => d.id === Number(params.id));

  if (!donation) return <p>Donation not found</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Link
        href="/browse"
        className="inline-block mb-4 text-[#5E4132] hover:underline"
      >
        ← Back to Browse
      </Link>
      <div className="bg-white border rounded-lg shadow-md p-6">
        <img
          src={donation.image}
          alt={donation.title}
          className="w-full h-64 object-cover rounded mb-6"
        />
        <h1 className="text-4xl font-bold text-[#5E4132] mb-4">
          {donation.title}
        </h1>
        <p className="text-gray-700 mb-4">{donation.description}</p>
        <p className="text-gray-600">
          <strong>Category:</strong> {donation.category}
        </p>
        <p className="text-gray-600">
          <strong>Location:</strong> {donation.street}, {donation.city}
        </p>

        {/* Map Button */}
        <a
          href={`https://www.google.com/maps?q=${donation.latitude},${donation.longitude}`}
          target="_blank"
          className="inline-block mt-4 bg-[#C99372] text-white px-4 py-2 rounded hover:bg-[#B67C5F]"
        >
          View on Google Maps
        </a>
      </div>
    </div>
  );
}

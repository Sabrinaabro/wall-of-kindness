"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import Map from "../components/Map";
import Link from "next/link";

export default function PostDonation() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [method, setMethod] = useState(""); // Pickup or Delivery
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [contact, setContact] = useState("");
  const [position, setPosition] = useState(null);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (method === "Pickup" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          });
        },
        () => alert("Could not fetch location. Please select manually.")
      );
    }
  }, [method]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let imageUrl = null;

    // Upload image
    if (image) {
      const fileName = `${Date.now()}-${image.name}`;
      const { error: uploadError } = await supabase.storage
        .from("donation-images")
        .upload(fileName, image, { cacheControl: "3600", upsert: true });

      if (uploadError) {
        alert("Image upload failed.");
        return;
      }

      const { data: publicData } = supabase.storage
        .from("donation-images")
        .getPublicUrl(fileName);
      imageUrl = publicData.publicUrl;
    }

    // Insert donation
    const { error } = await supabase.from("donations").insert([
      {
        title,
        description,
        category,
        method,
        street,
        city,
        contact,
        latitude: method === "Pickup" ? position?.lat : null,
        longitude: method === "Pickup" ? position?.lng : null,
        image_url: imageUrl,
      },
    ]);

    if (error) {
      alert(`Error: ${error.message}`);
    } else {
      alert("Donation posted successfully!");
      setTitle("");
      setDescription("");
      setCategory("");
      setMethod("");
      setStreet("");
      setCity("");
      setContact("");
      setPosition(null);
      setImage(null);
      setPreview(null);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(file ? URL.createObjectURL(file) : null);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 relative">
      {/* 🔙 Back Button */}
      <Link
        href="/"
        className="fixed top-6 left-6 flex items-center text-[#5E4132] bg-white border border-gray-300 rounded-full shadow-md px-3 py-2 hover:bg-[#F2E6DD] transition z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Home
      </Link>

      <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 mt-12">
        <h1 className="text-4xl font-sans text-center mb-6">Post a Donation</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <input
            type="text"
            placeholder="Title"
            className="w-full p-3 border border-gray-300 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          {/* Description */}
          <textarea
            placeholder="Description"
            className="w-full p-3 border border-gray-300 rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          {/* Category */}
          <select
            className="w-full p-3 border border-gray-300 rounded"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            <option value="Clothes">Clothes</option>
            <option value="Food">Food</option>
            <option value="Books">Books</option>
            <option value="Toys">Toys</option>
            <option value="Electronics">Electronics</option>
            <option value="Other">Other</option>
          </select>

          {/* Method - Radio Buttons */}
          <div>
            <p className="font-semibold mb-2">Select Method:</p>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="method"
                  value="Pickup"
                  checked={method === "Pickup"}
                  onChange={(e) => setMethod(e.target.value)}
                  className="w-5 h-5"
                />
                Pickup
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="method"
                  value="Delivery"
                  checked={method === "Delivery"}
                  onChange={(e) => setMethod(e.target.value)}
                  className="w-5 h-5"
                />
                Delivery
              </label>
            </div>
          </div>

          {/* Address */}
          <input
            type="text"
            placeholder="Street"
            className="w-full p-3 border border-gray-300 rounded"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
          <input
            type="text"
            placeholder="City"
            className="w-full p-3 border border-gray-300 rounded"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          {/* Map if Pickup */}
          {method === "Pickup" && (
            <div className="space-y-4">
              <Map position={position} setPosition={setPosition} />
            </div>
          )}

          {/* Contact */}
          <input
            type="text"
            placeholder="Contact"
            className="w-full p-3 border border-gray-300 rounded"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />

          {/* Image Upload */}
          <input
            type="file"
            accept="image/*"
            className="w-full p-3 border border-gray-300 rounded"
            onChange={handleImageChange}
          />

          {/* Image Preview */}
          {preview && (
            <div className="mt-4">
              <img
                src={preview}
                alt="Preview"
                className="w-full h-64 object-cover rounded border"
              />
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="bg-[#C99372] text-white px-4 py-2 rounded-lg mt-4 hover:bg-[#B67C5F] w-full"
          >
            Post Donation
          </button>
        </form>
      </div>
    </div>
  );
}

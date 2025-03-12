"use client";
import { useState } from "react";

export default function AccountPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);
  const [name, setName] = useState("Your Name");
  const [address, setAddress] = useState({
    name: "test name",
    street: "testing address",
    city: "Karachi, Shah Faisal Colony",
    postal: "Karachi 75230",
    country: "Pakistan",    
    phone: "+923126968917",
  });

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Profile Section */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Profile</h2>
        <div className="bg-gray-100 p-4 rounded-md mt-2">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-600">Name</p>
              {isEditingName ? (
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={() => setIsEditingName(false)}
                  autoFocus
                  className="border px-2 py-1 rounded w-full"
                />
              ) : (
                <p className="text-lg">{name}</p>
              )}
            </div>
            <button
              className="text-blue-500"
              onClick={() => setIsEditingName(true)}
            >
              ✏️
            </button>
          </div>
          <p className="text-gray-600 mt-2">Email</p>
          <p className="text-lg">moidmalikdev@gmail.com</p>
        </div>
      </div>

      {/* Addresses Section */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold flex justify-between">
          Addresses <button className="text-blue-500">+ Add</button>
        </h2>
        <div className="bg-gray-100 p-4 rounded-md mt-2">
          <div className="flex justify-between items-center">
            <p className="text-gray-600">Default address</p>
            <button className="text-blue-500">✏️</button>
          </div>
          <p className="text-lg">{address.name}</p>
          <p>{address.street}</p>
          <p>{address.city}</p>
          <p>{address.postal}</p>
          <p>{address.country}</p>
          <p>{address.phone}</p>
        </div>
      </div>
    </div>
  );
}

// components/weather/SearchBar.tsx

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar({ defaultCity = "" }: { defaultCity?: string }) {
    const [city, setCity] = useState(defaultCity);
    const router = useRouter();

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!city.trim()) return;
        router.push(`/weather?city=${encodeURIComponent(city.trim())}`);
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-2">
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city..."
                className="border border-gray-300 rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
                type="submit"
                className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
                Search
            </button>
        </form>
    );
}
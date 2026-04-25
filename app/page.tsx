// app/page.tsx
import SearchBar from "@/components/weather/SearchBar";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-800">Weather App</h1>
      <p className="text-gray-500">Search for any city to get the current weather.</p>
      <SearchBar />
    </main>
  );
}
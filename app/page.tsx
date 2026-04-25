import SearchBar from "@/components/weather/SearchBar";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 bg-linear-to-b from-blue-50 to-white">
      <h1 className="text-5xl font-bold text-gray-800">Weather App</h1>
      <p className="text-gray-500 text-lg">Search for any city to see the current weather.</p>
      <SearchBar />
    </main>
  );
}
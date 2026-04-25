// app/weather/page.tsx

import { getCurrentWeather, getForecast } from "@/lib/weather";
import WeatherCard from "@/components/weather/WeatherCard";
import ForecastList from "@/components/weather/ForecastList";
import SearchBar from "@/components/weather/SearchBar";

type Props = {
    searchParams: { city?: string };
};
export default async function WeatherPage({ searchParams }: Props) {
    const city = searchParams.city || "Lagos";

    try {
        const [current, forecast] = await Promise.all([
            getCurrentWeather(city),
            getForecast(city),
        ]);
        const forecastSlots = forecast.list.slice(0, 5);

        return (
            <main className="min-h-screen bg-linear-to-b from-blue-50 to-white flex flex-col items-center py-12 gap-8 px-4">

                <header className="w-full max-w-2xl flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-800">Weather App</h1>
                    <SearchBar defaultCity={city} />
                </header>
                <WeatherCard data={current} />
                <section className="w-full max-w-2xl">
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">Next 15 hours</h3>
                    <ForecastList items={forecastSlots} />
                </section>

            </main>
        );

    } catch {
        return (
            <main className="min-h-screen flex flex-col items-center justify-center gap-4">
                <p className="text-red-500 text-xl font-semibold">City not found.</p>
                <p className="text-gray-400">Please try a different city name.</p>
                <SearchBar />
            </main>
        );
    }
}
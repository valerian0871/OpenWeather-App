// app/weather/page.tsx

import { getCurrentWeather, getForecast } from "@/lib/weather";
import WeatherCard from "@/components/weather/WeatherCard";
import ForecastList from "@/components/weather/ForecastList";
import SearchBar from "@/components/weather/SearchBar";
import { getWeatherBackground } from "@/lib/weather-utils";

type Props = {
    searchParams: Promise<{ city?: string }>;
};
export default async function WeatherPage({ searchParams }: Props) {
    const params = await searchParams;
    const city = params.city || "Lagos";

    try {
        const [current, forecast] = await Promise.all([
            getCurrentWeather(city),
            getForecast(city),
        ]);
        const forecastSlots = forecast.list.slice(0, 5);
        const bgClass = getWeatherBackground(current.weather[0].icon);

        return (
            <main className={`min-h-screen ${bgClass} flex flex-col items-center py-12 gap-8 px-4 transition-colors duration-700`}>

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
            <main className="min-h-screen bg-gray-900 flex flex-col items-center justify-center gap-4">
                <p className="text-red-400 text-2xl font-bold">City not found</p>
                <p className="text-gray-300">We couldn't find the weather for "{city}". Please try another search.</p>
                <SearchBar inputClassName="text-white border-gray-600 bg-gray-800" />
            </main>
        );
    }
}
import WeatherIcon from "./WeatherIcon";

type WeatherData = {
    name: string;
    main: { temp: number; humidity: number };
    weather: { description: string; icon: string }[];
    wind: { speed: number };
};

export default function WeatherCard({ data }: { data: WeatherData }) {
    const { name, main, weather, wind } = data;

    return (
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-3 w-full max-w-sm">
            <h2 className="text-3xl font-bold text-gray-800">{name}</h2>

            <div className="flex items-center gap-2">
                <WeatherIcon iconCode={weather[0].icon} className="w-16 h-16 text-blue-500" />
                <p className="capitalize text-gray-500 text-lg">{weather[0].description}</p>
            </div>

            <p className="text-5xl font-semibold text-gray-900">{Math.round(main.temp)}°C</p>

            <div className="flex gap-4 text-sm text-gray-500 mt-2">
                <p>Humidity: {main.humidity}%</p>
                <p>Wind: {wind.speed} m/s</p>
            </div>
        </div>
    );
}
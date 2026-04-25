// components/weather/WeatherCard.tsx

type WeatherData = {
    name: string;
    main: { temp: number; humidity: number };
    weather: { description: string; icon: string }[];
    wind: { speed: number };
};

export default function WeatherCard({ data }: { data: WeatherData }) {
    const { name, main, weather, wind } = data;
    const icon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

    return (
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col gap-2 w-full max-w-sm">
            <h2 className="text-2xl font-bold">{name}</h2>
            <img src={icon} alt={weather[0].description} className="w-16 h-16" />
            <p className="capitalize text-gray-600">{weather[0].description}</p>
            <p className="text-4xl font-semibold">{Math.round(main.temp)}°C</p>
            <p className="text-sm text-gray-500">Humidity: {main.humidity}%</p>
            <p className="text-sm text-gray-500">Wind: {wind.speed} m/s</p>
        </div>
    );
}
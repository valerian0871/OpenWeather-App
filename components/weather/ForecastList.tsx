// components/weather/ForecastList.tsx

type ForecastItem = {
    dt_txt: string;
    main: { temp: number };
    weather: { description: string; icon: string }[];
};

export default function ForecastList({ items }: { items: ForecastItem[] }) {
    return (
        <div className="flex gap-4 flex-wrap mt-4">
            {items.map((item) => (
                <div
                    key={item.dt_txt}
                    className="bg-white rounded-xl shadow p-4 flex flex-col items-center gap-1 min-w-[100px]"
                >
                    <p className="text-xs text-gray-500">
                        {new Date(item.dt_txt).toLocaleString("en-GB", {
                            weekday: "short",
                            hour: "2-digit",
                            minute: "2-digit",
                        })}
                    </p>
                    <img
                        src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                        alt={item.weather[0].description}
                        className="w-10 h-10"
                    />
                    <p className="text-sm font-semibold">{Math.round(item.main.temp)}°C</p>
                    <p className="text-xs text-gray-500 capitalize">{item.weather[0].description}</p>
                </div>
            ))}
        </div>
    );
}
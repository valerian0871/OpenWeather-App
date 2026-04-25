import WeatherIcon from "./WeatherIcon";

type ForecastItem = {
    dt_txt: string;
    main: { temp: number };
    weather: { description: string; icon: string }[];
};

export default function ForecastList({ items }: { items: ForecastItem[] }) {
    return (
        <div className="flex gap-4 flex-wrap">
            {items.map((item) => (
                <div
                    key={item.dt_txt}
                    className="bg-white rounded-xl shadow p-4 flex flex-col items-center gap-1 min-w-[110px]"
                >
                    <p className="text-xs text-gray-400">
                        {new Date(item.dt_txt).toLocaleString("en-GB", {
                            weekday: "short",
                            hour: "2-digit",
                            minute: "2-digit",
                        })}
                    </p>

                    <WeatherIcon iconCode={item.weather[0].icon} className="w-10 h-10 text-blue-500" />

                    <p className="font-semibold text-gray-800">{Math.round(item.main.temp)}°C</p>

                    <p className="text-xs text-gray-400 capitalize text-center">
                        {item.weather[0].description}
                    </p>
                </div>
            ))}
        </div>
    );
}
import { Icon } from '@iconify/react';

const iconMap: Record<string, string> = {
    "01d": "meteocons:clear-day-fill",
    "01n": "meteocons:clear-night-fill",
    "02d": "meteocons:partly-cloudy-day-fill",
    "02n": "meteocons:partly-cloudy-night-fill",
    "03d": "meteocons:cloud-fill",
    "03n": "meteocons:cloud-fill",
    "04d": "meteocons:overcast-fill",
    "04n": "meteocons:overcast-fill",
    "09d": "meteocons:drizzle-fill",
    "09n": "meteocons:drizzle-fill",
    "10d": "meteocons:rain-fill",
    "10n": "meteocons:rain-fill",
    "11d": "meteocons:thunderstorms-fill",
    "11n": "meteocons:thunderstorms-fill",
    "13d": "meteocons:snow-fill",
    "13n": "meteocons:snow-fill",
    "50d": "meteocons:mist-fill",
    "50n": "meteocons:mist-fill",
};

export default function WeatherIcon({ iconCode, className = "w-16 h-16" }: { iconCode: string, className?: string }) {
    const iconName = iconMap[iconCode] || "meteocons:not-available-fill";
    return <Icon icon={iconName} className={className} />;
}

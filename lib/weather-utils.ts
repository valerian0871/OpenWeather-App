export function getWeatherBackground(iconCode: string) {
    const isDay = iconCode.endsWith("d");
    const code = iconCode.slice(0, 2);

    switch (code) {
        case "01": // Clear
            return isDay 
                ? "bg-linear-to-b from-blue-400 to-sky-200" 
                : "bg-linear-to-b from-slate-900 to-indigo-900";
        case "02": // Few clouds
        case "03": // Scattered clouds
        case "04": // Broken clouds
            return isDay 
                ? "bg-linear-to-b from-blue-200 to-gray-200" 
                : "bg-linear-to-b from-gray-800 to-slate-800";
        case "09": // Shower rain
        case "10": // Rain
            return "bg-linear-to-b from-slate-700 to-blue-800";
        case "11": // Thunderstorm
            return "bg-linear-to-b from-slate-800 to-black";
        case "13": // Snow
            return isDay 
                ? "bg-linear-to-b from-blue-100 to-white" 
                : "bg-linear-to-b from-slate-800 to-slate-600";
        case "50": // Mist / Fog
            return "bg-linear-to-b from-gray-400 to-gray-200";
        default:
            return "bg-linear-to-b from-blue-50 to-white";
    }
}

// lib/weather.ts

const BASE_URL = "https://api.openweathermap.org/data/2.5";

export async function getCurrentWeather(city: string) {
    const res = await fetch(
        `${BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${process.env.OPENWEATHER_KEY}&units=metric`
    );

    if (!res.ok) {
        throw new Error("City not found");
    }

    return res.json();
}

export async function getForecast(city: string) {
    const res = await fetch(
        `${BASE_URL}/forecast?q=${encodeURIComponent(city)}&appid=${process.env.OPENWEATHER_KEY}&units=metric`
    );

    if (!res.ok) {
        throw new Error("Forecast unavailable");
    }

    return res.json();
}
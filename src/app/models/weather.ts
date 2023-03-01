export type Coord = { lat: number, lon: number }
type Cloud = { all: number }
type Main = {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number,
    sea_level: number,
    grnd_level: number
}
type Rain = { "1h"?: number, "3h"?: number }
type Sys = {
    type: number,
    id: number,
    country: string,
    sunrise: number,
    sunset: number
}
export type Weather = {
    id: number,
    main: string,
    description: string,
    icon: string
}
type Wind = {
    speed: number,
    deg: number,
    gust: number
}
export type WeatherResponse = {
    base: string,
    clouds: Cloud,
    cod: number,
    coord: Coord,
    dt: number,
    id: number,
    main: Main,
    name: string,
    rain?: Rain,
    sys: Sys,
    timezone: number
    visibility: number,
    weather: Weather[],
    wind: Wind

}

export type AppWeather = {
    cityName: string,
    country: string,
    temperature: {
        current: number,
        feelsLike: number,
        min: number,
        max: number,
    },
    temperatureWithUnits: {
        current: string,
        feelsLike: string,
        min: string,
        max: string,
    },
    weather: {
        main: {
            code: number,
            description: string,
        },
        other?: Array<{
            code: number,
            description: string,
        }>
    },
    time: {
        sunrise: Date,
        sunset: Date,
    }
}

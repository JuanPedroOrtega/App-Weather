import { Coordinates } from './common';

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
type Weather = {
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
export type OpenWeatherResponse = {
    base: string,
    clouds: Cloud,
    cod: number,
    coord: Coordinates,
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

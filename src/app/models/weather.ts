export type Weather = {
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
        // other?: Array<{
        //     code: number,
        //     description: string,
        // }>
    },
    time: {
        sunrise: Date,
        sunset: Date,
    }
}

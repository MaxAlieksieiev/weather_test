export interface IGetWeatherInfoResponse {
  latitude: number,
  longitude: number,
  generationtime_ms: number,
  utc_offset_seconds: number,
  timezone: number,
  timezone_abbreviation: number,
  elevation: number,
  current_weather: ICurrentWeather,
}

export interface ICurrentWeather {
  temperature: number,
  windspeed: number,
  winddirection: number,
  weathercode: number,
  is_day: number,
  time:  string
}

export interface IResponseWithCity extends IGetWeatherInfoResponse {
  city: string;
}


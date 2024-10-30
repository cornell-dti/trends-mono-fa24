export type WeatherResponse = {
  raining: boolean;
};

export type WeatherData = {
  latitude: number;
  longitude: number;
  timezone: string;
  timezone_abbreviation: string;
  current: {
    time: string;
    interval: number;
    precipitation: number;
  };
};
/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useMemo } from "react"
import { ICurrentWeather } from "core/interfaces/interfaces"
import { ReactComponent as MoonCloudFastWind } from 'assets/icons/moon-cloud-fast-wind.svg';
import { ReactComponent as MoonCloudMidRain } from 'assets/icons/moon-cloud-mid-rain.svg';
import { ReactComponent as Tornado } from 'assets/icons/tornado.svg';
import { ReactComponent as SunCloudMidRain } from 'assets/icons/sun-cloud-mid-rain.svg';

import styles from './WeatherWidgetItem.module.scss';
import { isDay, weatherCodes } from "./data";

export interface IWeatherWidgetItemProps {
  city: string,
  currentWeather: ICurrentWeather,
}
const WeatherWidgetItem: FC<IWeatherWidgetItemProps> = ({city, currentWeather}) => {
  const {Icon, type} = useMemo(() => {
    const { weathercode } = currentWeather;
    let Icon, type;
    if(weatherCodes.rain.includes(weathercode)) {
      Icon =  isDay() ? <SunCloudMidRain /> : <MoonCloudMidRain />
      type = 'Rain'
    }
    if(weatherCodes.fastWind.includes(weathercode)) {
      Icon = isDay() ? <MoonCloudFastWind /> : <MoonCloudFastWind />
      type = 'Wind'
    }
    if(weatherCodes.tornado.includes(weathercode)) {
      Icon = <Tornado />;
      type = 'Tornado';
    }
    return { Icon, type }
  }, [currentWeather.weathercode]);


  return (
    <div className={styles.widget}>
      <div className={styles.widget_icon}>
        <div className={styles.widget_content}>
          <p className={styles.widget_temperature}>
            {currentWeather.temperature}
            <sup>o</sup>
          </p>
          <div className={styles.widget_info}>
            <p className={styles.widget_city}>{city}</p>
            <p>{type}</p>
          </div>
          <div className={styles.widget_weather_icon}>
            {Icon}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherWidgetItem
import { useEffect, useState } from 'react'
import { getWeatherInfoByCities } from 'api/api'
import { IResponseWithCity } from 'core/interfaces/interfaces';
import Loader from 'shared/Loader';
import WeatherWidgetItem from './WeatherWidgetItem';

import styles from './WeatherWidget.module.scss';

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState<IResponseWithCity[]>();
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() =>  {
    async function fetchData() {
      setIsLoading(true);
      const result = await getWeatherInfoByCities();
      setWeatherData(result);
      setIsLoading(false);
    }

    fetchData()
  }, [])


  return (
    <>
      {
        isLoading && <Loader />
      }
    <div className={styles.wrapper}>
      {
        weatherData?.length && weatherData.map((item) => <WeatherWidgetItem key={item.city} city={item.city} currentWeather={item.current_weather}/>)
      }

    </div>
    </>
  )
}

export default WeatherWidget
/* eslint-disable @typescript-eslint/no-explicit-any */
import { citiesCoordinates } from "./data";
import { CoordinateType } from "core/enums/enums";
import { IGetWeatherInfoResponse, IResponseWithCity } from "core/interfaces/interfaces";
import { CoordinateOfCity } from "core/types/types";

export function getAllCooridinatesByCities(citiesCoordinates: CoordinateOfCity, index: number) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return Object.entries(citiesCoordinates).map(([_key, value]) => value[index]).join(',');
}

export function getAllCountries() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return Object.entries(citiesCoordinates).map(([key,]) => key);
}

export async function getWeatherInfoByCities(): Promise<IResponseWithCity[]> {
  const baseUrl = import.meta.env.VITE_REACT_APP_API;
  const allLatitudes = getAllCooridinatesByCities(citiesCoordinates, CoordinateType.Latitude);
  const allLongitudes = getAllCooridinatesByCities(citiesCoordinates, CoordinateType.Longitude);
  const allCountries = getAllCountries();
  
  try {
    const response = await fetch(`${baseUrl}/forecast?latitude=${allLatitudes}&longitude=${allLongitudes}&current_weather=true`);
    const result = await response.json();
    const transformResults = result.map((item: IGetWeatherInfoResponse, index: number) => ({...item, city: allCountries[index]}))
    return transformResults;
  } catch(error) {
    console.error(error);
    return [];
  }
}
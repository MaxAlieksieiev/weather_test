
export const weatherCodes = {
  rain: [51,53,55,56,57,80,81,82],
  fastWind: [1,2,3,45,48],
  midRain: [61,65,63,66,67,80,81,82],
  tornado: [95,96,99]
};

export function isDay() {
  const time = new Date().getHours();
  return time > 8 && time < 20
}
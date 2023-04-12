import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const imageSrc = weatherOptions.filter((item) => {
    return item.day === day && item.type === type;
  });
  const imageSrcUrl = imageSrc[0].url || "";
  return (
    <section className="weather" id="Weather">
      <div className="weather__info">{weatherTemp}°F</div>
      <img src={imageSrcUrl} alt="Sunny" className="weather__image" />
    </section>
  );
};
export default WeatherCard;

import "./style.css";

const CardWeather = ({weatherData}) => {

    if(weatherData.name) {
        return (
            <div className="card-container-weather">
                <div className="card-row-weather">
                <h2>{weatherData.name}</h2>
                    <ul>
                        <li>{weatherData.main.temp-273.15} °C</li>
                        <li>{weatherData.weather[0].description}</li>
                    </ul>
                </div>
            </div>
        )
    }
    return (<div>Clima</div>)
}

export default CardWeather;
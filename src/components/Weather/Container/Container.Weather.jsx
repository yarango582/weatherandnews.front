import "./style.css";
import {default as Card} from "../Card/Card.Weather";

const  ContainerWeather = ({weatherData}) => {
    return(
        <div className="container-weather">
            <Card weatherData={weatherData}/>
        </div>
    )
}

export default ContainerWeather;
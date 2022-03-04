import "./style.css";
import { default as Header } from "./components/Header/Header";
import { default as ContainerWeather } from "./components/Weather/Container/Container.Weather";
import { default as ContainerNews } from "./components/News/Container/Container.News";
import { default as apiCore } from "./api/core/api.core";
import { useEffect, useState } from "react";

const App = () => {
    const [cityName, setCityName] = useState("");
    const [weatherData, setWeatherData] = useState({});
    const [newsData, setNewsData] = useState({});

    useEffect(() => {

        if(cityName.length > 3) {
            apiCore.getWeatherService(cityName)
                .then((weather) => setWeatherData({...weather}))
                .catch((err) => err);
            apiCore.getNewsService(cityName)
                .then((news) => setNewsData({...news}))
                .catch((err) => err);
        }

    }, [cityName]);

    return (
        <div className="container-header">
            <div className="header">
                <Header setCityName={setCityName}/>
            </div>
            <div className="container-content">
                <aside>
                    <ContainerWeather weatherData={weatherData}/>
                </aside>
                <main>
                    <ContainerNews newsData={newsData}/>
                </main>
            </div>
        </div>
    )
}

export default App;
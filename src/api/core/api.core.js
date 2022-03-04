import axios from "axios";
import { host, endpoints } from "../config/api.config";

export default class apiCore {

    static async getWeatherService(cityName) {
        return axios.request({
            url: `${host}${endpoints.executeExternalService.url}`,
            data: {
                nameService: "weather",
                dependency: cityName
            },
            method: "POST"
        })
            .then((response) => response.data)
            .catch((err) => err);
    }

    static async getNewsService(cityName) {
        return axios.request({
            url: `${host}${endpoints.executeExternalService.url}`,
            data: {
                nameService: "news",
                dependency: cityName
            },
            method: "POST"
        })
            .then((response) => response.data)
            .catch((err) => err);
    }
}

module.exports = {
    host: "http://localhost:8000",
    endpoints: {
        executeExternalService: {
            url: "/api/v1/services/executeService",
            dependencies: {
                nameService: "name",
                dependency: "cityName"
            }
        }
    }
}
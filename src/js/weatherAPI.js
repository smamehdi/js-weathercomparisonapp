class WeatherAPI {
  constructor() {
    this.apiURL = 'https://api.weatherbit.io/v2.0/current'
    this.appID = '7e32e5caf8ee4462ae40a78352552372'
  }

  async fetchData(city) {
    const apiFullURL = `${this.apiURL}?city=${city}&key=${this.appID}`

    const response = await fetch(apiFullURL, { mode: 'cors' })
    const json = await response.json()

    return {
      name: `${json.data[0].city_name}, ${json.data[0].country_code}`,
      status: json.data[0].weather.description,
      iconCode: json.data[0].weather.code,
      temp: json.data[0].temp
    }
  }
}

export default WeatherAPI

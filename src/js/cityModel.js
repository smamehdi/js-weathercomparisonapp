import LocalStorage from './localStorage'
import { cityNotFound } from './constants'

class CityModel {
  constructor(app) {
    this.app = app
  }

  async findOrCreate(city) {
    const localStorage = new LocalStorage()

    let cityData

    if (localStorage.hasUpdatedCity(city)) {
      cityData = localStorage.find(city)
    } else {
      cityData = await this._fetchDataFor(city).catch(() => cityNotFound)

      localStorage.create(cityData)
    }

    return cityData
  }

  // private

  _fetchDataFor(city) {
    return this.app.weatherAPI.fetchData(city)
  }
}

export default CityModel

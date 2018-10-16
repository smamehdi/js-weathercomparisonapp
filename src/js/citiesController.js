class CitiesController {
  constructor(app) {
    this.app = app
  }

  async updateCity(id, city) {
    const cityUI = this._selectCityUI(id)

    cityUI.renderLoader()

    const cityData = await this.app.cityModel.findOrCreate(city)

    return cityUI.render(cityData)
  }

  // private

  _selectCityUI(id) {
    return id === 1 ? this.app.city1UI : this.app.city2UI
  }
}

export default CitiesController

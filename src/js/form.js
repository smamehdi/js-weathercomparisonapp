class Form {
  constructor(app) {
    this.app = app
    this.submitButton = document.getElementById('submit')
  }

  watch() {
    this._watchFields()
    this._watchSubmitButton()
  }

  // private

  _watchFields() {
    this.inputCity1 = document.getElementById('input-city-1')
    this.inputCity2 = document.getElementById('input-city-2')

    const fields = [this.inputCity1, this.inputCity2]

    fields.forEach(field => {
      field.addEventListener('input', () => {
        this._changeFieldState(field)
      })
    })
  }

  _changeFieldState(field) {
    if (!field.validity.valid) {
      field.classList.remove('is-primary')
      field.classList.add('is-danger')
    } else {
      field.classList.remove('is-danger')
      field.classList.add('is-primary')
    }
  }

  _watchSubmitButton() {
    this.submitButton.addEventListener('click', event => {
      this._changeFieldState(this.inputCity1)
      this._changeFieldState(this.inputCity2)

      if (this._inputsNotValid()) { return false }

      event.preventDefault()

      this._updateCities()
    })
  }

  _inputsNotValid() {
    return !this.inputCity1.validity.valid || !this.inputCity2.validity.valid
  }

  _updateCities() {
    const city1 = this.inputCity1.value
    const city2 = this.inputCity2.value

    this.app.citiesController.updateCity(1, city1)
    this.app.citiesController.updateCity(2, city2)
  }
}

export default Form

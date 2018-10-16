import Icon from './icon'
import { cityNotFound } from './constants'

class CityUI {
  constructor(id) {
    this.loaderContainer = document.getElementById(`loader-${id}`)
    this.loaderCity = document.getElementById(`loader-city-${id}`)
    this.loaderStatus = document.getElementById(`loader-status-${id}`)
    this.loaderTemp = document.getElementById(`loader-temp-${id}`)

    this.dataContainer = document.getElementById(`data-${id}`)
    this.dataCity = document.getElementById(`data-city-${id}`)
    this.dataStatus = document.getElementById(`data-status-${id}`)
    this.dataIcon = document.getElementById(`data-icon-${id}`)
    this.dataTemp = document.getElementById(`data-temp-${id}`)
  }

  renderLoader() {
    this.dataContainer.classList.toggle('opacity-1')
    this.loaderContainer.classList.toggle('opacity-1')

    this.loaderCity.innerText = ''
    this.loaderStatus.innerText = 'Fetching data...'
    this.loaderTemp.innerText = ''
  }

  render(data) {
    this.loaderContainer.classList.toggle('opacity-1')
    this.dataContainer.classList.toggle('opacity-1')

    this.dataCity.innerText = data.name
    this.dataStatus.innerText = data.status

    if (data.status !== cityNotFound.status) {
      this.dataIcon.src = new Icon(data).src()
      this.dataTemp.innerText = `${Math.round(data.temp)} ℃`
    } else {
      this.dataIcon.src = ''
      this.dataIcon.src = 'dist/svg/wi-thermometer-exterior.svg'
      this.dataTemp.innerText = ''
    }
  }
}

export default CityUI

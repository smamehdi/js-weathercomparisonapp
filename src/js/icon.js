import weatherIcons from './weatherIcons'

class Icon {
  constructor(data) {
    this.prefix = 'wi-'
    this.iconCode = data.iconCode
    this.iconName = weatherIcons[this.iconCode].icon
    this.extension = '.svg'
  }

  src() {
    let iconFullName

    if (this._daylightIconCode()) {
      iconFullName = this.prefix + 'day-' + this.iconName + this.extension
    } else {
      iconFullName = this.prefix + 'night-' + this.iconName + this.extension
    }

    return 'dist/svg/' + iconFullName
  }

  // private

  _daylightIconCode() {
    return !(this.iconCode > 699 && this.iconCode < 800) &&
           !(this.iconCode > 899 && this.iconCode < 1000)
  }
}

export default Icon

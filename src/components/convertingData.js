const temperature = {
  c: {
    name: 'Celsius',
    convertor: function toCelsius(temp, tempUnit) {
      if (tempUnit === 'f') {
        return ((temp - 32) * 5) / 9;
      }
      if (tempUnit === 'k') {
        return temp - 273.15;
      }
    },
  },
  f: {
    name: 'Fahrenheit',
    convertor: function toFahrenheit(temp, tempUnit) {
      if (tempUnit === 'c') {
        return (temp * 9) / 5 + 32;
      }
      if (tempUnit === 'k') {
        return ((temp - 273.15) * 9) / 5 + 32;
      }
    },
  },
  k: {
    name: 'Kelvin',
    convertor: function toKelvin(temp, tempUnit) {
      if (tempUnit === 'f') {
        return ((temp - 32) * 5) / 9 + 273.15;
      }
      if (tempUnit === 'c') {
        return temp + 273.15;
      }
    },
  },
};

const mass = {
  kg: {
    name: 'Kilogram',
    convertor: function toKilogram(mass, massUnit) {
      if (massUnit === 'gr') {
        return mass / 1000;
      }
    },
  },
  gr: {
    name: 'Gram',
    convertor: function toGram(mass, massUnit) {
      if (massUnit === 'kg') {
        return mass * 1000;
      }
    },
  },
};

const length = {
  km: {
    name: 'Kilometre',
    convertor: function toKilometre(length, lengthUnit) {
      if (lengthUnit === 'cm') {
        return length / 100000;
      }
      if (lengthUnit === 'm') {
        return length / 1000;
      }
    },
  },
  m: {
    name: 'Meter',
    convertor: function toMeter(length, lengthUnit) {
      if (lengthUnit === 'cm') {
        return length / 100;
      }
      if (lengthUnit === 'km') {
        return length * 1000;
      }
    },
  },
  cm: {
    name: 'Centimeter',
    convertor: function toCentimeter(length, massUnit) {
      if (massUnit === 'm') {
        return length * 100;
      }
      if (massUnit === 'km') {
        return length * 100000;
      }
    },
  },
};

const time = {
  sec: {
    name: 'Second',
    convertor: function toSecond(time, timeUnit) {
      if (timeUnit === 'min') {
        return time * 60;
      }
    },
  },
  min: {
    name: 'Minute',
    convertor: function toMinute(time, timeUnit) {
      if (timeUnit === 'sec') {
        return time / 60;
      }
    },
  },
}

export const convertingData = {
  temperature,
  mass,
  length,
  time,
};


export default convertingData;
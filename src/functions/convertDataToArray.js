import convertigData from '../components/convertingData'

export default function convertDataToArray() {
    let arr = []
    for (let item in convertigData) {
      arr.push(convertigData[item])
    }
    return arr
  };
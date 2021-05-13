import convertingData from '../components/convertingData'

export default function setConvertorTypesForSelect() {
    const covertNames = Object.keys(convertingData)
    const upperCaseNames = covertNames.map( item => upperCaseFirst(item))
    return upperCaseNames
}

function upperCaseFirst(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}
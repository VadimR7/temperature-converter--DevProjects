export default function converter(value, unitType, convertingFunction){
  const input = parseFloat(value);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convertingFunction(input, unitType);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

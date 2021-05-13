import React, { useState, useEffect, useMemo } from 'react';
import { FlexContainer } from '../styles/ComponentStyle';
import TextField from '../containers/TextField';
import UnitSelector from '../containers/UnitSelector';
import setInitialModuleState from '../functions/setInitialModuleState';
import converter from '../functions/converter';

export default function ConvertModule({ type, convertorData }) {
  const initialModuleState = setInitialModuleState(convertorData);

  const [inputedValue, setInputedValue] = useState('');
  const [selectedInput, setSelectedInput] = useState({
    first: initialModuleState[0],
    second: initialModuleState[1],
  });
  const [selectOptions, setSelectOptions] = useState({
    first: [initialModuleState[0]],
    second: [initialModuleState[1]],
  });
  const [activeInput, setActiveInput] = useState(undefined);

  const moduleUnits = useMemo(() => {
    let keys = Object.keys(convertorData);
    let values = [];
    for (let item in convertorData) {
      values.push(convertorData[item].name);
    }
    const moduleUnits = Object.fromEntries(
      keys.map((_, i) => [keys[i], values[i]])
    );
    return moduleUnits;
  }, [convertorData]);

  const moduleFunctions = useMemo(() => {
    let keys = Object.keys(convertorData);
    let values = [];
    for (let item in convertorData) {
      values.push(convertorData[item].convertor);
    }
    const moduleFunctions = Object.fromEntries(
      keys.map((_, i) => [keys[i], values[i]])
    );
    return moduleFunctions;
  }, [convertorData]);

  useEffect(() => {
    const allAvailableUnits = Object.keys(moduleUnits);
    setSelectOptions({
      first: allAvailableUnits.filter(
        (item) => item !== selectedInput['second']
      ),
      second: allAvailableUnits.filter(
        (item) => item !== selectedInput['first']
      ),
    });
  }, [moduleUnits, selectedInput]);

  function setInputValue(value) {
    for (let item in moduleFunctions) {
      if (value === item) {
        const response =
          activeInput === item
            ? inputedValue
            : converter(inputedValue, activeInput, moduleFunctions[item]);
        return response;
      }
    }
  }

  const handleFirstValueChange = (e) => {
    setActiveInput(selectedInput['first']);
    setInputedValue(e);
  };

  const handleFirstSelectChange = (e) => {
    setSelectedInput({ ...selectedInput, first: e });
  };

  const handleSecondtValueChange = (e) => {
    setActiveInput(selectedInput['second']);
    setInputedValue(e);
  };

  const handleSecondSelectChange = (e) => {
    setSelectedInput({ ...selectedInput, second: e });
  };

  return (
    <>
      <FlexContainer>
        <TextField
          label={`Enter ${type} in ${moduleUnits[selectedInput['first']]}`}
          onChange={handleFirstValueChange}
          value={setInputValue(selectedInput['first'])}
        />
        <UnitSelector
          value={selectedInput['first']}
          onChange={handleFirstSelectChange}
          options={selectOptions['first']}
          moduleUnits={moduleUnits}
        />
      </FlexContainer>

      <FlexContainer>
        <TextField
          label={`Enter ${type} in ${moduleUnits[selectedInput['second']]}`}
          onChange={handleSecondtValueChange}
          value={setInputValue(selectedInput['second'])}
        />
        <UnitSelector
          value={selectedInput['second']}
          onChange={handleSecondSelectChange}
          options={selectOptions['second']}
          moduleUnits={moduleUnits}
        />
      </FlexContainer>
    </>
  );
}

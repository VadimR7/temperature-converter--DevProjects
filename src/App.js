import React, { useRef, useState } from 'react';
import {
  FlexContainer,
  PaperContainer,
  GridContainer,
} from './styles/AppStyle';
import setConvertorTypesForSelect from './functions/setConvertorTypesForSelect';
import convertDataToArray from './functions/convertDataToArray';
import ConverterTypeSelect from './containers/ConverterTypeSelect';
import ConvertModule from './components/ConvertModule';

const convertModules = convertDataToArray();
const initStateForSelect = setConvertorTypesForSelect();

function App() {
  const [converterType, setConverterType] = useState(initStateForSelect[0]);
  const selecOptions = useRef(initStateForSelect);

  const handleConverterTypeChange = (e) => setConverterType(e);

  return (
    <GridContainer>
      <PaperContainer>
        <ConverterTypeSelect
          converterType={converterType}
          onChange={handleConverterTypeChange}
          value={converterType}
          options={selecOptions.current}
        />
        <FlexContainer>
          {convertModules.map((item, i) => {
            return (
              converterType === initStateForSelect[i] && (
                <ConvertModule
                  key={i}
                  type={converterType.toLowerCase()}
                  convertorData={item}
                />
              )
            );
          })}
        </FlexContainer>
      </PaperContainer>
    </GridContainer>
  );
}

export default App;

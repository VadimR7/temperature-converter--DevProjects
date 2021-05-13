export default function setInitialModuleState(moduleData){
    const initialStateValues = [];
    for (let i = 0; i < 2; i++) {
      initialStateValues.push(Object.keys(moduleData)[i]);
    }
    return initialStateValues;
  };
  
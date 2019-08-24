import { AsyncStorage } from 'react-native';

let initialState = {
  code: ''
}

saveData = async (pinData) => {
  await AsyncStorage.setItem('pin', pinData)
  .then(() => {
    console.log("It was saved successfully");
  })
  .catch(() => {
    console.log("There was an error saving the product");
  });
}

const CodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CODE':
      const codeState = Object.assign({}, state);
      codeState.code = action.code;
      saveData(action.code);
      return codeState;
    default:
      return state;
  }
};

export default CodeReducer;

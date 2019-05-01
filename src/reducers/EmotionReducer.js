import { AsyncStorage } from 'react-native';

let initialState = {
  emotion1: "",
  emotion2: "",
  emotion3: "",
  time: ""
}

getData = async () => {
  let existingData = await AsyncStorage.getItem('emotion');
  return existingData;
}

saveData = async (newData) => {
  await AsyncStorage.setItem('emotion', newData)
  .then(() => {
    console.log("It was saved successfully");
  })
  .catch(() => {
    console.log("There was an error saving the product");
  });
}

const EmotionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'EMOTION_1':
      const emotion1State = Object.assign({}, state);
      emotion1State.emotion1 = action.emote1;
      return emotion1State;
    case 'EMOTION_2':
      const emotion2State = Object.assign({}, state);
      emotion2State.emotion2 = action.emote2;
      return emotion2State;
    case 'EMOTION_3':
      const emotion3State = Object.assign({}, state);
      emotion3State.emotion3 = action.emote3;
      return emotion3State;
    case 'SAVE_EMOTIONS':
      const emotions = Object.assign({}, state);
      emotions.time = action.time;

      this.getData().then((existingData) => {
        console.log("Existing data: ", existingData);
        let currentData = JSON.parse(existingData);

        if (!currentData) {
          currentData = [];
        }

        currentData.push(emotions);
        console.log("New data: ", currentData);
        let stringData = JSON.stringify(currentData);
        saveData(stringData);
      })
      .catch((err) => {
        console.log("There was an error getting the product: ", err);
      });

      return emotions;
    default:
      return state
  }
};

export default EmotionReducer;

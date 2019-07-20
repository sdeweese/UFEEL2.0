import { AsyncStorage } from 'react-native';

let initialState = {
  emotion1: "",
  emotion2: "",
  emotion3: "",
  time: "",
  month: "",
  emotes: []
}

getData = async () => {
  let existingData = await AsyncStorage.getItem('emotes');
  console.log("Exist data in getdata func: ", JSON.parse(existingData));
  return existingData;
}

saveData = async (newData) => {
  await AsyncStorage.setItem('emotes', newData)
  .then(() => {
    console.log("It was saved successfully");
  })
  .catch(() => {
    console.log("There was an error saving the product");
  });
}

const EmoteReducer = (state = initialState, action) => {
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
      emotions.month = action.month;

      console.log("Emotions from save_emotions: ", emotions);

      getData().then((resData) => {
        console.log("Existing emotion data: ", resData);
        let currentData = JSON.parse(resData);
        console.log("Current data in getData: ", currentData);

        if (!currentData) {
          currentData = [];
        }

        console.log("Emotions in getData: ", emotions);

        currentData.push(emotions);
        emotions.emotes = currentData;
        console.log("New data: ", currentData);
        let stringData = JSON.stringify(currentData);
        saveData(stringData);
      })
      .catch((err) => {
        console.log("There was an error getting the product: ", err);
      });

      return emotions;
    default:
        return state;
  }
};

export default EmoteReducer;

import { AsyncStorage } from 'react-native';

let initialState = {
  emotion1: "",
  emotion2: "",
  emotion3: "",
  time: ""
}

// var comp_data = {
//   labels: ["Joy", "Love", "Fear", "Anger", "Sadness", "Surprise"],
//   datasets: [{
//     data: [0, 0, 0, 0, 0, 0]
//   }]
// }

// graphData = async (data, graph_data) => {
//   var joy_counter = 0;
//   var love_counter = 0;
//   var fear_counter = 0;
//   var anger_counter = 0;
//   var sad_counter = 0;
//   var surprise_counter = 0;
//
//   let returnData = graph_data;
//
//   var emotion;
//   var month = new Date().getMonth() + 1;
//   var strmonth = month.toString();
//   console.log("month: ", month);
//
//   for (emotion in data) {
//     var str = data[emotion].time;
//     console.log("str: ", str);
//     var res = str.split('-');
//     var emotMonth = res[1].slice(1);
//     console.log("emotMonth: ", emotMonth);
//
//     if (strmonth === emotMonth) {
//       if (data[emotion].emotion1 === "Joy") {
//         console.log("Here");
//         joy_counter = joy_counter + 1;
//       } else if (data[emotion].emotion1 === "Love") {
//         console.log("Here");
//         love_counter = love_counter + 1;
//       } else if (data[emotion].emotion1 === "Fear") {
//         console.log("Here");
//         fear_counter = fear_counter + 1;
//       } else if (data[emotion].emotion1 === "Anger") {
//         console.log("Here");
//         anger_counter = anger_counter + 1;
//       } else if (data[emotion].emotion1 === "Sadness") {
//         console.log("Here");
//         sad_counter = sad_counter + 1;
//       } else {
//         console.log("Here");
//         surprise_counter = surprise_counter + 1;
//       }
//     }
//   }
//
//   returnData.datasets[0].data[0] = joy_counter;
//   returnData.datasets[0].data[1] = love_counter;
//   returnData.datasets[0].data[2] = fear_counter;
//   returnData.datasets[0].data[3] = anger_counter;
//   returnData.datasets[0].data[4] = sad_counter;
//   returnData.datasets[0].data[5] = surprise_counter;
//
//   console.log("comp_data: ", comp_data.datasets[0].data[2]);
//
//   return returnData;
// }

getData = async () => {
  let existingData = await AsyncStorage.getItem('new_emotion');
  return existingData;
}

// getGraphData = async () => {
//   let existingData = await AsyncStorage.getItem('graph');
//   return existingData;
// }
//
// saveGraphData = async (data, graph_data) => {
//   let newData = await graphData(data, graph_data);
//
//   let strData = JSON.stringify(newData);
//
//   await AsyncStorage.setItem('graph', strData)
//   .then(() => {
//     console.log("It was saved successfully for graph data");
//   })
//   .catch(() => {
//     console.log("There was an error saving the graph product");
//   })
// }

saveData = async (newData) => {
  await AsyncStorage.setItem('new_emotion', newData)
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

      console.log("Emotions from save_emotions: ", emotions);

      this.getData().then((resData) => {
        console.log("Existing emotion data: ", resData);
        let currentData = JSON.parse(resData);

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
    case 'GRAPH_EMOTIONS':
      const emote = Object.assign({}, state)
      var currData;

      console.log("emote in graph_emotions: ", emote);

      // getData().then((existData) => {
      //   console.log("Existing data from graph emotions: ", existData);
      //   currData = JSON.parse(existData);
      // })
      // .catch((err) => {
      //   console.log("There was an error getting the product: ", err);
      // });
      //
      // getGraphData().then((graphData) => {
      //   console.log("Existing graph data: ", graphData);
      //   let currentGraph = JSON.parse(graphData);
      //   if (!currentGraph) {
      //     currentGraph = comp_data;
      //   }
      //
      //   saveGraphData(currData, currentGraph);
      // })
      // .catch((err) => {
      //   console.log("There was an error getting the product: ", err);
      // });

      return emote;
    default:
      return state
  }
};

export default EmotionReducer;

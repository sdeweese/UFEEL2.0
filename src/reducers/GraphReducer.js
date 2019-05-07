import { AsyncStorage } from 'react-native';

let initialState = {
  labels: ["Joy", "Love", "Fear", "Anger", "Sadness", "Surprise"],
  datasets: [{
    data: [0, 0, 0, 0, 0, 0]
  }],
  month: ""
}

getGraphData = async () => {
  let received = await AsyncStorage.getItem('graph');
  return received;
}

saveGraph = async (newGraph) => {
  await AsyncStorage.setItem('graph', newGraph)
  .then(() => {
    console.log("Successfully saved graph");
  })
  .catch((err) => {
    console.log("Error in saving graph: ", err);
  });
}

const GraphReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_GRAPH':
      let addGraphState;
      let flag = 0;
      let ind;

      console.log("Does it go to add graph?");

      getGraphData().then((result) => {
        let parsedData = JSON.parse(result);

        if (!parsedData) {
          console.log("Does it do this?");
          parsedData = [];
          addGraphState = Object.assign({}, state);
        } else {
          for (key in parsedData) {
            if (parsedData[key].month === action.month) {
              addGraphState = Object.assign({}, parsedData[key]);
              ind = key;
              flag = 1;
              break;
            }
          }
        }

        if (action.emotype === "Joy") {
          addGraphState.datasets[0].data[0] += 1;
        } else if (action.emotype === "Love") {
          addGraphState.datasets[0].data[1] += 1;
        } else if (action.emotype === "Fear") {
          addGraphState.datasets[0].data[2] += 1;
        } else if (action.emotype === "Anger") {
          addGraphState.datasets[0].data[3] += 1;
        } else if (action.emotype === "Sadness") {
          addGraphState.datasets[0].data[4] += 1;
        } else {
          addGraphState.datasets[0].data[5] += 1;
        }

        if (flag === 0) {
          addGraphState.month = action.month;
          console.log("addGraphState in first attempt: ", addGraphState);
          parsedData.push(addGraphState);
          console.log("parsedDate in first attempt: ", parsedData);
        } else {
          parsedData[ind] = Object.assign({}, addGraphState);
        }

        let stringifiedGraph = JSON.stringify(parsedData);

        saveGraph(stringifiedGraph);
        return addGraphState;
      })
      .catch((err) => {
        console.log("Graph error: ", err);
        if (err) {
          return null;
        }
      });
    default:
      return state;
  }
};

export default GraphReducer;

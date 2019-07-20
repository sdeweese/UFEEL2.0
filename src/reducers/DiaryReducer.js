import { AsyncStorage } from 'react-native';

let initialState = {
  entry: "",
  entries: []
}

getDiaryData = async () => {
  let diaryData = await AsyncStorage.getItem('diary');
  return diaryData;
}

saveDiary = async (newDiary) => {
  await AsyncStorage.setItem('diary', newDiary)
  .then(() => {
    console.log("Successfully saved new diary");
  })
  .catch((err) => {
    console.log("Unsuccessfully saved new diary");
  });
}

const DiaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_DIARY':
      let diaryEntry = Object.assign({}, state);
      diaryEntry.entry = action.entry;

      getDiaryData().then((res) => {
        let parsedRes = JSON.parse(res);

        if (!parsedRes) {
          parsedRes = [];
        }

        parsedRes.push(diaryEntry);

        let stringifiedDiary = JSON.stringify(parsedRes);

        saveDiary(stringifiedDiary);
        var subTime = new Date();
        var strTime = subTime.toString();
        const subObj = {entry: action.entry, time: strTime}
        diaryEntry.entries.push(subObj);

        console.log("diary entry entries in save: ", diaryEntry.entries);
      })
      .catch((err) => {
        console.log("Error in diary reducer: ", err);
      });

      return diaryEntry;

    case 'SEND_DIARY':
      let dc = Object.assign({}, state);

      console.log("Do i come here");

      getDiaryData().then((resD) => {
        console.log("resD: ", resD);
        let pDiary = JSON.parse(resD);

        dc.entries = pDiary;

        console.log("parsedDiary in send: ", pDiary);
        console.log("Diary content in send_diary: ", dc.entries);

      })
      .catch((err) => {
        console.log("Error in sending diary: ", err);
      });

      return dc;
    default:
      return state;
  }
};

export default DiaryReducer;

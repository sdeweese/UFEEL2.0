import { AsyncStorage } from 'react-native';
import bcrypt from 'react-native-bcrypt';

let initialState = {
  email: '',
  hashedPassword: ''
}

saveUser = async (user) => {
  await AsyncStorage.setItem('users', user)
  .then(() => {
    console.log("User successfully saved to local storage");
  })
  .catch((err) => {
    console.log("Error in saving user locally: ", err);
  });
}

checkUser = async () => {
  let users = await AsyncStorage.getItem('users');
  return users;
}

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_USER':
      const savedUser = Object.assign({}, action.newUser);
      let flag = 1;

      this.checkUser()
      .then((users) => {
        console.log("Existing users on this device: ", users);
        let currentUsers = JSON.parse(users);

        if (!currentUsers) {
          currentUsers = [];
          currentUsers.push(savedUser);
          let stringUsers = JSON.stringify(currentUsers);
          saveUser(stringUsers);
        } else {
          var i;
          for (i = 0; i < currentUsers.length; i++) {
            if (currentUsers[i].email === savedUser.email) {
              console.log("This email has already been used for another account");
              let userObj = {email: ''};
              const checkUser = Object.assign({}, userObj);
              flag = 0;
              return checkUser;
            }
          }

          if (flag === 1) {
            currentUsers.push(savedUser);
            let stringUsers = JSON.stringify(currentUsers);
            saveUser(stringUsers);
          }
        }
      })
      .catch((err) => {
        console.log("Error in registering user: ", err);
      });

      return savedUser;
    case 'LOGIN_CHECK':
      const user = Object.assign({}, action.user);

      this.checkUser()
      .then((users) => {
        console.log("Existing users on this device: ", users);
        let currentUsers = JSON.parse(users);
        var i;

        for (i = 0; i < currentUsers.length; i++) {
          if (currentUsers[i].email === user.email) {
            console.log("Found account with same email");
            const sameUser = Object.assign({}, currentUsers[i]);
            return sameUser;
          }
        }

        return user;
      })
      .catch((err) => {
        console.log("Error occurred trying to check user: ", err);
      });
    case 'LOGIN_SAVE':
      const userObj = Object.assign({}, action.userObj);
      console.log("Saved login data of user");
      return userObj;
    default:
      return state;
  }
};

export default UserReducer;

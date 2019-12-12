# UFEEL

Mental Health application designed for Santa Clara University and its students

# Instructions on how to start

*Make sure you read how to use github so that you do not overwrite code and push to master/origin branch unknowingly*

1. Install node.js
2. Clone repo into a folder on your device by using `git clone <our_REPO_ssh_or_https_key`
3. Go to terminal or command line prompt and navigate to that folder.
4. Once in folder, type in command line `npm install` to install all the dependencies and modules in the folder.
5. You can now run the application by using the command line `npm start`: This will open up a tab on your browser. Wait until a message appears that says "Tunnel ready." Then, click on the "Tunnel" option in the lower left hand of the browser screen. 
6. Download the Expo Cli app on the phone.
7. If you are using iOS, use the built-in camera app on the phone to scan the QR code. A link will come up asking to open the Expo Cli app. However, for Android devices, the QR code can be scanned from within the Expo Cli app itself. (Note: XCODE's iOS simulator is another option for testing the app. Android simulators are also available.)

# Instructions on where to write code

1. For CSS, wrtie will go into a src/style folder. Most of the style is written within each screen. A more scalable approach would be to make one CSS file and link each screen back to that file to ensure standardized style throughout the app. 
2. For backend and frontend code, these will go into the src/screen/<name_of_screen files.
3. To add in new modules and dependencies, ensure you pick ones that are verified and will not be taken down. You can install these by typing in the command line: `npm install <name_of_module_or_dependency>`.
4. Please remember to follow github protocols and do not overwrite master (`smacks`) branch; work off your own branches.

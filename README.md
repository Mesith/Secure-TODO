
# Secure Todo App


The Secure Todo App is a React Native application designed to provide a secure and organized way to manage your todo items. This app ensures that only authenticated users can view, add, and delete todo items, ensuring the privacy and security of your tasks.


## Features

- Authentication: Users are required to authenticate themselves before accessing the app's functionalities, ensuring secure access to their todo items.

- View Todo Items: Once authenticated, users can view their existing todo items, providing an organized overview of their tasks.

- Add Todo Items Users can easily add new todo items to the app, allowing them to capture and track new tasks as they arise.

- Delete Todo Items: With a simple user interface, users can delete completed or unnecessary todo items, helping them keep their task list up to date.


## Installation Guide:

1. **Prerequisites**:

`Node.js` Ensure you have Node.js installed on your system.

`npm` or `yarn` Use either npm or yarn as your package manager.

2. **Installation**:

Clone the repository from GitHub.
Navigate to the project directory.
Run `npm install` or `yarn install` to install the project dependencies.

3. **Usage**:

Start the development server by running `npm start` or `yarn start`.
Launch the app on an iOS or Android simulator/emulator or scan the QR code using the Expo app on your mobile device.

or else

```
npm run android

```

or 

```
npm run android

```


authenticate yourself using local authentication.
Once authenticated, you will have access to view your todo items, add new tasks, and delete completed tasks.
## Project Structure

`src/app`-  directory Contains the source code of the React Native application.

`src/app/components/` -  directory Contains reusable components used throughout the app.

`src/app/screens/` - directory Contains the main screens of the app, such as the authentication  screen, todo list screen

`src/app/context` defined all the React context files to manage app state and functionality

`src/app/hooks` directory contain all the custom hooks defined

`__test__` contain all the units tests
## Technology Used

The project was created as an Expo bare React Native project, which means it utilizes the Expo framework while maintaining the flexibility and control of a bare React Native project.

In this project, the following Expo features have been utilized:

`Expo Local Authentication`: Expo provides a module for local authentication, allowing you to implement features like fingerprint or face recognition for user authentication in your app.

`Expo SQLite`: Expo offers a SQLite database module that enables data persistence in your application. You can use SQLite to store and retrieve data locally on the user's device.

`Expo Intent Launcher`: This feature allows you to handle redirects and open external apps if the user is not enrolled in local authentication. It provides a convenient way to manage app interactions with other installed apps on the device.

Apart from the Expo-specific features, the project also includes the following components:

**Unit Testing**: `React Native Testing Library` and `Jest` have been implemented for unit testing. These tools help ensure the correctness of individual components and functions within the application by running automated tests.

**React Navigation**: The project utilizes React Navigation for handling navigation within the app. React Navigation provides a flexible and customizable way to manage screens, navigation stacks, and navigation patterns in a React Native app.

**Linting**: The project uses a static code analysis tool, such as ESLint, for identifying and flagging programming errors, bugs, and code style violations. Linting helps maintain code quality and ensures consistency across the project.

**Static Type Checking**: TypeScript is used for static type checking in the project. TypeScript adds static typing to JavaScript, allowing for better code quality, improved development experience, and catching potential errors before runtime.

By incorporating these technologies and tools into the project, it aims to provide enhanced user authentication, efficient data persistence, reliable unit testing, seamless navigation, and improved code quality and analysis.
## Unit Tests
The project includes a comprehensive set of unit tests, covering various aspects of the codebase. These tests can be found in the `__test__` folder, which houses both snapshot tests and unit tests.

**Running Unit Tests:**

To run the unit tests, execute the following command:

```
npm run test
```

This command will trigger the test runner, which will run all the unit tests in the "test" folder. The test runner will provide feedback on the test results, including the number of tests passed and any failures or errors encountered during testing.
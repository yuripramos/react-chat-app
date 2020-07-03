# React-chat-app

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## :octopus: Getting Started and How it works

Simple chat application between users made with Socket.io, React and Typescript. This project is responsive.

Every new tab opened is created a new user(with a random username), to see the application in action open 2 tabs and send messages between them.

|     | Specs                                                                                                     |
| --- | --------------------------------------------------------------------------------------------------------- |
| ⚛️  | **React 16.12**. latest stable version of react                                                           |
| ✨  | **React Hooks** [React hooks](https://reactjs.org/docs/hooks-intro.html)                                  |
| 😎  | **TypeScript** JavaScript that scales.                                                                    |
| 🌐  | **Context API** data through the component tree without having to pass props down manually at every level |
| 🔓  | **Socket.io** Real-time, bidirectional and event-based communication.                                     |

## :cloud: Installation

```sh
npm install or yarn
node src/server/index.js
```

open a new tab in your terminal and:

```sh
npm run start OR yarn start
access http://localhost:8080/
```

**Requires node >= 10.0.0**

## Unit Tests

`npm run test`

[Testing Behaviors and not implementation details](https://kentcdodds.com/blog/testing-implementation-details)

## Features

```
 1. [x] Socket.io chat interface
 2. [x] Chat box displaying name and date time
 3. [x] Blink tab when you have unread messages
 4. [x] Modify username in settings
 5. [x] Toggle to Dark mode
 6. [x] Toggle Clock display
 7. [x] Enable send messages on CTRL + ENTER
```

## Build

```sh
npm run build OR yarn build
serve the folder /dist
access http://localhost:8080/
```

## Roadmap

**Release 0.1** (current) - First release of the app</br>
**Release 0.2** - Save settings in localStorage and add support to unread chat notification</br>
**Release 0.3** - Internationalization (support for english and spanish)</br>
**Release 0.4** - Improvements in UI and transistions</br>
**Release 0.5** - Link Parser (Youtube and Images thumb)</br>
**Release 0.6** - Unread messages count in the chat tab</br>

## :exclamation: Credits

Yuri Ramos

## :scroll: License

MIT

Due to projects restrictions of the usage of CSS preprocessors and not CSS-in-JS there's a few approaches like refs inside the message container that I was not able to solve in the best way....

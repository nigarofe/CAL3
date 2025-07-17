# CAL: A Framework for Adaptive Computer-Assisted Learning

This project is a Computer-Assisted Learning (CAL) framework designed to offer an adaptive learning path. The system dynamically adjusts to both the desired depth of knowledge and the learner's available time, ensuring a personalized and efficient learning experience.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your system. You can check if you have them installed by running:

```bash
node -v
npm -v
```

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nigarofe/CAL.git
   ```
2. Navigate to the `web-app` directory:
   ```bash
   cd web-app
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Available Scripts

In the `web-app` directory, you can run the following commands:

### `npm start`

Runs the app in the production mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The server will restart if you make edits.<br>

### `npm run dev`

Runs the app in the development mode using [nodemon](https://nodemon.io/).<br>
The server will automatically restart if you make any changes to the files.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run lint`

Runs the linter to check for code quality and style issues.

### `npm run format`

Formats the code using [Prettier](httpss://prettier.io/).

## Exposing the Application

### Local Network Access

To allow other devices on your local network to access the application, you need to make the following changes:

1.  **Find your local IP address.** On Windows, open Command Prompt and type `ipconfig`. Look for the “IPv4 Address” under your active network adapter.
2.  **Modify your Express app to listen on all network interfaces.** In `src/server.js`, change `app.listen` to:
    ```javascript
    const port = 3000;
    app.listen(port, '0.0.0.0', () => {
      console.log(`Server running at http://0.0.0.0:${port}/`);
    });
    ```
3.  **Allow the app through your firewall.** You may need to configure your firewall to allow incoming connections to the port the application is running on.

### Internet Access (using ngrok)

If you want someone *outside* your local network to access your app, [ngrok](httpshttps://ngrok.com/) is a great tool.

1.  **Install ngrok:** If you haven't already, download and install it from [ngrok.com](https://ngrok.com/).
2.  **Start your Node.js app** as you normally would (`npm start` or `npm run dev`).
3.  **Start ngrok:** Open a *new* command prompt and run:
    ```bash
    ngrok http 3000
    ```
4.  **Get the public URL:** ngrok will display a public URL (e.g., `https://random-string.ngrok.io`). Anyone with this URL can access your local server.

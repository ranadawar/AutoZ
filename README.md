# Expo React Native App Setup Guide

Welcome to the Expo React Native App setup guide! In just a few simple steps, you'll have your Expo React Native project up and running on your computer and mobile device. Let's get started!

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Connect to Your Mobile Device](#connect-to-your-mobile-device)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before we begin, make sure you have the following prerequisites installed:

1. **Node.js**: You need Node.js installed on your computer. If you don't have it, you can download and install it from the official website: [Node.js Download](https://nodejs.org/).

2. **Expo Client**: You will need the Expo Client app installed on your iPhone or iOS device. You can find it on the [App Store](https://apps.apple.com/us/app/expo-go/id982107779).

3. **Expo Account**: If you haven't already, create an Expo account by visiting the [Expo website](https://expo.dev/signup). This account is used to manage your projects and provide additional features.

4. **Visual Studio Code (VSCode)**: Download and install Visual Studio Code from the official website: [VSCode Download](https://code.visualstudio.com/). Additionally, make sure to install the following extensions within VSCode:
   - React Native Tools
   - ESLint
   - Prettier - Code formatter

## Getting Started

1. **Login to Expo Account**:

   - Open your Expo Client app on your iOS device.
   - Log in using your Expo account credentials.

2. **Login to Expo Account in VSCode**:

   - Open Visual Studio Code.
   - Open the terminal within VSCode.
   - Run the following command and follow the prompts to log in:
     ```bash
     expo login
     ```

3. **Create a Project Directory**:

   - Create a new folder on your desktop for your project.

4. **Open Project in VSCode**:

   - Open Visual Studio Code.
   - Open the project folder you created on your desktop using VSCode by navigating to `File > Open Folder`.

5. **Install Dependencies**:

   - In the VSCode terminal, navigate to your project folder using the `cd` command, e.g., `cd path/to/your/project`.
   - Install the project dependencies by running the following command:
     ```bash
     npm install
     ```

6. **Start Your Project**:
   - After the installation is complete, start your Expo React Native project with the following command:
     ```bash
     npm start
     ```
   - This will initiate the Expo development server.

## Connect to Your Mobile Device

1. **Open Expo Client App**:

   - Open the Expo Client app on your iOS device.

2. **Scan QR Code**:
   - In the terminal where your Expo project is running (from the previous step), you will see a QR code.
   - Use the Expo Client app to scan the QR code.
   - Your app will load on your mobile device.

## Troubleshooting

If you encounter any issues during setup, refer to the [Expo documentation](https://docs.expo.dev/) or seek help from the Expo community for support.

## Contributing

Contributions to this setup guide are welcome! Feel free to submit issues and pull requests to improve this guide.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

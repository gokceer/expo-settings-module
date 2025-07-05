# expo-settings-module

Native module created using the Expo Modules API.

This project is based on the official Expo tutorial for writing custom native modules:  
📚 [Expo Native Module Tutorial](https://docs.expo.dev/modules/native-module-tutorial/)

---

## 📦 About

`expo-settings-module` is a sample Expo module created to learn how to build native modules using the [Expo Modules API](https://docs.expo.dev/modules/overview/).

It includes:

- Kotlin + Swift native module implementation
- TypeScript interface for usage in React Native apps
- Example app to test the module

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone git@github.com:your-username/expo-settings-module.git
cd expo-settings-module
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the example app

```bash
cd example
yarn install
npx expo run:android
# or
npx expo run:ios
```

> Make sure you have Android Studio / Xcode and a device or simulator set up.

---

## 📁 Project Structure

```
expo-settings-module/
├── android/                # Native Android code (Kotlin)
├── ios/                    # Native iOS code (Swift)
├── src/                    # JS/TS interface
├── example/                # Example Expo app to test the module
├── package.json
└── README.md
```

---

## 📚 Resources

- [Expo Modules API](https://docs.expo.dev/modules/overview/)
- [Native Module Tutorial](https://docs.expo.dev/modules/native-module-tutorial/)
- [Expo Module Template GitHub](https://github.com/expo/expo-module-template)


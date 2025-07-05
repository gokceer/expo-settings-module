import { View, Text, Button } from "react-native";
import React, { useEffect, useState } from "react";
import * as Settings from "expo-settings";

const App = () => {
  const [theme, setTheme] = useState(Settings.getTheme());
  const nextTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const subscription = Settings.addThemeListener(({ theme: newTheme }) => {
      setTheme(newTheme);
    });

    return () => subscription.remove();
  }, [setTheme]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme === "dark" ? "#000" : "#fff",
      }}
    >
      <Text style={{ color: theme === "dark" ? "#fff" : "#000" }}>
        Theme: {theme}
      </Text>
      <Button
        title={"Change Theme"}
        onPress={() => Settings.setTheme(nextTheme)}
      ></Button>
    </View>
  );
};

export default App;

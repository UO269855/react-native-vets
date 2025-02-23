import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import {
  useFonts as useNunito,
  Nunito_400Regular,
} from "@expo-google-fonts/nunito";
import {
  useFonts as useRoboto,
  RobotoMono_700Bold,
} from "@expo-google-fonts/roboto-mono";
import { Navigator } from "./src/navigators";
import { theme } from "./src/theme";

export default function App() {
  const [nunitoLoaded] = useNunito({
    Nunito_400Regular,
  });
  const [robotoLoaded] = useRoboto({
    RobotoMono_700Bold,
  });
  if (!nunitoLoaded || !robotoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navigator />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

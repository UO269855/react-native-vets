import { NavigationContainer } from "@react-navigation/native";
import { AppNavigator } from "./app.navigator";
export const Navigator = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

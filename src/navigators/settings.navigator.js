import { createStackNavigator } from "@react-navigation/stack";
import { SettingsScreen } from "../screens/settings.screen";
const SettingsStack = createStackNavigator();
export const SettingsNavigator = () => (
  <SettingsStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <SettingsStack.Screen name="SettingsScreen" component={SettingsScreen} />
  </SettingsStack.Navigator>
);

import { createStackNavigator } from "@react-navigation/stack";
import { VetsScreen } from "../screens/vets.screen";

const VetsStack = createStackNavigator();

export const VetsNavigator = () => (
  <VetsStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <VetsStack.Screen name="VetsScreen" component={VetsScreen} />
  </VetsStack.Navigator>
);

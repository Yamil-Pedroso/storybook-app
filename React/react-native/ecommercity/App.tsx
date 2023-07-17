import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import * as SplashScreens from "expo-splash-screen";
import { useCallback } from "react";
import BottomTapNavigation from "./navigation/BottomTapNavigation";
import Cart from "./screens/Cart";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if(fontsLoaded) {
      await SplashScreens.hideAsync();
    }
  }, [fontsLoaded]);

  if(!fontsLoaded) {
    return null;
  }


  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Stack.Navigator>
        <Stack.Screen 
          name="Bottom Navigation" 
          component={BottomTapNavigation} 
          options={{
            headerShown: false,
          }}
          />
        <Stack.Screen 
          name="Cart" 
          component={Cart} 
          options={{
            headerShown: false,
          }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


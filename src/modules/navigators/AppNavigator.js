import React from "react";
import { createNavigationContainerRef, NavigationContainer } from "@react-navigation/native";
import { ScreenName } from "../../general/constants/ScreenNames";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TodoScreen from "../screens/ToDoScreen";
const Stack = createNativeStackNavigator();
export const appNavigation = createNavigationContainerRef();
function AppNavigator(props){
    const onNavigationReady = () => {
        // SplashScreen.hide(); // just hide the splash screen after navigation ready
      };
    return (
        <NavigationContainer
        ref={appNavigation}
        onReady={onNavigationReady}>
            <Stack.Navigator 
            initialRouteName={ScreenName.toDoScreen} 
            screenOptions={{headerShown:false}}
            >
                <Stack.Group>
                    <Stack.Screen name={ScreenName.toDoScreen}
                    component={TodoScreen}
                    />
                </Stack.Group>

            </Stack.Navigator>

        </NavigationContainer>
    )
}
export default AppNavigator

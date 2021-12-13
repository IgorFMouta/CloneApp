import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../screens/login";
import { Home } from "../screens/home"


const Stack = createStackNavigator();
export const Routes = () =>{
    return(
        <Stack.Navigator screenOptions={{ headerTransparent: true, headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}

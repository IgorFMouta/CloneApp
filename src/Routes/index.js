import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../components/home";
import { DetailsScreen } from "../components/details"


const Stack = createStackNavigator();
export const Routes = () =>{
    return(
        <Stack.Navigator screenOptions={{ headerTransparent: true, headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    )
}

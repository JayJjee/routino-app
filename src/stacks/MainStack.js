import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "../screens/SignIn";

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{
            headerShown: false,
        }}
    >
        <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
)




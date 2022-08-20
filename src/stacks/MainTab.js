import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CustomTabBar from "../components/CustomTabBar.js";

import Home from "../screens/Home/index.js";
import Search from "../screens/Search";
import Profile from "../screens/Profile";
import Publication from "../screens/Publication";
import Settings from "../screens/Settings/index.js";

const Tab = createBottomTabNavigator();

export default () => {
    return (
        <Tab.Navigator
            tabBar={props=><CustomTabBar {...props}/>}
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                unmountOnBlur: true,
            }}
        >
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Settings" component={Settings} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Publication" component={Publication} />
            <Tab.Screen name="Home" component={Home} />
        </Tab.Navigator>)

}


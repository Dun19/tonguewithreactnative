import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { HomeScreen } from "../screens/HomePage";
import React from "react";
const Tab = createMaterialBottomTabNavigator();
import {
  FontAwesome5,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";

export function MyTabs() {
  return (
    // <Tab.Navigator
    //   initialRouteName="Home"
    //   activeColor="#ffffff"
    //   inactiveColor="#a5f3fc"
    //   barStyle={{ backgroundColor: "#38668E" }}
    // >
    //   <Tab.Screen
    //     name="Home"
    //     component={HomeScreen}
    //     options={{
    //       tabBarLabel: "Home",
    //       tabBarIcon: () => (
    //         <FontAwesome5 name="home" size={24} color="black" />
    //       ),
    //     }}
    //   />
    //   <Tab.Screen
    //     name="Meal"
    //     component={MealScreen}
    //     options={{
    //       tabBarLabel: "Meal",
    //       tabBarIcon: () => (
    //         <MaterialCommunityIcons
    //           name="silverware-fork-knife"
    //           size={24}
    //           color="black"
    //         />
    //       ),
    //     }}
    //   />
    //   <Tab.Screen
    //     name="Calendar"
    //     component={CalendarScreen}
    //     options={{
    //       tabBarLabel: "Calendar",
    //       tabBarIcon: () => (
    //         <FontAwesome5 name="calendar-alt" size={24} color="black" />
    //       ),
    //     }}
    //   />
    //   <Tab.Screen
    //     name="Plans"
    //     component={PlansScreen}
    //     options={{
    //       tabBarLabel: "Plans",
    //       tabBarIcon: () => (
    //         <FontAwesome5 name="clipboard-list" size={24} color="black" />
    //       ),
    //     }}
    //   />
    //   {/*<Tab.Screen
    //       name="More"
    //       component={MoreScreen}
    //       options={{
    //         tabBarLabel: "More",
    //         tabBarIcon: () => (
    //           <Feather name="more-horizontal" size={24} color="black" />
    //         ),
    //       }}
    //     />*/}
    // </Tab.Navigator>
  );
}

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button
        title="Go another details page"
        onPress={() => navigation.push("Details")}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

function TitlesScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Titles Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function RootApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* <View style={styles.container}> */}
        {/* <Text>Open up App.js to start working on your app!!</Text>
        <StatusBar style="auto" /> */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Titles" component={TitlesScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        {/* </View> */}
        {/* <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Overview" }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootApp;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

import { StatusBar } from "expo-status-bar"
import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import { Android } from "./src/utils/safeAreaView"
import { Provider } from "react-redux"
import { store } from "./store"

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView
        style={Android.SafeAreaView}
        className="bg-[#00CCBB] items-center justify-center flex-1"
      >
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </SafeAreaView>
    </Provider>
  )
}

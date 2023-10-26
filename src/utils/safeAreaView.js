import { Platform, StyleSheet, StatusBar } from "react-native"

export const Android = StyleSheet.create({
  SafeAreaView: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
})

//싹 다 날리고 웹뷰에 나온 예제코드로 대체한다.
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import * as React from "react";
import { WebView } from "react-native-webview";

export default function App() {
  return (
    <WebView style={styles.container} source={{ uri: "https://expo.dev" }} />
  );
}

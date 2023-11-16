/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Button, View } from 'react-native';
import Video from 'react-native-video';


function App(): JSX.Element {
  const [paused, setPaused] = useState<boolean>(true);
  const radioStreamUrl: string = 'YOUR_RADIO_STREAM_URL'; // Replace with your actual radio stream URL

  return (
    <SafeAreaView style={styles.container}>
      <Video
        source={{ uri: radioStreamUrl }}
        paused={paused}
        audioOnly={true}
        onError={(e) => {
          console.error('Error playing radio stream', e);
        }}
      />
      <View style={styles.buttonContainer}>
        <Button title={paused ? "Play" : "Pause"} onPress={() => setPaused(!paused)} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  buttonContainer: {
    margin: 20,
  },
});

export default App;

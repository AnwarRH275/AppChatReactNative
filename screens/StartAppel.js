import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'

const StartAppel = ({ name, setName, roomId, setRoomId, joinRoom }) => {
  return (
    <View style={styles.startMeetingContainer}>
      <View style={styles.info}>
        <TextInput
          style={styles.textInput}
          value={name}
          placeholder="Enter name"
          placeholderTextColor="#767476"
          onChangeText={(text) => setName(text)}
        />
      </View>
      <View style={styles.info}>
        <TextInput
          style={styles.textInput}
          value={roomId}
          placeholder="Enter number phone"
          placeholderTextColor="#767476"
          onChangeText={(text) => setRoomId(text)}
          keyboardType="numeric"
        />
      </View>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <TouchableOpacity style={styles.startMeetingButton} onPress={joinRoom}>
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
            }}
          >
            Appler
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  info: {
    width: "100%",
    backgroundColor: "#373538",
    height: 50,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#484648",
    padding: 12,
    justifyContent: "center",
  },
  textInput: {
    color: "white",
    fontSize: 15,
  },
  startMeetingButton: {
    width: 350,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    height: 50,
    borderRadius: 15,
  },
});

export default StartAppel
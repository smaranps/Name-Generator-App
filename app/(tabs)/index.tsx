import { useState } from "react";
import { View, StyleSheet, Text, Alert, TouchableOpacity } from "react-native";
import * as Clipboard from "expo-clipboard";

export default function HomeScreen() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const generate = async () => {
    try {
      let response = await fetch(
        "https://dfm3s90j-3000.use.devtunnels.ms/generatepassword"
      );
      let data = await response.text();
      console.log("Response" + response);
      console.log("Data:" + data);
      setPassword(data);
    } catch (error) {
      Alert.alert("There is an error while generating" + error);
    }
  };
  const generateUser = async () => {
    try {
      let responseUser = await fetch(
        "https://dfm3s90j-3000.use.devtunnels.ms/generateusername"
      );
      let dataUser = await responseUser.text();
      console.log("Response" + responseUser);
      console.log("Data:" + dataUser);
      setUsername(dataUser);
    } catch (error) {
      Alert.alert("There is an error while generating" + error);
    }
  };
  const copyPaste = async () => {
    await Clipboard.setStringAsync(password);
  };
  const copyPasteUser = async () => {
    await Clipboard.setStringAsync(username);
  };
  return (
    <View
      style={{ flex: 1, justifyContent: "center", backgroundColor: "#CDC1FF" }}
    >
      <View
        style={{
          backgroundColor: "#000957",
          padding: 30,
          width: "80%",
          height: "60%",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          borderRadius: 25,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 40,
            fontFamily: "Verdana",
            color: "white",
          }}
        >
          Password Generator
        </Text>
        <View style={{ padding: 10, width: "100%", marginTop: 20 }}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              fontFamily: "Verdana",
              color: "white",
            }}
          >
            {password}
          </Text>

          <TouchableOpacity onPress={generate}>
            <Text
              style={{
                fontSize: 20,
                color: "#500073",
                fontFamily: "Verdana",
                textAlign: "center",
              }}
            >
              Generate Password
            </Text>{" "}
          </TouchableOpacity>
          <TouchableOpacity onPress={copyPaste} disabled={password === ""}>
            <Text
              style={{
                fontSize: 20,

                color: "#FFEB00",
                textAlign: "center",
              }}
            >
              Copy Password
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              fontFamily: "Verdana",
              color: "white",
              marginTop: 30,
            }}
          >
            {username}
          </Text>
          <TouchableOpacity onPress={generateUser}>
            <Text
              style={{
                fontSize: 20,
                color: "#500073",
                fontFamily: "Verdana",
                textAlign: "center",
              }}
            >
              Generate name
            </Text>{" "}
            <TouchableOpacity
              onPress={copyPasteUser}
              disabled={username === ""}
            >
              <Text
                style={{
                  fontSize: 20,
                  marginTop: 5,
                  color: "#FFEB00",
                  textAlign: "center",
                }}
              >
                Copy Username
              </Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});

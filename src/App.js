import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";

export default function App() {
  const [phoneCode, setPhoneCode] = useState("");
  const [passportCode, setPassportCode] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const handleLogin = () => {
    Keyboard.dismiss();
    if (phoneCode === "0912345678" && passportCode === "0000") {
      setLoginStatus("登入成功");
    } else {
      setLoginStatus("登入失敗");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            margin: 10,
            width: 300,
            borderBottomWidth: 1,
            borderColor: "#fff",
            paddingBottom: 20
          }}
        >
          會員登入
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 16,
            margin: 10,
            width: 300
          }}
        ></Text>
        <TextInput
          maxLength={10}
          style={{
            height: 50,
            width: 300,
            borderRadius: 0,
            borderColor: "darkgray",
            backgroundColor: "white",
            color: "black",
            fontSize: 28,
            textAlign: "center"
          }}
          onChangeText={(text) => setPhoneCode(text)}
          keyboardType={"numeric"}
          value={phoneCode}
          autoFocus={true}
        />
        <Text
          style={{
            color: "white",
            fontSize: 16,
            margin: 10,
            width: 300
          }}
        >
          密碼
        </Text>
        <TextInput
          maxLength={4}
          style={{
            height: 50,
            width: 300,
            borderRadius: 0,
            borderColor: "darkgray",
            backgroundColor: "white",
            color: "black",
            fontSize: 28,
            textAlign: "center"
          }}
          onChangeText={(text) => setPassportCode(text)}
          keyboardType={"numeric"}
          value={passportCode}
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={{
            backgroundColor: "#00aeef",
            borderRadius: 5,
            width: 300,
            height: 40,
            justifyContent: "center",
            margin: 40
          }}
          onPress={handleLogin}
        >
          <Text style={{ color: "white", textAlign: "center", fontSize: 20 }}>
            登入
          </Text>
        </TouchableOpacity>
        <Text style={{ color: loginStatus === "登入成功" ? "yellow" : "red" }}>
          {loginStatus}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center"
  }
});

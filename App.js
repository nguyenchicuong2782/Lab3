import React, { useState } from "react";
import { Button, StyleSheet, Text, View, TextInput, Image, ImageBackground } from "react-native";

const image = require('./assets/background_pkm.jpg');
const Login = ()=>{
    const [Username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    return (

    <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}  >
        <Text style={styles.text}>
        
            <Image
            source={require('./assets/iconpkm.png')}
            style={{
                width:'580px',
                height:'380px',
                alignSelf:"flex-end",
               flex:1
            }}
             
            />


            <Text style={{
                alignSelf:"center",
                fontSize:40,
                fontWeight: "bold",
                margin:10,
                color: 'yellow',
            }}
            >LOGIN</Text>


            <TextInput
               style={{
                margin: 10,
                height: 40,
                borderColor: 'white',  // Màu viền
                borderWidth: 1,
                color: 'white',  // Màu chữ đen
                backgroundColor: 'black'  // Màu nền trắng
              }}
                placeholder="Username"
                onChangeText={(text)=> setUserName(text)}
                value={Username}
            />
            
            <TextInput
              style={{
                margin: 10,
                height: 40,
                borderColor: 'white',  // Màu viền
                borderWidth: 1,
                color: 'white',  // Màu chữ đen
                backgroundColor: 'black'  // Màu nền trắng
              }}
              placeholder="Password"
              onChangeText={(text) => setPassword(text)}
              value={password}
            />

            <Button
                color="red"
                title="Đăng Nhập"
                onPress={()=> alert("Xin chào Username "+ userName )}
                
            />

            
            <Button
                color="yellow"
                title="Đăng ký"
                onPress={()=> alert("Xin chào Username "+ userName )}
                
            />
      </Text>
        </ImageBackground>
    </View>
    )
};

export default Login;
const styles = StyleSheet.create(
    {
        container: {
           
            flex:1,
            flexDirection:'row',
            justifyContent: "center",
            //alignItems: "center",
            width :'100',
            height : '200',
            backgroundColor: "#ce33d6",
          },
        
          image: {
            backgroundColor: "#000",
            flex: 1,
        
            justifyContent: "center",
            alignItems: "center",
          },
        
          title: {
            fontWeight: "bold",
            fontSize: 24,
            color: "white",
        
            marginBottom: 40,
        
            flex: 1,
        
            backgroundColor: "#000",
          },
        
          textInput: {
            width: "60%",
            marginVertical: 10,
            backgroundColor:"green",
            justifyContent: "center",
            alignItems: "stretch",
          },
    }
);
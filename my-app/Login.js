import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Login({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    navigation.navigate('Homepage', { name, email });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.jobizz}>Jobizz</Text>
      <View style={styles.Group46}>
        <Text style={styles.Headline}>Welcome Back 👋</Text>
        <Text style={styles.semiHeadline}>Let’s log in. Apply to jobs!</Text>
      </View>
      <View style={styles.Group49}>
        <TextInput
          style={styles.textinput}
          placeholder='Name'
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.textinput}
          placeholder='Email'
          value={email}
          onChangeText={setEmail}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.Group52}>
        <Image source={require('./assets/Line 183.jpg')} />
        <Text style={styles.Group52text}> Or continue with </Text>
        <Image source={require('./assets/Line 183.jpg')} />
      </View>
      <View style={styles.Group57}>
        <View style={styles.Ellipse754}>
          <Image style={styles.apple} source={require('./assets/cib_apple.jpg')} />
        </View>
        <View style={styles.Ellipse754}>
          <Image style={styles.google} source={require('./assets/grommet-icons_google.jpg')} />
        </View>
        <View style={styles.Ellipse754}>
          <Image style={styles.facebook} source={require('./assets/Vector.jpg')} />
        </View>
      </View>
      <Text style={styles.lastParagraph}>Haven’t an account?<Text style={styles.Register}> Register</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFD',
  },
  time: {
    left: 15,
  },
  statusBar: {
    top:20,
    display: 'flex',
    flexDirection: 'row',
    width: 375,
    height: 44,
  },
  LeftSide: {
    width: 54,
    height: 21,
    top: 12,
    left: 24,
    borderRadius: 24,
  },
  RightSide: {
    width: 66.66,
    height: 11.34,
    top: 17.33,
    left: 230.67,
  },
  notch: {
    top: -2,
    left: 78,
  },
  jobizz: {
    width: 150,
    height: 33,
    top: 86,
    left: 24,
    fontSize: 22,
    lineHeight: 33,
    color: '#356899',
  },
  Headline: {
    width: 207,
    height: 34,
    top: 0,
    Left: 24,
    fontSize: 24,
    lineHeight: 33.6,
    color: '#0D0D26',
  },
  semiHeadline: {
    width: 170,
    height: 22,
    top: 5,
    Left: 24,
    fontSize: 14,
    lineHeight: 22.4,
    color: '#AFB0B6',
  },
  Group46: {
    width: 207,
    height: 63,
    top: 97,
    left: 24,
  },
  Group49: {
    width: 327,
    height: 52,
    top: 131,
    left: 24,
  },
  textinput: {
    width: 317,
    height: 52,
    Left: 24,
    borderWidth: 1,
    borderColor: '#AFB0B6',
    borderRadius: 10,
    paddingLeft: 15,
    marginBottom: 15,
  },
  button: {
    width: 317,
    height: 56,
    backgroundColor: '#356899',
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 24,
    fontSize: 16,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 48,
    paddingRight: 48,
  },
  Group52: {
    width: 327,
    top: 314,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    left: 24,
    height: 16,
  },
  Group52text: {
    lineHeight: 16.44,
    color: '#AFB0B6',
    fontSize: 13,
  },
  Group57: {
    width: 216,
    height: 56,
    top: 335,
    left: 69,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Ellipse754: {
    width: 56,
    height: 56,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lastParagraph: {
    top: 365,
    height: 18,
    textAlign: 'center',
    color: '#BDBEC2',
    fontSize: 14,
    lineHeight: 17.71,
  },
  Register: {
    fontSize: 14,
    lineHeight: 17.71,
    color: '#356899',
  },
});

import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
const logo = require('../assets/chatify_white.png');

const Gap = ({width, height}) => (
  <View style={{height: height ? height : 0, width: width ? width : 0}} />
);

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () => {
    navigation.navigate('Home', {
      data: {
        email: email,
        name: 'Okky Alwan Baidhoo',
      },
    });
  };

  const onRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username/Email"
          value={email}
          onChangeText={(value) => setEmail(value)}
          placeholderTextColor="gray"
        />
        <Gap height={20} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={(value) => setPassword(value)}
          placeholderTextColor="gray"
        />
        <Gap height={20} />
        <TouchableOpacity style={{alignSelf: 'flex-end'}}>
          <Text style={styles.textLink}>Forgot Password?</Text>
        </TouchableOpacity>
        <Gap height={20} />

        <TouchableOpacity onPress={() => onLogin()} style={styles.btnSignup}>
          <Text style={styles.textButton}>LOGIN</Text>
        </TouchableOpacity>
        <Gap height={20} />
        <TouchableOpacity onPress={() => onRegister()} style={styles.btnSignup}>
          <Text style={styles.textButton}>NO ACCOUNT YET? SIGNUP NOW</Text>
        </TouchableOpacity>
        <Gap height={20} />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#112340',
  },
  logo: {
    width: 220,
    height: 100,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 30,
  },
  formContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  input: {
    borderRadius: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    color: '#ccc',
    paddingLeft: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#ccc',
  },
  btnSignup: {
    backgroundColor: '#0BCAD4',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  textButton: {
    fontSize: 16,
    color: '#112340',
    fontWeight: 'bold',
  },
  textLink: {
    color: '#0BCAD4',
    fontWeight: 'bold',
  },
});

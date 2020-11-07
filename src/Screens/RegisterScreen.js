import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Radio, RadioGroup} from '@ui-kitten/components';
const logo = require('../assets/chatify_white.png');

const Gap = ({width, height}) => (
  <View style={{height: height ? height : 0, width: width ? width : 0}} />
);

const RegisterScreen = ({navigation}) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const onSubmit = () => {
    navigation.navigate('Home', {
      data: {
        email: email,
        name: 'Okky Alwan Baidhoo',
      },
    });
  };

  const onLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          placeholderTextColor="gray"
        />
        <Gap height={20} />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          placeholderTextColor="gray"
        />
        <Gap height={20} />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="gray"
        />
        <Gap height={20} />

        <TextInput
          style={styles.input}
          placeholder="Retype Password"
          placeholderTextColor="gray"
        />
        <Gap height={20} />

        <TextInput
          style={styles.input}
          placeholder="First Name"
          placeholderTextColor="gray"
        />
        <Gap height={20} />

        <RadioGroup
          selectedIndex={selectedIndex}
          style={{flexDirection: 'row'}}
          onChange={(index) => setSelectedIndex(index)}>
          <Radio>Male</Radio>
          <Radio>Female</Radio>
        </RadioGroup>
        <Gap height={20} />

        <TouchableOpacity onPress={() => onSubmit()} style={styles.btnSignup}>
          <Text style={styles.textButton}>SIGNUP</Text>
        </TouchableOpacity>
        <Gap height={20} />

        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text style={styles.text}>Already have account?</Text>
          <Gap width={5} />
          <TouchableOpacity onPress={() => onLogin()}>
            <Text style={styles.textLink}>Login now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;

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
    fontSize: 20,
    color: '#112340',
    fontWeight: 'bold',
  },
  textLink: {
    color: '#0BCAD4',
    fontWeight: 'bold',
  },
});

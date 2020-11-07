import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
const avatar = require('../assets/avatar.png');

const Gap = ({width, height}) => (
  <View style={{height: height ? height : 0, width: width ? width : 0}} />
);

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={avatar} style={styles.avatar} />
      <Gap height={20} />

      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.textBold}>Okky Alwan [Okky]</Text>
        <Text style={styles.text}>13th Oct 2000 - 20 years old</Text>
        <Text style={styles.text}>okkyalwan7@gmail.com</Text>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  avatar: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 30,
  },
  textBold: {
    color: '#112340',
    fontWeight: 'bold',
  },
  text: {
    color: '#112340',
  },
});

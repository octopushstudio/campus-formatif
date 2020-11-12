import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
const avatar = require('../assets/binainsani.jpg');

const Gap = ({width, height}) => (
  <View style={{height: height ? height : 0, width: width ? width : 0}} />
);

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={avatar} style={styles.avatar} />
      <Gap height={20} />

      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.textBold}>Universitas Bina Insani</Text>
        <Text style={styles.text}>
          Good job, your complete {'\n'}all task this month
        </Text>
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
    height: 165,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 30,
  },
  textBold: {
    fontSize: 20,
    color: '#112340',
    fontWeight: 'bold',
  },
  text: {
    color: '#112340',
    textAlign: 'center'
  },
});

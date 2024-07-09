import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CustomButton from '../components/CustomButton.js';
import Pagination from '../components/Pagination.js';

const Intro1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/digituslogo.png')} style={styles.logo} />
      <Image source={require('../assets/intro1.png')} style={styles.image} />
      <Text style={styles.title}>Enim ad minim</Text>
      <Text style={styles.subtitle}>Lorem ipsum dolor sit amet,   consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et
 dolore magna aliqua.</Text>
      <Pagination index={0} />
      <CustomButton title="İleri" onPress={() => navigation.navigate('Intro2')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFF',
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'stretch',
    marginTop: 25,
    marginBottom: 0,
  },
  image: {
    width: 450,
    height: 350,
    marginBottom: 35,
    resizeMode: 'stretch',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'green',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    color: '#666',
    marginBottom: 10,
  },
});

export default Intro1;

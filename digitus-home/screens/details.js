import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Details = ({ route, navigation }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Image source={require('../assets/digituslogo.png')} style={styles.logo} /> // Sayfanın üst tasarımı (geri tuşu ve logo)
        </View>
        <Image source={{ uri: item.image }} style={styles.image} /> //ilanla alakalı bilgilerin alıp sergilenmesi
        <View style={styles.content}>
          <View style={styles.descriptionContainer}>
            <View style={styles.highlightContainer}>
              <Text style={styles.highlightText}>{item.baslik}</Text>
            </View>
          </View>
          <View style={styles.detailContent}>
            <Text style={styles.detailText}>{item.description}</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}> // sayfanın altındaki footer
        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="home" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="book-outline" size={24} color="green" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="people-outline" size={24} color="green" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="notifications" size={24} color="green" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="menu" size={24} color="green" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContent: {
    paddingBottom: 60, 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  logo: {
    flex: 1,
    width: 120,
    height: 60,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: 350,
  },
  content: {
    padding: 15,
  },
  descriptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  highlightContainer: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
    margin: 5,
    borderRadius: 15,
    marginTop:50,
  },
  highlightText: {
    color: 'green',
    fontSize: 16,
    fontWeight:'bold',
  },
  detailContent: {
    marginTop: 20,
  },
  detailText: {
    fontSize: 20,
    color: '#333',
    
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    backgroundColor: '#FFF',
    position: 'absolute', 
    bottom: 0, 
    left: 0,
    right: 0,
  },
  footerButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Details;

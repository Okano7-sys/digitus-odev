

import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ads } from '../mockdata'; 

// story resimleri
import GununMenusu from '../assets/story/menu.png';
import BayramKutlamasi from '../assets/story/bayram.png';
import DigitusAnket from '../assets/story/anket.png';
import DuyuruVeGenelgeler from '../assets/story/duyuru.png';
import BugunDoguanlar from '../assets/story/dogum.png';
import AramizaKatilanlar from '../assets/story/katilanlar.png';

// storyler
const stories = [
  { id: '1', title: 'Günün \n Menüsü', image: GununMenusu },
  { id: '2', title: 'Bayram \n Kutlaması', image: BayramKutlamasi },
  { id: '3', title: 'Digitus \n Anket', image: DigitusAnket },
  { id: '4', title: 'Duyuru ve \n Genelgeler', image: DuyuruVeGenelgeler },
  { id: '5', title: 'Bugün \n Doğanlar', image: BugunDoguanlar },
  { id: '6', title: 'Aramıza \n Katılanlar', image: AramizaKatilanlar },
];

// ilan/post'ları sergileyen tasarım
const Home = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Details', { item })} style={styles.adCard}>
      <Image source={{ uri: item.image }} style={styles.adImage} />
      <View style={styles.adContent}>
        <Text style={styles.adTitle}>{item.title}</Text>
        <View style={styles.adFooter}>
          <View style={styles.adDescriptionContainer}>
            <Text style={styles.adDescription}>{item.baslik}</Text>
          </View>
          <View style={styles.adDateContainer}>
            <Ionicons name="calendar-outline" size={16} color="#666" />
            <Text style={styles.adDate}>{item.date}</Text>
          </View>
          <View style={styles.adLikesContainer}>
            <Ionicons name="heart-outline" size={16} color="#666" />
            <Text style={styles.adLikes}>{item.likes}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="search" size={24} color="black" /> 
        <Image source={require('../assets/digituslogo.png')} style={styles.logo} />
        <Ionicons name="person-outline" size={24} color="black" /> // header tasarımı
      </View>
      <ScrollView contentContainerStyle={styles.listContent}>
        <View style={styles.stories}>
          {stories.map((story) => (
            <View key={story.id} style={styles.story}>
              <Image source={story.image} style={styles.storyImage} />
              <Text style={styles.storyTitle}>{story.title}</Text> // storyler
            </View>
          ))}
        </View>
        <FlatList
          data={ads}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.adListContent}  // ilan/post'ların mockdatadan alınıp sergilenmesi
        />
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}> //sayfanın altındaki footer
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
  },
  listContent: {
    paddingBottom: 20,
  },
  stories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  story: {
    alignItems: 'center',
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 5,
  },
  storyTitle: {
    fontSize: 12,
    textAlign: 'center',
  },
  adListContent: {
    padding: 20,
  },
  adCard: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  adImage: {
    width: '100%',
    height: 200,
  },
  adContent: {
    padding: 15,
  },
  adTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'green',
  },
  adFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  adDescriptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
  },
  adDescription: {
    fontSize: 14,
    color: 'green',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#666',
  },
  adDateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  adDate: {
    fontSize: 14,
    color: '#666',
    marginLeft: 5,
  },
  adLikesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  adLikes: {
    fontSize: 14,
    color: 'red',
    marginLeft: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    backgroundColor: '#FFF',
  },
  footerButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;

// sayfa navigatörü

import React from 'react';
import { View, StyleSheet } from 'react-native';

const Pagination = ({ index }) => (
  <View style={styles.pagination}>
    <View style={[styles.dot, index === 0 && styles.activeDot]} />
    <View style={[styles.dot, index === 1 && styles.activeDot]} />
    <View style={[styles.dot, index === 2 && styles.activeDot]} />
  </View>
);

const styles = StyleSheet.create({
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
    margin: 5,
  },
  activeDot: {
    backgroundColor: '#888',
  },
});

export default Pagination;
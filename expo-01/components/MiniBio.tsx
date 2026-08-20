import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Profile from './Profile';

export default function MiniBio() {
  return (
    <View style={styles.container}>
      <Profile />
      <Text style={styles.bio}>
        "there is no tomorrow"
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 8,
    marginVertical: 20,
    width: '90%',
    maxWidth: 400,
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginTop: 15,
    lineHeight: 24,
  },
});

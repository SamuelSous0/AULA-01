import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
      
      <Image 
        source={{ uri: 'https://media.licdn.com/dms/image/v2/D5603AQEOCPuI8Ax5yQ/profile-displayphoto-scale_400_400/B56ZzDuCRII0Ag-/0/1772810154066?e=1788998400&v=beta&t=9GrVXGBGiaXs2M0pZVyyOmtLZYQVQGrWd-6GyA7eYSo' }}
        style={styles.image} 
      />
      <Text style={styles.name}>Samuel Alexandre de Sousa Barbosa</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#4facfe',
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
});

import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App';

type ResultScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Result'>;
  route: RouteProp<RootStackParamList, 'Result'>;
};

export default function ResultScreen({ navigation, route }: ResultScreenProps) {
  const { imageUri } = route.params;

  // Mock plant analysis data
  const plantData = {
    name: 'Common Dandelion',
    scientificName: 'Taraxacum officinale',
    edibility: 'Edible',
    confidence: '95%',
    description: 'Dandelion is a common flowering plant and every part of it is edible. The leaves are commonly used in salads, while the roots can be made into tea.',
    uses: [
      'Salad greens',
      'Tea preparation',
      'Traditional medicine',
      'Natural dye'
    ],
    safetyNotes: [
      'Wash thoroughly before consumption',
      'Avoid if harvested from areas treated with pesticides',
      'Some people may be allergic',
      'Consult with experts before consuming'
    ]
  };

  return (
    <ScrollView style={styles.container}>
      <Image 
        source={{ uri: imageUri }}
        style={styles.image}
        resizeMode="cover"
      />
      
      <View style={styles.resultContainer}>
        <View style={styles.header}>
          <Text style={styles.plantName}>{plantData.name}</Text>
          <Text style={styles.scientificName}>{plantData.scientificName}</Text>
          <View style={styles.confidenceTag}>
            <Text style={styles.confidenceText}>Confidence: {plantData.confidence}</Text>
          </View>
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>{plantData.description}</Text>
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.sectionTitle}>Common Uses</Text>
          {plantData.uses.map((use, index) => (
            <Text key={index} style={styles.listItem}>• {use}</Text>
          ))}
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.sectionTitle}>Safety Notes</Text>
          {plantData.safetyNotes.map((note, index) => (
            <Text key={index} style={styles.listItem}>• {note}</Text>
          ))}
        </View>

        <TouchableOpacity
          style={styles.scanAgainButton}
          onPress={() => navigation.navigate('Scan')}
        >
          <Text style={styles.scanAgainText}>Scan Another Plant</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: '100%',
    height: 300,
  },
  resultContainer: {
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  plantName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2D3748',
  },
  scientificName: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#4A5568',
    marginTop: 4,
  },
  confidenceTag: {
    backgroundColor: '#48BB78',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  confidenceText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  infoSection: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D3748',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#4A5568',
    lineHeight: 24,
  },
  listItem: {
    fontSize: 16,
    color: '#4A5568',
    marginBottom: 8,
    lineHeight: 24,
  },
  scanAgainButton: {
    backgroundColor: '#48BB78',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  scanAgainText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';

import styles from './style'

export default function Contact() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.textButton}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Contact")}>
        <Text style={styles.textButton}>Contato</Text>
      </TouchableOpacity>
    </View >
  )
}
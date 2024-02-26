import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import styles from './style'

import { useNavigation } from '@react-navigation/native';

export default function Contact() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.textButton}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Profile")}>
        <Text style={styles.textButton}>Perfil</Text>
      </TouchableOpacity>
    </View >
  )
}
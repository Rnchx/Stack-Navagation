import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';

import styles from './style'

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Profile")}>
        <Text style={styles.textButton}>Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Contact")}>
        <Text style={styles.textButton}>Contato</Text>
      </TouchableOpacity>
    </View >
  )
}
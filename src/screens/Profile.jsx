import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';

export default function Contact() {
  const navigation = useNavigation();

  return (
    <View style={StyleSheet.container}>
      <TouchableOpacity style={StyleSheet.navButton} onPress={() => navigation.navigate("Home")}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={StyleSheet.navButton} onPress={() => navigation.navigate("Contact")}>
        <Text>Contato</Text>
      </TouchableOpacity>
    </View >
  )
}
import React, {useState, useEffect} from 'react';
import {
  View,
  StatusBar,
  Text,
  Box,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import commonStyle from '../commonStyles';

export default function OrderStatus({route, navigation}) {
  const backToPage = () => {
    navigation.goBack();
  };
  return (
    <View style={commonStyle.container}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={commonStyle.header}>
          <Icon
            name="arrow-left"
            style={commonStyle.backButton}
            size={20}
            onPress={backToPage}
          />
          <Text style={commonStyle.heading}>Your Cart</Text>
        </View>
        <Text style={commonStyle.successMessage}>
          Order Placed Successfully
        </Text>
      </SafeAreaView>
    </View>
  );
}

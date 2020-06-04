import React from 'react';
import {View, Text, Button, StatusBar, SafeAreaView} from 'react-native';

import commonStyles from '../commonStyles';
import styles from './style';

export default function Home({navigation}) {
  return (
    <View style={commonStyles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="skyblue" />
      <SafeAreaView>
        <View style={commonStyles.header}>
          <Text style={commonStyles.heading}>Welcome to Home Page</Text>
        </View>
        <View style={commonStyles.content}>
          <View style={styles.buttons}>
            <Button
              title="Hotel"
              onPress={() => navigation.navigate('AdminLogin')}
            />
            <Button
              title="Guest"
              onPress={() => navigation.navigate('Login')}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

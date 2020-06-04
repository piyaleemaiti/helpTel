import React from 'react';
import {
  View,
  Text,
  TextInput,
  StatusBar,
  SafeAreaView,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './style';
import commonStyle from '../commonStyles';

const LoginComponent = props => {
  const {
    onChangeText,
    emailIdError,
    passwordError,
    loginError,
    backToPage,
    emailId,
    password,
    _login,
  } = props;

  return (
    <View style={commonStyle.container}>
      <StatusBar barStyle="dark-content" backgroundColor="skyblue" />
      <SafeAreaView>
        <View style={commonStyle.header}>
          <Icon
            name="arrow-left"
            style={commonStyle.backButton}
            size={20}
            onPress={backToPage}
          />
          <Text style={commonStyle.heading}>Login</Text>
        </View>
        <View style={commonStyle.content}>
          <View style={styles.emailContainer}>
            <Text style={styles.inputTitle}>Email address/Username: </Text>
            <TextInput
              style={styles.textInput}
              onChangeText={text => onChangeText(text, 'emailId')}
              value={emailId}
              placeholder="Email Address/User name"
            />
            {emailIdError && (
              <Text style={styles.errorMsg}>Please enter email address</Text>
            )}
          </View>
          <View style={styles.emailContainer}>
            <Text style={styles.inputTitle}>Password: </Text>
            <TextInput
              style={styles.textInput}
              onChangeText={text => onChangeText(text, 'password')}
              value={password}
              placeholder="Password"
              secureTextEntry={true}
            />
            {passwordError && (
              <Text style={styles.errorMsg}>Please enter password address</Text>
            )}
          </View>
          {loginError && (
            <Text style={styles.errorMsg}>
              Please enter valid email address/password
            </Text>
          )}
          <Button
            title="Login"
            onPress={() => _login()}
            style={{paddingTop: 10}}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default LoginComponent;

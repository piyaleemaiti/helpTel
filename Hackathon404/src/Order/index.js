import React, {useState, useEffect} from 'react';
import {
  View,
  StatusBar,
  Text,
  Button,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AntIcon from 'react-native-vector-icons/AntDesign';
import commonStyle from '../commonStyles';
import styles from './style';

export default function Order({route, navigation}) {
  const [stateData, setStateData] = useState({
    itemArray: [],
    itemCount: 0,
    hideCart: true,
  });
  const backToPage = () => {
    navigation.goBack();
  };
  useEffect(() => {
    const {itemArray, itemCount} = route.params;
    setStateData(state => ({
      ...state,
      itemArray: Array.from(new Set(itemArray)),
      itemCount: itemCount,
      hideCart: itemCount ? true : false,
    }));
  }, [route.params]);
  const handlePress = () => false;
  const incrementCart = () => {
    setStateData(state => ({
      ...state,
      itemCount: stateData && stateData.itemCount + 1,
    }));
  };
  const decrementCart = () => {
    setStateData(state => ({
      ...state,
      itemCount:
        stateData && stateData.itemCount > 0 && stateData.itemCount - 1,
    }));
  };
  const orderStatus = () => {
    navigation.navigate('OrderStatus');
  };
  const deleteAll = () => {
    setStateData(state => ({
      ...state,
      itemCount: 0,
      itemArray: [],
      hideCart: false,
    }));
  };
  const renderItem = item => {
    for (var i in item) {
      return (
        <View style={commonStyle.cartBody}>
          <Text style={styles.cartWidth}>{i}</Text>
          <Text style={{color: 'blue', marginRight: 20, marginTop: 10}}>
            {item[i]}
          </Text>
          <View style={commonStyle.cartBody}>
            <Text style={styles.cartButton} onPress={event => decrementCart()}>
              -
            </Text>
            <Text style={{padding: 5}}>{stateData.itemCount}</Text>
            <Text style={styles.cartButton} onPress={event => incrementCart()}>
              +
            </Text>
          </View>
          <AntIcon
            style={{marginLeft: 10, marginTop: 10}}
            name="delete"
            size={20}
            onPress={deleteAll}
          />
        </View>
      );
    }
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
        {stateData.hideCart ? (
          <View>
            <TouchableOpacity>
              <Text style={styles.textInput} onPress={orderStatus}>
                Proceed to Order
              </Text>
            </TouchableOpacity>
            {stateData.itemArray.map((item, index) => renderItem(item))}
            <TouchableOpacity>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.deleteWidth} onPress={deleteAll}>
                  Delete
                </Text>
                <Text style={styles.deleteWidth}>Save for later</Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <Text style={commonStyle.successMessage}>
            Your Order Cart is empty.
          </Text>
        )}
      </SafeAreaView>
    </View>
  );
}

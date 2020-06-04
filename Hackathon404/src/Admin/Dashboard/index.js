import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './style';
import commonStyle from '../../commonStyles';

export default function Login({route, navigation}) {
  const [stateData, setStateData] = useState({
    hotelId: 0,
    menuList: [
      {
        menuName: 'Guest',
        menuRouteName: 'GuestDetails',
      },
      {
        menuName: 'Services',
        menuRouteName: 'AdminService',
      },
      {
        menuName: 'Services Owner',
        menuRouteName: 'ServicesOwnerList',
      },
      {
        menuName: 'Order',
        menuRouteName: 'AdminOrderList',
      },
    ],
  });
  useEffect(() => {
    const {hotelId} = route.params;
    setStateData(state => ({
      ...state,
      hotelId: hotelId,
    }));
  }, [route.params]);
  const backToPage = () => {
    navigation.goBack();
  };
  const serviceDetails = menuRouteName => {
    navigation.navigate(menuRouteName, {hotelId: stateData.hotelId});
  };
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => serviceDetails(item.menuRouteName)}>
        <View style={styles.servicesListStyle}>
          <Text style={styles.serviceNameStyle}>{item.menuName}</Text>
        </View>
      </TouchableOpacity>
    );
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
          <Text style={commonStyle.heading}>Services List</Text>
        </View>
        <View style={commonStyle.content}>
          <FlatList
            data={stateData.menuList}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            // horizontal={true}
            numColumns="2"
          />
        </View>
      </SafeAreaView>
    </View>
  );
}

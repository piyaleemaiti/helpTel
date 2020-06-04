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
    hotelName: '',
    hotelId: 0,
    listOfServices: [],
  });
  useEffect(() => {
    const {hotelId} = route.params;
    fetch('https://backendproject5.herokuapp.com/fetchHotelDetails')
      .then(result => result.json())
      .then(lists => {
        lists.forEach(list => {
          if (list.hotelId === hotelId) {
            setStateData(state => ({
              ...state,
              hotelName: list.hotemName,
              hotelId: list.hotelId,
              listOfServices: list.listOfServices,
            }));
          }
        });
      })
      .catch(err => console.log(err));
  }, [route.params]);
  const backToPage = () => {
    navigation.goBack();
  };
  const serviceDetails = (serviceId, serviceName) => {
    if (serviceId && serviceName) {
      navigation.navigate('AdminServiceDetails', {
        serviceId: serviceId,
        serviceName: serviceName,
      });
    }
  };
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => serviceDetails(item.serviceId, item.serviceName)}>
        <View style={styles.servicesListStyle}>
          <Text style={styles.serviceNameStyle}>{item.serviceName}</Text>
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
            data={stateData.listOfServices}
            renderItem={renderItem}
            keyExtractor={item => item.serviceId.toString()}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}

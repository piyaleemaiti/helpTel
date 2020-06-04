import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import styles from './style';
import orderStyles from '../Order/style';
import commonStyle from '../commonStyles';
import {getFetch, postFetch} from '../utils/fetchAPI';

export default function ServiceDetails({route, navigation}) {
  const [stateData, setStateData] = useState({
    cartCount: 0,
    serviceDetails: {},
  });
  const [theArray, setTheArray] = useState([]);
  useEffect(() => {
    const {serviceId, serviceName} = route.params;
    getFetch(
      `https://backendproject5.herokuapp.com/fetchServiceDetails?serviceName=${serviceName}`,
    )
      .then(lists => {
        console.log('lists', lists);
        setStateData(state => ({
          ...state,
          serviceDetails: lists,
        }));
      })
      .catch(err => console.log(err));
  }, [route.params]);

  const backToPage = () => {
    navigation.goBack();
  };
  const addToCart = (event, item) => {
    event.preventDefault();
    setTheArray([...theArray, item]);
    setStateData(state => ({
      ...state,
      cartCount: stateData.cartCount + 1,
    }));
  };

  const renderItemList = ({item}) => {
    for (var i in item) {
      return (
        <View style={styles.listItemStyle}>
          <EntypoIcon
            name="dot-single"
            style={commonStyle.backButton}
            size={20}
          />
          <View style={styles.listItemContentStyle}>
            <Text style={{width: 120}}>{i}</Text>
            <Text style={{width: 80, fontWeight: '700'}}>{item[i]}</Text>
            <Text
              style={styles.addCartButton}
              onPress={event => addToCart(event, item)}>
              Add to Cart
            </Text>
          </View>
        </View>
      );
    }
  };
  const renderItem = ({item, index}) => {
    const itemName = Object.keys(item)[0];
    return (
      <View style={styles.servicesListStyle}>
        <Text style={styles.itemNameStyle}>{itemName}</Text>
        <FlatList
          data={item[itemName]}
          renderItem={renderItemList}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  };
  const goToCart = () => {
    navigation.navigate('Order', {
      itemArray: theArray,
      itemCount: stateData.cartCount,
    });
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
          <Text style={commonStyle.heading}>
            {stateData.serviceDetails.serviceName} Services
          </Text>
          <View style={styles.cartIconView}>
            <Icon
              name="shopping-cart"
              style={styles.cartIconStyle}
              size={20}
              onPress={goToCart}
            />
            <Text style={styles.cartCountStyle}>{stateData.cartCount}</Text>
          </View>
        </View>
        <View style={commonStyle.content}>
          <FlatList
            data={stateData.serviceDetails.subMenu}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}

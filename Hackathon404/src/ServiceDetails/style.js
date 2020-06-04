import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  servicesListStyle: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#CDE6FA',
  },
  itemNameStyle: {
    fontSize: 20,
    paddingBottom: 10,
  },
  listItemStyle: {
    flexDirection: 'row',
  },
  listItemNameStyle: {
    fontSize: 15,
  },
  listItemContentStyle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  addCartButton: {
    fontWeight: '600',
    paddingLeft: 20,
    color: '#147ACB',
    marginTop: 5,
    fontSize: 12,
  },
  cartIconView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    textAlign: 'right',
  },
  cartIconStyle: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'flex-end',
    right: 0,
    paddingLeft: 80,
  },
  cartCountStyle: {
    position: 'absolute',
    width: 20,
    height: 20,
    textAlign: 'center',
    right: -20,
    top: -10,
  },
});

export default styles;

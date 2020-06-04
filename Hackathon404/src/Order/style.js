import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: '#f1980f',
    backgroundColor: '#f1980f',
    borderWidth: 1,
    padding: 10,
    margin: 12,
    textAlign: 'center',
    fontWeight: '600',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    padding: 10,
  },
  cartButton: {
    backgroundColor: 'lightgrey',
    padding: 10,
  },
  cartWidth: {
    width: 200,
    marginLeft: 20,
    fontWeight: '700',
    fontSize: 18,
  },
  mrLeft: {
    marginLeft: 200,
  },
  deleteWidth: {
    height: 40,
    borderColor: 'grey',
    backgroundColor: 'grey',
    borderWidth: 1,
    padding: 10,
    marginLeft: 80,
    marginTop: 30,
    textAlign: 'center',
    fontWeight: '600',
    width: 120,
  },
  errorMsg: {
    color: 'red',
  },
});

export default styles;

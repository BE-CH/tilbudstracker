import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  productImage: {
    width: '100%',
    height: 125,
    resizeMode: 'contain',
  },
  container: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
    width: 250,
    marginLeft: 10,
    marginRight: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.2,
  },
  textContainer: {
    marginTop: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  desc: {
    textAlign: 'center',
    fontSize: 12,
    marginTop: 5,
  },
  oldprice: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    color: '#a81a1a',
  },
  price: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#4da81a',
    marginTop: 10,
  },
  saving: {
    color: '#479818',
    textAlign: 'center',
    fontSize: 14,
  },
  storeimage: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 50,
    height: 50,
    resizeMode: 'contain',
    zIndex: 100,
  },
});

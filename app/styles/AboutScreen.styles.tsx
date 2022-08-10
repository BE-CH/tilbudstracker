import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  safeArea: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 10,
  },
  aboutText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    lineHeight: 25,
    padding: 15,
  },
  aboutView: {
    padding: 15,
    marginTop: 20,
  },
  whoText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    borderRadius: 5,
    overflow: 'hidden',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

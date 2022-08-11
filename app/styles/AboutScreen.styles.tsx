import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  safeArea: {
    height: '100%',
    margin: 0,
    padding: 0,
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
    marginBottom: 15,
  },
  scrollviewcontainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    margin: 0,
    padding: 0,
  },
  scrollview: {
    width: '100%',
    margin: 0,
    padding: 0,
  },
  outsideview: {
    marginBottom: 0,
    margin: 0,
  },
});

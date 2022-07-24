import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  safeArea: {
    height: '100%',
  },
  topView: {
    width: '100%',
  },
  topText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
  },
  descText: {
    textAlign: 'center',
    color: 'white',
    marginTop: 10,
    fontSize: 18,
  },
  tilbudsView: {
    marginTop: 10,
    width: '100%',
    flex: 1,
  },
  listOfTilbudContent: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  status: {
    marginTop: 20,
    color: 'white',
    fontSize: 20,
  },
  nextpagecontainer: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  newpage: {
    backgroundColor: '#46901a',
    padding: 10,
    borderRadius: 5,
  },
  newpageButton: {
    color: 'white',
  },
  currentPage: {
    color: 'white',
    fontSize: 16,
  },
});

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  view: {
    marginTop: 10,
    zIndex: 1000,
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    textAlign: 'center',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 5,
  },
  selectField: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: 0,
    marginTop: 10,
  },
  selectFieldDropdown: {
    width: '90%',
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: 10,
    borderWidth: 0,
    borderTopWidth: 1,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: '#000',
    overflow: 'visible',
    shadowOpacity: 0.2,
  },
});

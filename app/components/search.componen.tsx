import React, {useState} from 'react';

import {TextInput, View} from 'react-native';
import SearchCompStyles from '../styles/SearchComp.styles';
import DropDownPicker from 'react-native-dropdown-picker';

const SearchComp = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('all');
  const [items, setItems] = useState([
    {label: 'Alle', value: 'all'},
    {label: 'Rema 1000', value: 'rema1000'},
    {label: 'COOP', value: 'coop'},
  ]);

  return (
    <View style={SearchCompStyles.view}>
      <TextInput
        style={SearchCompStyles.input}
        placeholder="Søg efter vare"
        onChangeText={newText => console.log(newText)}
      />
      <DropDownPicker
        style={SearchCompStyles.selectField}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        theme="LIGHT"
        setItems={setItems}
        onChangeValue={newValue => console.log(newValue)}
        dropDownContainerStyle={SearchCompStyles.selectFieldDropdown}
      />
    </View>
  );
};

export default SearchComp;

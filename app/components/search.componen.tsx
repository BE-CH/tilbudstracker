import React, {useState} from 'react';

import {TextInput, View} from 'react-native';
import SearchCompStyles from '../styles/SearchComp.styles';
import DropDownPicker from 'react-native-dropdown-picker';

const SearchComp = ({
  searchState,
  setSearchState,
  storeState,
  setStoreState,
}: {
  searchState: string;
  setSearchState: React.Dispatch<React.SetStateAction<string>>;
  storeState: string;
  setStoreState: React.Dispatch<
    React.SetStateAction<'all' | 'rema1000' | 'coop' | 'foetex'>
  >;
}) => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    {label: 'Alle', value: 'all'},
    {label: 'Rema 1000', value: 'rema1000'},
    {label: 'COOP', value: 'coop'},
    {label: 'Føtex', value: 'foetex'},
  ]);

  return (
    <View style={SearchCompStyles.view}>
      <TextInput
        style={SearchCompStyles.input}
        placeholder="Søg efter vare"
        onChangeText={newText => setSearchState(newText)}
        value={searchState}
      />
      <DropDownPicker
        style={SearchCompStyles.selectField}
        open={open}
        value={storeState}
        items={items}
        setOpen={setOpen}
        setValue={setStoreState}
        theme="LIGHT"
        setItems={setItems}
        dropDownContainerStyle={SearchCompStyles.selectFieldDropdown}
      />
    </View>
  );
};

export default SearchComp;

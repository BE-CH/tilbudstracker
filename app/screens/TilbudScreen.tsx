import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import SearchComp from '../components/search.componen';
import TilbudScreenStyles from '../styles/TilbudScreen.styles';

const TilbudScreen = () => {
  return (
    <SafeAreaView>
      <View style={TilbudScreenStyles.topView}>
        <Text style={TilbudScreenStyles.topText}>TILBUDSTRACKER</Text>
        <Text style={TilbudScreenStyles.descText}>
          Find de bedste/ugens tilbud fra forskellige dagligvarebutikker.
        </Text>
      </View>
      <SearchComp />
    </SafeAreaView>
  );
};

export default TilbudScreen;

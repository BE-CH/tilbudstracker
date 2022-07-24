import React, {useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ItemComp from '../components/Item.component';
import SearchComp from '../components/search.componen';
import TilbudScreenStyles from '../styles/TilbudScreen.styles';
import axios from 'axios';

type ItemFull = {
  pricing: {
    price: number;
    max_quantity: number;
    price_over_max: number;
    is_on_discount: boolean;
    normal_price: number;
    price_per_kilogram: number;
    price_per_unit: string;
    price_changes_on?: null;
    price_changes_type?: null;
    is_advertised: boolean;
    procentage_change: number;
  };
  _id: string;
  itemID: number;
  createdAt: string;
  name: string;
  store: string;
  underline: string;
  description: string;
  department_id: number;
  department_name: string;
  category_id: number;
  category_name: string;
  popularity: number;
  imageurl: string;
  url: string;
  justAvisvare: boolean;
};

const TilbudScreen = () => {
  const scrollViewRef = useRef<ScrollView | null>(null);

  const [items, setItems] = useState<ItemFull[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [statusText, setStatusText] = useState('Indlæser...');
  const itemsPerPage = 10;
  useEffect(() => {
    async function getOffers() {
      try {
        const offers = await axios.get(
          'https://api.tilbudstracker.dk/getoffers',
        );
        const startAmount = Math.round(currentPage * itemsPerPage);
        const endAmount = Math.round(currentPage * itemsPerPage + itemsPerPage);

        const theOffers: ItemFull[] = offers.data.items;

        theOffers.sort((a, b) => {
          return b.pricing.procentage_change - a.pricing.procentage_change;
        });
        setItems(theOffers.slice(startAmount, endAmount));
        setStatusText('');
      } catch (err) {
        setStatusText('Der skete en fejl!');
        console.log(err);
      }
    }

    getOffers();
  }, [currentPage]);

  async function changePage(direction: 'previous' | 'next') {
    if (direction === 'next') {
      await setCurrentPage(currentPage + 1);
      await scrollViewRef.current?.scrollTo({x: 0, y: 0, animated: true});
    }

    if (direction === 'previous' && currentPage > 0) {
      await setCurrentPage(currentPage - 1);
      await scrollViewRef.current?.scrollTo({x: 0, y: 0, animated: true});
    }
  }

  return (
    <SafeAreaView style={TilbudScreenStyles.safeArea}>
      <View style={TilbudScreenStyles.topView}>
        <Text style={TilbudScreenStyles.topText}>TILBUDSTRACKER</Text>
      </View>
      <SearchComp />
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={TilbudScreenStyles.listOfTilbudContent}
        style={TilbudScreenStyles.tilbudsView}>
        {items.length > 0 ? (
          items.map((v, i) => {
            return (
              <ItemComp
                url={v.url}
                image={v.imageurl}
                title={v.name}
                description={v.underline}
                oldprice={v.pricing.normal_price}
                price={v.pricing.price}
                saving={v.pricing.procentage_change}
                key={i}
              />
            );
          })
        ) : (
          <Text style={TilbudScreenStyles.status}>{statusText}</Text>
        )}
        <View style={TilbudScreenStyles.nextpagecontainer}>
          <TouchableOpacity
            style={TilbudScreenStyles.newpage}
            onPress={() => changePage('previous')}>
            <Text style={TilbudScreenStyles.newpageButton}>Forrige side</Text>
          </TouchableOpacity>
          <Text style={TilbudScreenStyles.currentPage}>
            Side: {currentPage}
          </Text>
          <TouchableOpacity
            style={TilbudScreenStyles.newpage}
            onPress={() => changePage('next')}>
            <Text style={TilbudScreenStyles.newpageButton}>Næste side</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TilbudScreen;

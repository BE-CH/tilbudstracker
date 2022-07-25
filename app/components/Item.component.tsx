import React from 'react';
import {Image, Linking, Text, TouchableHighlight, View} from 'react-native';
import styles from '../styles/ItemComp.styles';

type ItemDisplay = {
  url: string;
  image: string;
  title: string;
  description: string;
  oldprice: number;
  price: number;
  saving: string | number;
  store: string;
};

const ItemComp = ({
  url,
  image,
  title,
  description,
  oldprice,
  price,
  saving,
  store,
}: ItemDisplay) => {
  async function openLink(link: string) {
    const supported = await Linking.canOpenURL(link);
    if (supported) {
      await Linking.openURL(link);
    }
  }

  const images = {
    foetex: require('../images/foetex_logo.png'),
    coop: require('../images/coop_logo.png'),
    rema1000: require('../images/rema1000_logo.png'),
  };

  return (
    <View style={styles.container}>
      <Image
        source={images[store.toLowerCase() as keyof typeof images]}
        style={styles.storeimage}
      />
      <TouchableHighlight onPress={() => openLink(url)} underlayColor={'white'}>
        <View>
          <Image
            source={{
              uri: image,
            }}
            style={styles.productImage}
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.desc}>{description}</Text>
            {saving === 100 ? null : (
              <Text style={styles.oldprice}>{oldprice.toFixed(0)} DKK</Text>
            )}
            <Text style={styles.price}>{price.toFixed(0)} DKK</Text>
            <Text style={styles.saving}>
              ({saving === 100 ? 'Avisvare' : `${saving}%`})
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default ItemComp;

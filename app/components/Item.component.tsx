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
};

const ItemComp = ({
  url,
  image,
  title,
  description,
  oldprice,
  price,
  saving,
}: ItemDisplay) => {
  async function openLink(link: string) {
    const supported = await Linking.canOpenURL(link);
    if (supported) {
      await Linking.openURL(link);
    }
  }

  return (
    <View style={styles.container}>
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
              ({saving === 100 ? 'Avisvare' : saving})
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default ItemComp;

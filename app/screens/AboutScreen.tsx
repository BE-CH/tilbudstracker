import React from 'react';
import {
  Image,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from '../styles/AboutScreen.styles';

const AboutScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.outsideview}>
        <ScrollView
          contentContainerStyle={styles.scrollviewcontainer}
          style={styles.scrollview}>
          <View>
            <Text style={styles.header}>OM TILBUDSTRACKER</Text>
            <Text style={styles.aboutText}>
              Tilbudstracker hjælper dig med finde de bedste tilbud i
              dagligvarebutikker som Rema 1000, Føtex og COOP.
            </Text>
            <Text style={styles.aboutText}>
              Idéen bag er at det kan være uoverskueligt at finde tilbud igennem
              tilbudsaviser og derudover kan det være svært at vurdere om et
              tilbud rent faktisk er et godt tilbud.
            </Text>
            <Text style={styles.aboutText}>
              Ovenstående problemer prøver tilbudstracker at løse ved at levere
              en overskuelig, søgbar og nem måde at se ugens tilbud på!
            </Text>
            <Text style={styles.aboutText}>
              Alle tilbud opdateres hver 5. time.
            </Text>
            <View style={styles.aboutView}>
              <Text style={styles.whoText}>
                <Text>Appen samt </Text>
                <Text
                  onPress={() => Linking.openURL('https://tilbudstracker.dk')}>
                  tilbudstracker.dk
                </Text>{' '}
                er udviklet i sjov af{' '}
                <Text
                  onPress={() => Linking.openURL('https://bechsolutions.dk')}>
                  Mikkel @ Bech Solutions
                </Text>
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => Linking.openURL('https://bechsolutions.dk')}>
              <Image
                source={require('../images/bechsolutions.jpg')}
                style={styles.logo}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AboutScreen;

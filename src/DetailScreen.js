import React from 'react';
import {Button, Dimensions, Image, Text, View} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {SharedElement} from 'react-navigation-shared-element';
const {width, height} = Dimensions.get('window');

const DetailScreen = ({navigation, route}) => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: insets.top,
        backgroundColor: '#333',
      }}>
      <SharedElement
        style={{
          flex: 0.5,
          alignSelf: 'center',
        }}
        id={1}>
        <Image
          style={{
            borderRadius: 10,
            width: width,
            height: (width / 16) * 9,
          }}
          source={require('./assets/tower.jpg')}
          resizeMode="cover"
        />
      </SharedElement>
      <View
        style={{
          marginBottom: 100,
        }}>
        <Text
          style={{
            fontSize: 16,
            color: '#fff',
          }}>
          This Is Detail Screen Try To Go Back Now With presentation:
          'transparentModal', and without it
        </Text>
      </View>
      <Button onPress={() => navigation.goBack()} title="Main Screen" />
    </SafeAreaView>
  );
};

export default DetailScreen;

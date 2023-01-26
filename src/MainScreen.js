import React from 'react';
import {Button, Dimensions, Image, Text, View} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {SharedElement} from 'react-navigation-shared-element';
const MainScreen = ({navigation}) => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: insets.top,
        backgroundColor: '#333',
      }}>
      <View>
        <Text
          style={{
            color: '#fff',
            fontSize: 18,
          }}>
          This is Main Screen
        </Text>
      </View>
      <SharedElement
        style={{
          marginTop: 200,
          flex: 0.5,
          alignSelf: 'center',
        }}
        id={1}>
        <Image
          style={{
            borderRadius: 10,
            width: 300,
            height: 200,
          }}
          source={require('./assets/tower.jpg')}
          resizeMode="cover"
        />
      </SharedElement>
      <Button
        onPress={() => navigation.navigate('DetailScreen', {id: 1})}
        title="Detail"
      />
    </SafeAreaView>
  );
};

export default MainScreen;

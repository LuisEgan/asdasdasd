import React from 'react';
import { Header } from 'react-native-elements';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../constants/colors';

const MainHeader = (props) => {
  return (
    <LinearGradient
      start={{ x: 0.4, y: 0.3 }}
      end={{ x: 1, y: 1 }}
      locations={[0.2, 0.8]}
      colors={['#175d8a', '#3ed7f1']}>
      <View>
        <Header containerStyle={{ backgroundColor: 'white' }}>
          <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
            <Image
              source={require('../../assets/drawer.png')}
              style={{ width: 50, height: 50, tintColor: '#1F73BD' }}
            />
          </TouchableOpacity>
        </Header>
      </View>
    </LinearGradient>
  );
};

export default MainHeader;

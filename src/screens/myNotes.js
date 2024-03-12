import {View, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS} from '../theme/color';
import {screenHeight, screenWidth} from '../utils/constants';
import Plus from '../components/Plus';
import {mockData} from '../utils/mockData';
import Card from '../components/Card';
import {SCREEN} from '../utils/route';

const MyNotes = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header />
      </View>
      <FlatList
        data={mockData}
        renderItem={({item}) => <Card data={item} url={navigation}></Card>}
        keyExtractor={item => item.id}></FlatList>
      <Plus onPress={() => navigation.navigate(SCREEN.ADDNOTE)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth,
    height: screenHeight,
    backgroundColor: COLORS.GRAY,
  },
});

export default MyNotes;

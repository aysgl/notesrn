import {View, StyleSheet, FlatList} from 'react-native';
import React, {useContext} from 'react';
import Header from '../components/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS} from '../theme/color';
import {screenHeight, screenWidth} from '../utils/constants';
import Plus from '../components/Plus';
import Card from '../components/Card';
import {SCREEN} from '../utils/route';
import MyContext from '../context';

const MyNotes = ({navigation}) => {
  const {notes} = useContext(MyContext);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header />
      </View>
      <FlatList
        data={notes}
        renderItem={({item}) => <Card data={item} url={navigation}></Card>}
        keyExtractor={item => item.id}></FlatList>
      <Plus
        onPress={() => navigation.navigate(SCREEN.ADDNOTE, {type: 'add'})}
      />
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

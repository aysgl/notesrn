import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../theme/color';
import {HambergerMenu, More, SearchNormal1} from 'iconsax-react-native';
import {SCREEN} from '../utils/route';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{SCREEN.MYNOTES}</Text>
      <View style={styles.row}>
        <TouchableOpacity>
          <HambergerMenu size="32" color={COLORS.BLACK} />
        </TouchableOpacity>
        <View style={styles.col}>
          <TouchableOpacity>
            <SearchNormal1
              size={24}
              color={COLORS.BLACK}
              style={{marginRight: 10}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <More size={24} color={COLORS.BLACK} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 20,
    height: 180,
  },
  title: {
    fontSize: 40,
    fontWeight: '200',
    marginVertical: 46,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  col: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Header;

import {Alert, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {screenWidth} from '../utils/constants';
import {COLORS} from '../theme/color';

export default function Plus({onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text
        style={{
          lineHeight: 66,
          fontSize: 60,
          fontWeight: '100',
          color: 'white',
        }}>
        +
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: screenWidth * 0.2,
    height: screenWidth * 0.2,
    backgroundColor: COLORS.PRIMARY,
  },
});

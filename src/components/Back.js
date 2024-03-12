import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ArrowLeft} from 'iconsax-react-native';
import {COLORS} from '../theme/color';
import {useNavigation} from '@react-navigation/native';

export default function Back() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <ArrowLeft size="32" color={COLORS.PRIMARY} style={{marginLeft: 2}} />
    </TouchableOpacity>
  );
}

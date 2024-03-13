import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  TextBold,
  Text,
  TextUnderline,
  TextalignLeft,
  TextalignCenter,
  TextalignRight,
} from 'iconsax-react-native';
import {COLORS} from '../theme/color';

export default function Editor({changePress}) {
  const buttons = [
    {id: 1, name: 'bold', icon: <TextBold size="26" color={COLORS.BLACK} />},
    {id: 2, name: 'text', icon: <Text size="26" color={COLORS.BLACK} />},
    {
      id: 3,
      name: 'underline',
      icon: <TextUnderline size="26" color={COLORS.BLACK} />,
    },
    {
      id: 4,
      name: 'left',
      icon: <TextalignLeft size="26" color={COLORS.BLACK} />,
    },
    {
      id: 5,
      name: 'center',
      icon: <TextalignCenter size="26" color={COLORS.BLACK} />,
    },
    {
      id: 6,
      name: 'right',
      icon: <TextalignRight size="26" color={COLORS.BLACK} />,
    },
  ];
  return (
    <View style={styles.container}>
      {buttons.map(item => (
        <TouchableOpacity
          onPress={() => {
            changePress(item.name);
          }}
          key={item.id}>
          {item.icon}
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
});

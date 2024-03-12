import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../theme/color';
import {Trash} from 'iconsax-react-native';

export default function Detail({route}) {
  const {data} = route.params;
  const {title, description, date} = data;

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.row}>
        <Text style={styles.date}>{date}</Text>
        <Trash size="20" color={COLORS.PRIMARY} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.WHITE,
    marginBottom: 0,
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: '200',
    color: COLORS.PRIMARY,
  },
  description: {
    fontSize: 15,
    marginBottom: 10,
  },
  date: {
    marginBottom: 0,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

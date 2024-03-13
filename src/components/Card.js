import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {COLORS} from '../theme/color';
import {Edit, Trash} from 'iconsax-react-native';
import {SCREEN} from '../utils/route';
import MyContext from '../context';

export default function Card({data, url}) {
  const {deleteNote} = useContext(MyContext);
  return (
    <TouchableOpacity onPress={() => url.navigate(SCREEN.DETAIL, {data: data})}>
      <View style={styles.card}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.description}>{data.description.slice(0, 120)}</Text>
        <View style={styles.row}>
          <Text style={styles.date}>{data.date}</Text>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() =>
                url.navigate(SCREEN.ADDNOTE, {note: data, type: 'update'})
              }>
              <Edit
                size="20"
                color={COLORS.PRIMARY}
                style={{marginRight: 10}}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteNote(data.id)}>
              <Trash size="20" color={COLORS.PRIMARY} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
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

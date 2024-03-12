import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../theme/color';

export default function AddNote() {
  const [titleFocused, setTitleFocused] = useState(false);
  const [descriptionFocused, setDescriptionFocused] = useState(false);

  const handleTitleFocus = () => {
    setTitleFocused(true);
    setDescriptionFocused(false);
  };

  const handleDescriptionFocus = () => {
    setDescriptionFocused(true);
    setTitleFocused(false);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={[styles.input, titleFocused ? styles.inputFocused : null]}
        onFocus={handleTitleFocus}
      />
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={[
          styles.texarea,
          descriptionFocused ? styles.inputFocused : null,
        ]}
        editable
        multiline
        onFocus={handleDescriptionFocus}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>SEND</Text>
      </TouchableOpacity>
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
  label: {
    fontSize: 15,
    color: `rgba(0, 0, 0,.4)`,
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
  input: {
    height: 50,
    width: '100%',
    borderColor: COLORS.GRAY,
    borderWidth: 1,
    borderRadius: 2,
    padding: 10,
    marginBottom: 20,
  },
  inputFocused: {
    borderColor: `rgba(255,138,101, 0.3)`,
  },
  texarea: {
    height: 200,
    width: '100%',
    borderColor: COLORS.GRAY,
    borderWidth: 1,
    borderRadius: 2,
    padding: 10,
  },
  button: {
    backgroundColor: COLORS.PRIMARY,
    width: '100%',
    height: 50,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontWeight: '500',
    color: COLORS.WHITE,
    letterSpacing: 4,
  },
});

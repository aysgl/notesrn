import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {COLORS} from '../theme/color';
import Editor from '../components/Editor';
import uuid from 'react-native-uuid';
import MyContext from '../context';
import {useNavigation} from '@react-navigation/native';

export default function AddNote({route}) {
  const {note} = route?.params;
  const {type} = route?.params;

  const {addNote, updateNote} = useContext(MyContext);

  const [titleFocused, setTitleFocused] = useState(false);
  const [descriptionFocused, setDescriptionFocused] = useState(false);

  const [title, setTitle] = useState(note?.title);
  const [description, setDescription] = useState(note?.description);
  const [selected, setSelected] = useState(styles.normal);

  const navigation = useNavigation();

  const handleTitleFocus = () => {
    setTitleFocused(true);
    setDescriptionFocused(false);
  };

  const handleDescriptionFocus = () => {
    setDescriptionFocused(true);
    setTitleFocused(false);
  };

  const saveNote = () => {
    const newNote = {
      id: uuid.v4(),
      title: title,
      description: description,
      date: '12:25 pm',
    };
    addNote(newNote);
    navigation.goBack();
  };

  const onChangeNote = () => {
    const newNote = {
      id: note.id,
      title: title,
      description: description,
      date: '12:25 pm',
    };
    updateNote(note.id, newNote);
    navigation.goBack();
  };

  const changePress = style => {
    switch (style) {
      case 'bold':
        setSelected('bold');
        break;

      case 'text':
        setSelected('text');
        break;

      case 'underline':
        setSelected('underline');
        break;

      case 'left':
        setSelected('left');
        break;

      case 'center':
        setSelected('center');
        break;

      case 'right':
        setSelected('right');
        break;

      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Editor changePress={changePress} />

      <View style={styles.card}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={[styles.input, titleFocused ? styles.inputFocused : null]}
          onFocus={handleTitleFocus}
          value={title}
          onChangeText={value => setTitle(value)}
        />
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[
            styles.texarea,
            descriptionFocused ? styles.inputFocused : null,
            styles[selected],
          ]}
          value={description}
          editable
          multiline
          onFocus={handleDescriptionFocus}
          onChangeText={value => setDescription(value)}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={type === 'update' ? onChangeNote : saveNote}>
          <Text style={styles.buttonText}>
            {type === 'update' ? 'UPDATE' : 'SEND'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  card: {
    backgroundColor: COLORS.WHITE,
    marginBottom: 0,
    borderRadius: 10,
    padding: 20,
    // marginHorizontal: 20,
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
  bold: {
    fontWeight: 'bold',
  },
  light: {
    fontWeight: '300',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  left: {
    textAlign: 'left',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
  normal: {},
});

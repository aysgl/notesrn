import {useState} from 'react';
import MyContext from '.';

const Provider = ({children}) => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'Design Engineer',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      date: '12:25 pm',
    },
    {
      id: 2,
      title: 'Software Engineer',
      description: 'Bu ikinci notun açıklamasıdır',
      date: '12:25 pm',
    },
    {
      id: 3,
      title: 'Content Writer',
      description: 'Bu üçüncü notun açıklamasıdır',
      date: '12:25 pm',
    },
    {
      id: 4,
      title: 'Data Engineer',
      description: 'Bu dördüncü notun açıklamasıdır',
      date: '12:25 pm',
    },
  ]);

  const addNote = item => {
    setNotes([...notes, item]);
  };

  const deleteNote = id => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const updateNote = (id, item) => {
    setNotes(
      notes.map(note =>
        note.id === id
          ? {...note, title: item.title, description: item.description}
          : note,
      ),
    );
  };
  return (
    <MyContext.Provider value={{notes, addNote, updateNote, deleteNote}}>
      {children}
    </MyContext.Provider>
  );
};

export default Provider;

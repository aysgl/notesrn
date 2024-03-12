import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddNote from '../screens/addNote';
import Detail from '../screens/detail';
import MyNotes from '../screens/myNotes';
import {SCREEN} from '../utils/route';
import {COLORS} from '../theme/color';
import Back from '../components/Back';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName={SCREEN.MYNOTES}>
      <Stack.Screen
        name={SCREEN.MYNOTES}
        component={MyNotes}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={SCREEN.ADDNOTE}
        component={AddNote}
        options={{
          headerStyle: {backgroundColor: COLORS.GRAY},
          headerShadowVisible: false,
          headerLeft: props => <Back />,
        }}
        sty
      />
      <Stack.Screen
        name={SCREEN.DETAIL}
        component={Detail}
        options={{
          headerStyle: {backgroundColor: COLORS.GRAY},
          headerShadowVisible: false,
          headerLeft: props => <Back />,
        }}
      />
    </Stack.Navigator>
  );
}

export default RootNavigator;

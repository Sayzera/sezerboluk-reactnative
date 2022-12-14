import { Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Router from './src/navigation/navigation';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <Router />
      </PaperProvider>
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

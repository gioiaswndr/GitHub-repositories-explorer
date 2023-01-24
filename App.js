import { Provider } from 'react-redux'
import { store } from './src/store/masterStore.js'
import HomeScreen from './src/screens/HomeScreen.js';


export default function App() {

  return (
    <>
      <Provider store={store}>
        <HomeScreen />
      </Provider>
    </>
  );
}
import { Suspense, useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { store } from './redux';
import Routing from './routes';
import Loader from './components/loader/loader';
import './App.css'
import { clearLocalStorage, getDataFromLocalStorage } from './utils/localStorage';
import { decodeToken, isTokenActivated } from './utils/functions';
import { setLogOutUser, setLoggedUser } from './redux/actions';

const App = () => {

  const token = getDataFromLocalStorage('token')
  const dispatch = useDispatch()

  useEffect(() => {
    const isTokenActive = isTokenActivated(token)
    const decodedToken = decodeToken(token)
    if (!isTokenActive) {
      clearLocalStorage()
      dispatch(setLogOutUser({}))
    } else {
      dispatch(setLoggedUser({ token, user: decodedToken, isLogged: isTokenActive }))
    }
  }, [dispatch, token])

  return (
    <Suspense fallback={<Loader/>} >
      <Provider store={store} >
          <Routing />
      </Provider>
    </Suspense>
  );
}

export default App;

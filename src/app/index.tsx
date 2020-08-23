import React, {FC, useEffect} from 'react';
import Routers from './router/Routers';
import store from './redux/store';
import {loadLoginUser} from './redux/Slices/AccountsSlice';
import {useHistory} from 'react-router-dom';

const App: FC = () => {
  const history = useHistory();
  useEffect(() => {
    (async () => {
      const user = await store.dispatch(loadLoginUser());
      if (!user) {
        history.replace('/sign-in');
      }
    })();
  }, [history]);
  return <Routers />;
};

export default App;

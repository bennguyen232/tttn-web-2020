import React, {FC, useEffect} from 'react';
import Routers from './router/Routers';
import store from './redux/store';
import {loadLoginUser} from './redux/Slices/AccountsSlice';
import {useHistory} from 'react-router-dom';
import {getAllData, setProjectActive} from './redux/Slices/GlobalsSlice';

const App: FC = () => {
  const history = useHistory();
  useEffect(() => {
    (async () => {
      const user = await store.dispatch(loadLoginUser());
      if (!user) {
        history.replace('/sign-in');
        return;
      }
      await store.dispatch(getAllData());
      store.dispatch(setProjectActive('first'));
    })();
  }, [history]);
  return <Routers />;
};

export default App;

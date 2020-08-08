import React, {FC, useEffect} from 'react';
import Routers from './router/Routers';

const App: FC = () => {
  useEffect(() => {
    // move router after check user login
  }, []);
  return <Routers />;
};

export default App;

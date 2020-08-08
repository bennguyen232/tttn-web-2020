import React, {FC} from 'react';
import ContentHome from './ContentHome';
import SignInScreen from '../views/SignInScreen';
import {Route, Switch} from 'react-router-dom';

export const routers = {
  home: {
    path: '',
    component: ContentHome,
    name: 'All Issues',
  },
  signIn: {
    path: '/sign-in',
    component: SignInScreen,
    name: 'Open Issues',
  },
};

const Routers: FC = () => {
  const _renderViewChildren = () => {
    const values = Object.values(routers);
    return values.map((item, index) => {
      const {path, component: Component} = item;
      return <Route exact path={path} key={index} component={Component} />;
    });
  };

  return <Switch>{_renderViewChildren()}</Switch>;
};

export default Routers;

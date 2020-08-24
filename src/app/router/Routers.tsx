import React, {FC, ComponentType} from 'react';
import {Route, Switch} from 'react-router-dom';
import withMenu from '../hocs/withMenu';
import SignInScreen from '../views/SignInScreen';
import Error404 from '../views/Error404';
import AllIssuesScreen from '../views/AllIssuesScreen';
import OpenIssuesScreen from '../views/OpenIssuesScreen';
import MyIssuesScreen from '../views/MyIssuesScreen';
import SettingsScreen from '../views/SettingsScreen';
import SetupScreen from '../views/SetupScreen';
import HomeScreen from 'app/views/HomeScreen';

interface RouterConfig {
  [name: string]: {
    path?: string;
    component?: ComponentType<any>;
    name: string;
    children?: RouterConfig;
  };
}

export const routersContentHome: RouterConfig = {
  allIssues: {
    path: '/issues',
    component: AllIssuesScreen,
    name: 'All Issues',
  },
  openIssues: {
    path: '/open-issues',
    component: OpenIssuesScreen,
    name: 'Open Issues',
  },
  myIssues: {
    path: '/my-issues',
    component: MyIssuesScreen,
    name: 'My Issues',
  },
  settings: {
    path: '/settings',
    component: SettingsScreen,
    name: 'Settings',
  },
};

export const routers: RouterConfig = {
  home: {
    path: '/',
    component: HomeScreen,
    name: 'Home',
  },
  pageContent: {
    children: routersContentHome,
    name: 'Page Content',
  },
  signIn: {
    path: '/sign-in',
    component: SignInScreen,
    name: 'Sign In',
  },
  setup: {
    path: '/setup',
    component: SetupScreen,
    name: 'Setup',
  },
};

const GetFullParams = (settings: RouterConfig) => {
  return Object.values(settings).map((item) => item.path || '');
};

const RenderRoute = (settings: RouterConfig) => {
  const values = Object.values(settings);
  return values.map((item, index) => {
    if (!item.children) {
      const {path, component: Component} = item;
      return <Route exact path={path} key={index} component={Component} />;
    } else {
      const {children} = item;
      const params = GetFullParams(children);
      return (
        <Route
          exact
          path={params}
          key={index}
          component={withMenu(() => (
            <Switch>{RenderRoute(children)}</Switch>
          ))}
        />
      );
    }
  });
};

const Routers: FC = () => {
  return (
    <Switch>
      {RenderRoute(routers)}
      <Route exact path="*" component={Error404} />
    </Switch>
  );
};

export default Routers;

import React from 'react';
import {Route, Switch} from 'react-router-dom';
import InformationScreen from '../views/InformationScreen';
import OpenIssuesScreen from '../views/OpenIssuesScreen';
import AllIssuesScreen from '../views/AllIssuesScreen';
import MyIssuesScreen from '../views/MyIssuesScreen';
import withMenu from '../hocs/withMenu';

export const routersContentHome = {
  infoProject: {
    path: '/',
    component: InformationScreen,
    name: 'Information',
  },
  allIssues: {
    path: '/all-issues',
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
};

const ContentHome = () => {
  const _renderViewChildren = () => {
    const values = Object.values(routersContentHome);
    return values.map((item, index) => {
      const {path, component: Component} = item;
      return (
        <Route exact path={path} key={index}>
          <Component />
        </Route>
      );
    });
  };

  return <Switch>{_renderViewChildren()}</Switch>;
};

export default withMenu(ContentHome);

import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import BookList from './components/BookList';

const RouterComponent = () => (
  <Router sceneStyle={{ paddingTop: 64 }}>
    <Scene
      initial
      key='bookList' 
      component={BookList} 
      title='Prolific Library' 
    />
  </Router>
);

export default RouterComponent;

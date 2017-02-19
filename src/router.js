import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import BookList from './components/BookList';
import BookReview from './components/BookReview';

const RouterComponent = () => (
  <Router sceneStyle={{ paddingTop: 64 }}>
    <Scene
      initial
      key='bookList' 
      component={BookList} 
      title='Prolific Library' 
    />
    <Scene
      key='bookReview'
      component={BookReview}
      title='Preview'
    />
  </Router>
);

export default RouterComponent;
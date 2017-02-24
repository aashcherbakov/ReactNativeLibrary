import React from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import BookList from './components/BookList/BookList';
import BookReview from './components/BookInfo/BookInfo';
import BookEdit from './components/BookEdit/BookEdit';

const RouterComponent = () => (
  <Router sceneStyle={{ paddingTop: 64 }}>
    <Scene
      initial
      key='bookList' 
      component={BookList} 
      title='Prolific Library' 
    />
    <Scene
      key='bookInfo'
      component={BookReview}
      title='Preview'
      rightTitle='Edit'
      onRight={() => Actions.editBook()}
    />
    <Scene
      key='editBook'
      component={BookEdit}
      title='Editing'
    />
  </Router>
);

export default RouterComponent;

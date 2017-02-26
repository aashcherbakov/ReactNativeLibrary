import React from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import BookList from './components/BookList/BookList';
import BookInfo from './components/BookInfo/BookInfo';
import BookEdit from './components/BookEdit/BookEdit';
import BookCreate from './components/BookCreate/BookCreate';

const RouterComponent = () => (
  <Router sceneStyle={{ paddingTop: 64 }}>
    <Scene
      initial
      key='bookList' 
      component={BookList} 
      title='Prolific Library'
      rightTitle='Add'
      onRight={() => Actions.createBook()}
    />
    <Scene
      key='bookInfo'
      component={BookInfo}
      title='Preview'
      rightTitle='Edit'
      onRight={() => Actions.editBook()}
    />
    <Scene
      key='editBook'
      component={BookEdit}
      title='Editing'
    />
    <Scene
     key='createBook'
     component={BookCreate}
     title='New Book'
    />
  </Router>
);

export default RouterComponent;

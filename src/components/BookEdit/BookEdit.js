import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Button } from '../shared';
import { modifyBookProperty } from '../../actions';
import BookEditForm from './BookEditForm';

class BookEdit extends Component {

  componentWillMount() {
    const book = this.props.openedBook;
    Object.keys(book).forEach(key => {
      this.props.modifyBookProperty({ prop: key, value: book[key] });
    }); 
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <BookEditForm />
        <View style={{ flex: 1 }}>
          <Button>Save</Button>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { openedBook } = state.booksList;
  return { openedBook };
};

export default connect(mapStateToProps, { modifyBookProperty })(BookEdit);

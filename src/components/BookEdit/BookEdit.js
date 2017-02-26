import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Button, Alert } from '../shared';
import { modifyBookProperty, updateBook } from '../../actions';
import BookEditForm from './BookEditForm';

class BookEdit extends Component {
  state = { showModal: false }

  componentWillMount() {
    const book = this.props.openedBook;
    Object.keys(book).forEach(key => {
      this.props.modifyBookProperty({ prop: key, value: book[key] });
    }); 
  }

  onAccept() {
    this.setState({ showModal: false });
    this.onSavePressed();
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  onSavePressed() {
    const { title, author, publisher, categories } = this.props;
    this.props.updateBook(this.props.openedBook, { 
      publisher, title, author, categories
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <BookEditForm />
        <View style={{ flex: 1 }}>
          <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
            Save
          </Button>
        </View>
        <Alert 
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to make this changes?
        </Alert>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { openedBook } = state.booksList;
  const { title, author, publisher, categories } = state.bookEdit;
  return { openedBook, title, author, publisher, categories };
};

export default connect(mapStateToProps, { modifyBookProperty, updateBook })(BookEdit);

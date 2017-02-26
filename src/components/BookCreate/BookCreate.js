import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Button } from '../shared';
import { createBook } from '../../actions';
import BookEditForm from '../BookEdit/BookEditForm';

class BookCreate extends Component {
  createBook() {
    const { title, author, publisher, categories } = this.props;
    this.props.createBook({ title, author, publisher, categories });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <BookEditForm style={{ flex: 1 }} />
        <View style={{ flex: 1 }}>
          <Button onPress={this.createBook.bind(this)}>
            Create
          </Button>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { title, author, categories, publisher } = state.bookEdit;
  return { title, author, categories, publisher };
};

export default connect(mapStateToProps, { createBook })(BookCreate);

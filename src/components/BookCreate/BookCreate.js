import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Button } from '../shared';
import { createBook, clearProperties } from '../../actions';
import BookEditForm from '../BookEdit/BookEditForm';

class BookCreate extends Component {

  componentWillMount() {
    this.props.clearProperties();
  }

  createBook() {
    const { title, author, publisher, categories } = this.props;
    this.props.createBook({ title, author, publisher, categories });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <BookEditForm />
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

export default connect(mapStateToProps, { createBook, clearProperties })(BookCreate);

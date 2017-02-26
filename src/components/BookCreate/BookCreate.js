import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Button } from '../shared';
import { createBook, clearProperties } from '../../actions';
import BookEditForm from '../BookEdit/BookEditForm';

class BookCreate extends Component {
  state = { dataIsValid: false }

  componentWillMount() {
    this.props.clearProperties();
  }

  componentWillReceiveProps(newProps) {
    const valid = this.isDataValid(newProps);
    if (this.state.dataIsValid !== valid) {
      this.setState({ dataIsValid: valid });
    }
  }

  isDataValid(newProps) {
    const { title, author, publisher, categories } = newProps;

    if (!title || title.length === 0) {
      return false;
    }
    if (!author || author.length === 0) {
      return false;
    }
    if (!publisher || publisher.length === 0) {
      return false;
    }
    if (!categories || categories.length === 0) {
      return false;
    }

    return true;
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
          <Button 
            onPress={this.createBook.bind(this)}
            disabled={!this.state.dataIsValid}
          >
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

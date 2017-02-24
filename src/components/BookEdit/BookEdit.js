import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Input, Button } from '../shared';

// display book info in imputs
// make call to update book
// update book in BookInfo

class BookEdit extends Component {
  render() {
    return (
      <View>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Input 
            label='Title'
            value={this.props.openedBook.title} 
          />
          <Input 
            label='Author'
            value={this.props.openedBook.author} 
          />
          <Input 
            label='Publisher'
            value={this.props.openedBook.publisher} 
          />
          <Input 
            label='Categories'
            value={this.props.openedBook.categories} 
          />
        </View>
        <View>
          <Button>Save</Button>
        </View>

      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { openedBook } = state.books;
  return { openedBook };
};

export default connect(mapStateToProps, { })(BookEdit);

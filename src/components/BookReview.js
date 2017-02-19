import React, { Component } from 'react';
import { View, Text } from 'react-native';

class BookReview extends Component {
  render() {
    return (
      <View>
        <Text>
          {this.props.book.title}
        </Text>
      </View>
    );
  }
}

export default BookReview;

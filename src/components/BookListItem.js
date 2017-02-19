import React, { Component } from 'react';
import { Text, View } from 'react-native';

class BookListItem extends Component {
  render() {
    const { title } = this.props.book;
    return (
      <View>
        <Text style={styles.textStyle}>
          {title}
        </Text>
      </View>
    );
  }
}

const styles = {
  textStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default BookListItem;

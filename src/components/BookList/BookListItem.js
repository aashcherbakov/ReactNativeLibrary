import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { openBook } from '../../actions';

class BookListItem extends Component {

  onRowPress() {
    this.props.openBook(this.props.book);
  }

  render() {
    const { title, author } = this.props.book;
    const { conteinterStyle, titleStyle, subtitleStyle } = styles;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View style={conteinterStyle}>
          <Text style={titleStyle}>
            {title}
          </Text>
          <Text style={subtitleStyle}>
            {author}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },

  subtitleStyle: {
    fontSize: 12,
    paddingLeft: 15
  },

  conteinterStyle: {
    borderBottomWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export default connect(null, { openBook })(BookListItem);

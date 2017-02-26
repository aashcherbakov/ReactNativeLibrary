import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { modifyBookProperty } from '../../actions';

import { Input } from '../shared';

class BookEditForm extends Component {
  render() {
    const { title, author, publisher, categories } = this.props;
    return (
      <View style={{ flex: 1, justifyContent: 'flex-start' }}>
          <Input 
            label='Title'
            value={title} 
            placeholder='What is the title?'
            onChangeText={(value) => this.props.modifyBookProperty({ prop: 'title', value })}
          />
          <Input 
            label='Author'
            value={author} 
            placeholder='Who is the author?'
            onChangeText={(value) => this.props.modifyBookProperty({ prop: 'author', value })}
          />
          <Input 
            label='Publisher'
            value={publisher} 
            placeholder='Where was the book published?'
            onChangeText={(value) => this.props.modifyBookProperty({ prop: 'publisher', value })}
          />
          <Input 
            label='Categories'
            value={categories} 
            placeholder='iOS, Android, Node.js'
            onChangeText={(value) => this.props.modifyBookProperty({ prop: 'categories', value })}
          />
        </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { title, author, publisher, categories } = state.bookEdit;
  return { title, author, publisher, categories };
};

export default connect(mapStateToProps, { modifyBookProperty })(BookEditForm);

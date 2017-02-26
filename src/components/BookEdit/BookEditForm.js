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
            onChangeText={(text) => this.props.modifyBookProperty({ prop: 'title', value: text })}
          />
          <Input 
            label='Author'
            value={author} 
            onChangeText={(text) => this.props.modifyBookProperty({ prop: 'author', value: text })}
          />
          <Input 
            label='Publisher'
            value={publisher} 
            onChangeText={(text) => this.props.modifyBookProperty({ prop: 'publisher', value: text })}
          />
          <Input 
            label='Categories'
            value={categories} 
            onChangeText={(text) => this.props.modifyBookProperty({ prop: 'categories', value: text })}
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

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Spinner, Input } from './shared';

class BookReview extends Component {
  onButtonPress() {
    console.log('Button pressed');
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size='large' />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)} style={{ height: 44 }}>
        Check Out
      </Button>
    );
  }

  render() {
    const { title, author, publisher, categories } = this.props.book;
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Input 
            label='Title'
            placeholder='iOS CookBook'
            value={title}
          />
          <Input 
            label='Author'
            placeholder='Ernest Hemingway'
            value={author}
          />
          <Input 
            label='Categories'
            placeholder='iOS, Android'
            value={categories}
          />
          <Input 
            label='Publisher'
            placeholder='Ray Wenderlich'
            value={publisher}
          />
        </View>
        
        <View style={{ paddingTop: 50, flex: 2 }}>
          {this.renderButton()}
        </View>
        
      </View>
    );
  }
}

export default BookReview;

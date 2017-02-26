import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button, Spinner } from '../shared';
import BookDescription from './BookDescription';
import { checkoutBook } from '../../actions';

class BookInfo extends Component {
  
  onButtonPress() {
    this.props.checkoutBook();
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size='large' />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)} style={styles.button}>
        Check Out
      </Button>
    );
  }

  render() {
    const { title, author } = this.props.book;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.descriptionContainer}>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>

          <View style={styles.authorContainer}>
            <Text style={styles.authorText}>{author}</Text>
          </View>
          
          <BookDescription style={styles.descriptionContainer}>
            {this.props.book}
          </BookDescription>
          <View style={styles.buttonContainer}>
            {this.renderButton()}
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  mainContainer: {
    flex: 1
  },
  descriptionContainer: {
    flex: 1
  },
  titleContainer: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20
  },
  title: {    
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center'
  },
  authorContainer: {
    alignItems: 'center',
    paddingBottom: 15
  },
  authorText: {
    fontSize: 16,
    fontStyle: 'italic'
  },
  textBold: {
    fontWeight: 'bold'
  },
  buttonContainer: {
    paddingTop: 30, 
    flex: 1
  },
  button: {
    paddingTop: 60,
    height: 44
  }
};

const mapStateToProps = state => {
  const book = state.booksList.openedBook;
  return { book };
};

export default connect(mapStateToProps, { checkoutBook })(BookInfo);

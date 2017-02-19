import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';

import { loadBooks } from '../actions';
import BookListItem from './BookListItem';

class BookList extends Component {
  
  componentWillMount() {
    this.props.loadBooks();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ books }) {
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = dataSource.cloneWithRows(books);
  }

  renderRow(book) {
    return <BookListItem book={book} />;
  }

  render() {
    return (
      <ListView 
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return { books: [] };
};

export default connect(mapStateToProps, { loadBooks })(BookList);

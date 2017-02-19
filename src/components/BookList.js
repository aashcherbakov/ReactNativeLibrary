import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';

import { loadBooks } from '../actions';
import { Spinner } from './shared';
import BookListItem from './BookListItem';

class BookList extends Component {
  
  componentWillMount() {
    this.props.loadBooks();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
    console.log(`Will receive props: ${nextProps}`);
  }

  createDataSource({ books }) {
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = dataSource.cloneWithRows(books);
    console.log(`Create datasource: ${books}`);
  }

  renderRow(book) {
    console.log(`Render row: ${book}`);
    return <BookListItem book={book} />;
  }

  renderListView() {
    if (this.props.loading) {
      return <Spinner size={'small'} />;
    }

    return (
      <ListView 
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }

  render() {
    return this.renderListView();
  }
}

const mapStateToProps = (state) => {
  const { books, error, loading } = state.books;
  return { books, error, loading };
};

export default connect(mapStateToProps, { loadBooks })(BookList);

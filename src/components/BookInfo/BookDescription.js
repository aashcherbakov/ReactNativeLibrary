import React from 'react';
import { View, Text } from 'react-native';

const BookDescription = ({ children }) => {
  const { publisher, categories } = children;

  return (
    <View style={styles.detailsGroup}>
      {renderText('Publisher', publisher)}
      {renderText('Categories', categories)}
    </View>
  );
};

const renderText = (title, text) => {
  if (text) {
    return (
      <View style={styles.detailsContainer}>
        <Text style={[styles.detailsText, styles.textBold]}>{title}: </Text>
        <Text style={styles.detailsText}>{text}</Text>
      </View>
    );
  }
};

const styles = {
  detailsGroup: {
  },
  detailsContainer: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingLeft: 10
  },
  detailsText: {
    fontSize: 14
  },
  textBold: {
    fontWeight: 'bold'
  }
};

export default BookDescription;

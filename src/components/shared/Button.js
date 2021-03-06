import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Spinner } from './Spinner';

const Button = ({ onPress, children, disabled, loading }) => {
  const { textStyle, containerStyle, disabledContainer, disabledText } = styles;
  const additionalContainerStyle = (disabled) ? disabledContainer : {};
  const additionalTextStyle = (disabled) ? disabledText : {};
  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={[containerStyle, additionalContainerStyle]} 
      disabled={disabled}
    >
      {renderText(children, [textStyle, additionalTextStyle], loading)}
    </TouchableOpacity>
  );
};

const renderText = (children, style, loading = false) => {
  if (loading) {
    return <Spinner size={'small'} />;
  }

  return (
    <Text style={style}>
      {children}
    </Text>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: 'steelblue',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },

  containerStyle: {
    flex: 1, // expand
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'steelblue',
    marginLeft: 5,
    marginRight: 5,
    maxHeight: 44
  },

  disabledContainer: {
    borderColor: 'lightgray',
  },

  disabledText: {
    color: 'lightgray'
  }
};

export { Button };

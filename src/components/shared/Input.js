import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput 
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    paddingRight: 5,
    paddingLeft: 20,
    fontSize: 16,
    minHeight: 50
  },
  labelStyle: {
    fontSize: 12,
    paddingTop: 5,
    paddingLeft: 20
  },
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
  }
};

export { Input };

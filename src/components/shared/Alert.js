import React from 'react';
import { View, Modal, Text } from 'react-native';
import { Button } from './Button';

const Alert = ({ children, visible, onAccept, onDecline }) => {
  const { 
    testSectionStyle, 
    textStyle, 
    containerStyle, 
    buttonSectionStyle,
    backgroundStyle
  } = styles;

  return (
    <Modal 
      style={{ flex: 1 }}
      visible={visible}
      transparent
      animationType='fade'
      onRequestClose={() => {}}
    >
      <View style={containerStyle}>
        <View style={backgroundStyle}>
          <View style={testSectionStyle}>
            <Text style={textStyle}>{children}</Text>
          </View>
          <View style={buttonSectionStyle}>
            <Button onPress={onAccept} >Yes</Button>
            <Button onPress={onDecline} >No</Button>
          </View>
        </View>
      </View>
    </Modal>
    );
};

const styles = {
  backgroundStyle: {
    backgroundColor: 'white',
    borderRadius: 5
  },
  textSectionStyle: {
    justifyContent: 'center'
  },
  buttonSectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 5
  },
  textStyle: {
    fontSize: 16,
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 60,
    paddingRight: 60
  }
};

export { Alert };

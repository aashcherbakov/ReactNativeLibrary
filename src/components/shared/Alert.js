import React from 'react';
import { View, Modal, Text } from 'react-native';
import { Button } from './Button';

const Alert = ({ children, visible, onAccept, onDecline }) => {
  const { sectionStyle, textStyle, containerStyle } = styles;
  return (
    <Modal 
      style={{ flex: 1 }}
      visible={visible}
      transparent
      animationType='fade'
      onRequestClose={() => {}}
    >
      <View style={containerStyle}>
        <View style={sectionStyle}>
          <Text style={textStyle}>{children}</Text>
        </View>
        <View style={sectionStyle}>
          <Button onPress={onAccept} >Yes</Button>
          <Button onPress={onDecline} >No</Button>
        </View>
      </View>
    </Modal>
    );
};

const styles = {
  sectionStyle: {
    height: 100,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
};

export { Alert };

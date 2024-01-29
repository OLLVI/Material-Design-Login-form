import { View, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import React from 'react';

export default function MainAppBar(props) {
  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appBar}>
        <Appbar.Content title={props.title} />
      </Appbar.Header>
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    elevation: 1,
    shadowOpacity: 1,
  },
});

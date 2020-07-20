import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const TodoListItem = ({item}) => {
  return (
    <View style={styles.todoItem}>
      <Text>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    padding: 10,
    color: '#BDBDBD',
  },
});

export default TodoListItem;

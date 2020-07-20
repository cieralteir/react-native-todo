import React from 'react';
import {View, StyleSheet, Text, TouchableHighlight} from 'react-native';

const TodoListItem = ({item, index, press}) => {
  return (
    <TouchableHighlight onPress={() => press(index)}>
      <View
        style={[styles.todoItem, item.done === 1 ? styles.todoItemDone : '']}>
        <Text>{item.name}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    padding: 10,
  },
  todoItemDone: {
    backgroundColor: '#4DB6AC',
  },
});

export default TodoListItem;

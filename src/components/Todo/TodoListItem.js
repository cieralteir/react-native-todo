import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

const TodoListItem = ({item, press}) => {
  return (
    <TouchableHighlight onPress={() => press(item.id)}>
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

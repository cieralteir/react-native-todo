import React from 'react';
import {FlatList} from 'react-native';

import TodoListItem from './TodoListItem';

const TodoList = () => {
  // Temporary
  const todos = [
    {
      name: 'Eat',
    },
    {
      name: 'Code',
    },
    {
      name: 'Sleep',
    },
  ];

  return <FlatList data={todos} renderItem={TodoListItem} />;
};

export default TodoList;

import React, {useState} from 'react';
import {FlatList} from 'react-native';

import TodoListItem from './TodoListItem';

const TodoList = () => {
  // Temporary
  const todosInitial = [
    {
      name: 'Eat',
      done: 0,
    },
    {
      name: 'Code',
      done: 0,
    },
    {
      name: 'Sleep',
      done: 1,
    },
  ];

  const [todos, setTodos] = useState(todosInitial);

  const handleTodoItemPress = (index) => {
    console.log(index);
    setTodos((todos) => {
      todos[index].done = 1;
      console.log(todos);
      return todos;
    });
  };

  return (
    <FlatList
      data={todos}
      renderItem={({item, index}) => (
        <TodoListItem item={item} index={index} press={handleTodoItemPress} />
      )}
      keyExtractor={(item) => item.name}
    />
  );
};

export default TodoList;

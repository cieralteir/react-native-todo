import React, {useState} from 'react';
import {FlatList} from 'react-native';

import TodoListItem from './TodoListItem';

const TodoList = () => {
  // Temporary
  const todosInitial = [
    {
      id: 1,
      name: 'Eat',
      done: 0,
    },
    {
      id: 2,
      name: 'Code',
      done: 0,
    },
    {
      id: 3,
      name: 'Sleep',
      done: 1,
    },
  ];

  const [todos, setTodos] = useState(todosInitial);
  const [todoSelected, setTodoSelected] = useState(null);

  const handleTodoItemPress = (id) => {
    setTodos((todos) => {
      return todos.map((todo) => {
        if (todo.id === id) todo.done = todo.done ? 0 : 1;
        return todo;
      });
    });
    setTodoSelected(id);
  };

  return (
    <FlatList
      data={todos}
      extraData={todoSelected}
      keyExtractor={(item) => `${item.id}`}
      renderItem={({item}) => (
        <TodoListItem item={item} press={handleTodoItemPress} />
      )}
    />
  );
};

export default TodoList;

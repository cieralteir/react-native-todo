import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

import TheHeader from './components/TheHeader';
import TodoList from './components/Todo/TodoList';

const App = () => {
  return (
    <>
      <TheHeader />
      <SafeAreaView style={styles.container}>
        <TodoList />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

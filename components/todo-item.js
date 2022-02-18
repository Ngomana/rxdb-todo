import React from 'react';
import {Box, Text} from 'native-base';
import {View, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {colors, fontSizes, radius, spacing} from '../constant';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Swipeout from 'react-native-swipeout';

const TodoItem = ({todo, editTodo, deleteTodo, toggleComplete}) => {
  const swipeoutBtns = [
    {text: 'Edit', backgroundColor: 'purple', onPress: () => editTodo(todo)},
    {text: 'Delete', backgroundColor: 'red', onPress: () => deleteTodo(todo)},
  ];
  return (
    // <TouchableOpacity
    //   onLongPress={() => {
    //     Alert.alert(
    //       'Attention',
    //       'Do you want to delete this todo?',
    //       [
    //         {
    //           text: 'Edit',
    //           onPress: () => editTodo(todo),
    //         },
    //         {
    //           text: 'Delete',
    //           onPress: () => deleteTodo(todo),
    //         },
    //       ],
    //       {
    //         cancelable: true,
    //       },
    //     );
    //   }}>
    <Swipeout
      right={swipeoutBtns}
      autoClose="true"
      backgroundColor="transparent">
      <Box
        backgroundColor={'info.800'}
        padding={6}
        borderRadius={15}
        flexDirection={'row'}>
        <TouchableOpacity
          onPress={() => toggleComplete(todo)}
          style={[
            styles.checkContainer,
            todo.completed ? {} : styles.notCompleted,
          ]}>
          {todo.completed && (
            <AntDesign name="checkcircle" size={24} color={'#bae6fd'} />
          )}
        </TouchableOpacity>
        <Box>
          <Text
            style={[styles.todoText, todo.completed && styles.todoCompleted]}>
            {todo.text}
          </Text>
          <Text color={'white'} fontWeight={500}>
            {todo.text1}
          </Text>
        </Box>
      </Box>
      {/* </TouchableOpacity> */}
    </Swipeout>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.todoBg,
    padding: spacing.lg,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkContainer: {
    height: 24,
    width: 24,
    marginRight: spacing.sm,
  },
  notCompleted: {
    borderWidth: 2,
    borderColor: '#bae6fd',
    borderRadius: radius.full,
  },
  todoText: {
    color: colors.white,
    fontSize: fontSizes.md,
  },
  todoCompleted: {
    textDecorationLine: 'line-through',
  },
});

export default TodoItem;

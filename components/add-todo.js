import React from 'react';
import {Box, Input} from 'native-base';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import {colors, radius, spacing} from '../constant';
import CloseIcon from 'react-native-vector-icons/AntDesign';
import PlusIcon from 'react-native-vector-icons/Entypo';
import EditIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const AddTodo = ({editMode, text, setText, onSubmit, cancelEditTodo}) => {
  return (
    <>
      {editMode && (
        <Box style={styles.container}>
          <Box style={styles.leftContainer} />
          <Box style={styles.rightContainer}>
            <TouchableOpacity
              onPress={() => cancelEditTodo()}
              style={styles.iconWrapper}>
              <CloseIcon name="close" size={30} color="white" />
            </TouchableOpacity>
          </Box>
        </Box>
      )}
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Input
            size={'lg'}
            style={styles.input}
            placeholder="Write a task"
            value={text}
            borderColor={'blue.700'}
            variant="filled"
            onChangeText={value => setText(value)}
          />
        </View>
        <View style={styles.rightContainer}>
          <TouchableOpacity
            onPress={() => onSubmit()}
            style={styles.iconWrapper}>
            {editMode ? (
              <EditIcon name="content-save-edit" size={30} color="white" />
            ) : (
              <PlusIcon name="plus" size={30} color="white" />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  rightContainer: {
    marginLeft: spacing.sm,
  },
  leftContainer: {
    flex: 1,
  },
  input: {
    backgroundColor: colors.white,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: radius.lg,
  },
  iconWrapper: {
    height: 64,
    width: 64,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.pink,
    borderRadius: radius.full,
  },
});

export default AddTodo;

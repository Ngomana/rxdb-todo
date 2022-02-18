import React from 'react';
import {Text, Box} from 'native-base';

const Heading = () => {
  return (
    <Box paddingTop={20} paddingHorizontal={30} paddingBottom={10}>
      <Text fontSize={'4xl'} fontWeight={'bold'} color={'black'}>
        To-Do List
      </Text>
      <Text fontSize={'md'} color={'gray.400'}>
        Wassup bro?
      </Text>
    </Box>
  );
};

export default Heading;

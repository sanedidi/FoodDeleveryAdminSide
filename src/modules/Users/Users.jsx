import { Box, Button } from '@chakra-ui/react';
import { authStore } from 'store/auth.store';

export const Users = () => {
  const handleLogOut = () => {
    authStore.userData = {};
    authStore.logout();
  };
  return (
    <Box>
      <h1 style={{ fontSize: '30px' }}>Users</h1>
      <Button background={'red'} color={'white'} onClick={handleLogOut}>
        LOG OUT
      </Button>
    </Box>
  );
};

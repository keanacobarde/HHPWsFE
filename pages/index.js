import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';
import { useAuth } from '../utils/context/authContext';

function Home() {
  const { user } = useAuth();
  const router = useRouter();

  return (
    <Box
      display="flex"
      sx={{ width: '100%' }}
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignContent="center"
        spacing={2}
      >
        <Typography
          component="h1"
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Hello, {user.fbUser.displayName}
        </Typography>
        <Button variant="contained" color="primary" onClick={() => router.push('/orders')}>
          View Orders
        </Button>
        <Button variant="contained" color="primary" onClick={() => router.push('/orders/new')}>
          Create Orders
        </Button>
        <Button variant="contained" color="primary" onClick={() => router.push('/revenue')}>
          Revenue
        </Button>
      </Stack>
    </Box>
  );
}

export default Home;

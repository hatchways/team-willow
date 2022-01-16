import React, { useEffect } from 'react';
import { useAuth } from '../../context/useAuthContext';
import { useSocket } from '../../context/useSocketContext';
import { useHistory } from 'react-router-dom';
import { CircularProgress, Grid, Typography } from '@mui/material';
import PageContainer from '../../components/PageContainer/PageContainer';

//mock user data
const users = [
  {
    id: 1,
    name: 'Norma Byers',
    occupation: 'Loving pet sitter',
    rating: 4,
    description: 'Dog sitting, cat sitting, pocket pet and bird care',
    rate: 14,
    city: 'Toronto, Ontario',
  },
  {
    id: 2,
    name: 'Michael Carnahan',
    occupation: 'Professional dog trainer',
    rating: 5,
    description: 'I would love to work with your dog',
    rate: 20,
    city: 'Toronto, Ontario',
  },
  {
    id: 3,
    name: 'Jessica Pearson',
    occupation: 'Dog care helper',
    rating: 5,
    description: 'I have had dogs as pets for most of my life',
    rate: 15,
    city: 'Toronto, Ontario',
  },
  {
    id: 1,
    name: 'Norma Byers',
    occupation: 'Loving pet sitter',
    rating: 4,
    description: 'Dog sitting, cat sitting, pocket pet and bird care',
    rate: 14,
    city: 'Toronto, Ontario',
  },
  {
    id: 2,
    name: 'Michael Carnahan',
    occupation: 'Professional dog trainer',
    rating: 5,
    description: 'I would love to work with your dog',
    rate: 20,
    city: 'Toronto, Ontario',
  },
  {
    id: 3,
    name: 'Jessica Pearson',
    occupation: 'Dog care helper',
    rating: 5,
    description: 'I have had dogs as pets for most of my life',
    rate: 15,
    city: 'Toronto, Ontario',
  },
];
export default function Dashboard(): JSX.Element {
  const { loggedInUser } = useAuth();
  const { initSocket } = useSocket();
  const history = useHistory();

  useEffect(() => {
    initSocket();
  }, [initSocket]);

  if (loggedInUser === undefined) return <CircularProgress />;
  if (!loggedInUser) {
    history.push('/login');
    // loading for a split seconds until history.push works
    return <CircularProgress />;
  }

  return (
    <PageContainer>
      <Grid container>
        <Grid xs={12} item>
          <Typography sx={{ textAlign: 'center' }} variant="h4">
            Search Profiles
          </Typography>
        </Grid>
      </Grid>
    </PageContainer>
  );
}

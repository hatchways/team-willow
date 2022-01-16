import React, { useEffect } from 'react';
import { useAuth } from '../../context/useAuthContext';
import { useSocket } from '../../context/useSocketContext';
import { useHistory } from 'react-router-dom';
import { CircularProgress, Grid, Typography } from '@mui/material';
import PageContainer from '../../components/PageContainer/PageContainer';
import UserDetails from './UserDetails/UserDetails';

//mock user data

const users = [
  {
    id: 1,
    image:
      'https://media.istockphoto.com/photos/portrait-young-woman-with-laughing-corgi-puppy-nature-background-picture-id1276788283?b=1&k=20&m=1276788283&s=170667a&w=0&h=X3dRalkRRGigR2q58t19R8U89CFjmxlRwWC4Y0sPbD8=',
    name: 'Norma Byers',
    occupation: 'Loving pet sitter',
    rating: 4,
    description: 'Dog sitting, cat sitting, pocket pet and bird care',
    rate: 14,
    city: 'Toronto, Ontario',
  },
  {
    id: 2,
    image:
      'https://media.istockphoto.com/photos/woman-cuddling-with-her-dog-picture-id912760940?b=1&k=20&m=912760940&s=170667a&w=0&h=VpqWZcfjg1WpYlHpFddp5U0X6FjnK_s6JDs6JI2j5ag=',
    name: 'Michael Carnahan',
    occupation: 'Professional dog trainer',
    rating: 5,
    description: 'I would love to work with your dog',
    rate: 20,
    city: 'Toronto, Ontario',
  },
  {
    id: 3,
    image:
      'https://media.istockphoto.com/photos/beautiful-woman-and-her-dog-in-park-picture-id1207034859?b=1&k=20&m=1207034859&s=170667a&w=0&h=paQF_IEEJiYcSR_pFr_kdZpGfZDGqMp0vEak_Dxl5kQ=',
    name: 'Jessica Pearson',
    occupation: 'Dog care helper',
    rating: 5,
    description: 'I have had dogs as pets for most of my life',
    rate: 15,
    city: 'Toronto, Ontario',
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1489440543286-a69330151c0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlJTIwd2l0aCUyMHBldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    name: 'Norma Byers',
    occupation: 'Loving pet sitter',
    rating: 4,
    description: 'Dog sitting, cat sitting, pocket pet and bird care',
    rate: 14,
    city: 'Toronto, Ontario',
  },
  {
    id: 5,
    image:
      'https://images.unsplash.com/photo-1517125591588-3a29b2182219?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBlb3BsZSUyMHdpdGglMjBwZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    name: 'Michael Carnahan',
    occupation: 'Professional dog trainer',
    rating: 5,
    description: 'I would love to work with your dog',
    rate: 20,
    city: 'Toronto, Ontario',
  },
  {
    id: 6,
    image:
      'https://images.unsplash.com/photo-1525983360072-2ebda055ba40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZSUyMHdpdGglMjBwZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
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
          <Grid sx={{ textAlign: 'center' }} container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {users.map((user) => (
              <UserDetails key={user.id} user={user}></UserDetails>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </PageContainer>
  );
}

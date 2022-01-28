import React, { useEffect } from 'react';
import { useAuth } from '../../context/useAuthContext';
import { useSocket } from '../../context/useSocketContext';
import { useHistory } from 'react-router-dom';
import { CircularProgress, Grid, Typography, Box, TextField, InputAdornment } from '@mui/material';
import PageContainer from '../../components/PageContainer/PageContainer';
import UserDetails from './UserDetails/UserDetails';
import SearchIcon from '@mui/icons-material/Search';
import DateRangeIcon from '@mui/icons-material/DateRange';
import CloseIcon from '@mui/icons-material/Close';
import useStyles from './useStyles';
import { profiles } from '../../mocks/mockUsers';

export default function Dashboard(): JSX.Element {
  const { loggedInUser } = useAuth();
  const { initSocket } = useSocket();
  const history = useHistory();
  const classes = useStyles();
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
          <Typography
            sx={{
              fontWeight: 700,
              textAlign: 'center',
              my: 5,
            }}
            variant="h4"
          >
            Search Profiles
          </Typography>
          <Box className={classes.searchContainer}>
            <TextField
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon className={classes.searchIcon} />
                  </InputAdornment>
                ),
              }}
              fullWidth
              sx={{ maxWidth: 500 }}
            />
            <Box className={classes.datePicker}>
              <DateRangeIcon className={classes.icon} />
              <Typography variant="h5">16-17 june 2019</Typography>
              <CloseIcon className={classes.icon} />
            </Box>
          </Box>
          <Grid
            sx={{ textAlign: 'center', mx: 5 }}
            container
            spacing={{ xs: 2, md: 5 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {profiles.map((profile) => (
              <UserDetails key={profile.id} profile={profile}></UserDetails>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </PageContainer>
  );
}

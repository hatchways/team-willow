import CalendarPicker from '@mui/lab/CalendarPicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import Typography from '@mui/material/Typography';
import useStyles from './useStyles';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import userImage from '../../images/userProfilePic.jpeg';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import List from '@mui/material/List';

function Booking(): JSX.Element {
  const classes = useStyles();
  return (
    <Grid display={'flex'} flexDirection={'column'} className={classes.bookingComponent} flexWrap={'nowrap'}>
      <Grid display={'flex'} className={classes.bookings}>
        <Typography variant="subtitle1" className={'classes.bookingTitleDate'}>
          5 April 2020, 10-12 AM
        </Typography>
        <IconButton aria-label="settings" className={'classes.bookingIcon'}>
          <SettingsIcon />
        </IconButton>
      </Grid>
      <Grid flexDirection={'row'} width={'90%'} mx="auto">
        <Avatar alt="userImage" src={userImage} className={classes.bookingAvatar} />
        <Typography variant="h6" className={classes.bookingAvatarName}>
          Norma Byers
        </Typography>
        <Typography variant="h6" className={classes.bookingAvatarStatus}>
          Accepted
        </Typography>
      </Grid>
    </Grid>
  );
}

export default function ManageBooking(): JSX.Element {
  const classes = useStyles();

  const date = new Date('2020-01-01T00:00:00.000');
  return (
    <Box display={'flex'} mx="auto" justifyContent={'center'} width={'90%'} padding={2.5}>
      <Grid container spacing={5} direction="row">
        <Grid item xs={5}>
          <Grid>
            <Box display="flex" flexDirection={'column'}>
              <Paper component={'div'} className={classes.paper}>
                <Typography variant="h6" display="block" gutterBottom className={classes.bookingTitle}>
                  Your next Booking
                </Typography>
                <Booking />
              </Paper>
            </Box>
          </Grid>
          <br />
          <Grid className={classes.currentBookingContainer}>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" display="block" gutterBottom className={classes.bookingTitle}>
                Current Bookings:
              </Typography>
              <List
                sx={{
                  width: '100%',
                  position: 'relative',
                  overflow: 'auto',
                  maxHeight: 500,
                }}
              >
                <Booking />
                <Booking />
                <Typography variant="h6" display="block" gutterBottom className={classes.bookingTitle}>
                  Past Bookings:
                </Typography>
                <Booking />
                <Booking />
                <Booking />
                <Booking />
                <br />
                <br />
              </List>
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={7} className={classes.calender}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Grid item width="100%">
              <CalendarPicker date={date} onChange={() => console.log('change detected!')} />
            </Grid>
          </LocalizationProvider>
        </Grid>
      </Grid>
    </Box>
  );
}

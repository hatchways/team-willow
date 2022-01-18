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
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './bookingCalendar.css';

function Booking(): JSX.Element {
  const classes = useStyles();
  return (
    <Grid display={'flex'} flexDirection={'column'} className={classes.bookingComponent} flexWrap={'nowrap'}>
      <Grid display={'flex'} flexDirection={'row'} className={classes.bookings}>
        <Typography variant="h6" className={classes.bookingTitleDate}>
          5 April 2020, 10-12 AM
        </Typography>
        <IconButton aria-label="settings" className={classes.bookingIcon}>
          <SettingsIcon />
        </IconButton>
      </Grid>
      <Grid display={'flex'} flexDirection={'row'} width={'90%'} mx="auto" className={classes.bookingContainer}>
        <Avatar alt="userImage" src={userImage} variant={'circular'} className={classes.bookingAvatar} />
        <Typography variant="h6" className={classes.bookingAvatarName}>
          Norma Byers
        </Typography>
        <Typography variant="h6" className={classes.bookingAvatarStatus}>
          ACCEPTED
        </Typography>
      </Grid>
    </Grid>
  );
}

export default function ManageBooking(): JSX.Element {
  const classes = useStyles();

  const date = new Date();
  return (
    <Box display={'flex'} mx="auto" justifyContent={'center'} width={'90%'} padding={2.5}>
      <Grid container spacing={5} direction="row">
        <Grid item xs={5}>
          <Grid>
            <Box display="flex" flexDirection={'column'}>
              <Paper component={'div'} className={classes.paper}>
                <Typography variant="h6" gutterBottom className={classes.bookingTitle}>
                  Your next Booking
                </Typography>
                <IconButton aria-label="settings" className={classes.nextBookingIcon}>
                  <SettingsIcon />
                </IconButton>
                <Grid display={'flex'} flexDirection={'row'} className={classes.bookings}>
                  <Typography variant="h6" className={classes.bookingTitleDate}>
                    5 April 2020, 10-12 AM
                  </Typography>
                </Grid>
                <Grid
                  display={'flex'}
                  flexDirection={'row'}
                  width={'90%'}
                  mx="auto"
                  className={classes.bookingContainer}
                >
                  <Avatar alt="userImage" src={userImage} variant={'circular'} className={classes.bookingAvatar} />
                  <Typography variant="h6" className={classes.bookingAvatarName}>
                    Norma Byers
                  </Typography>
                  <Typography variant="h6" className={classes.bookingAvatarStatus}>
                    ACCEPTED
                  </Typography>
                </Grid>
              </Paper>
            </Box>
          </Grid>
          <br />
          <Grid>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" display="block" gutterBottom className={classes.bookingTitle}>
                Current Bookings:
              </Typography>
              <List
                sx={{
                  width: '100%',
                  position: 'relative',
                  overflow: 'auto',
                  maxHeight: 600,
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
        <Grid item xs={7}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Grid item width="100%" position={'relative'}>
              <Calendar className={classes.calendar} value={date} />
            </Grid>
          </LocalizationProvider>
        </Grid>
      </Grid>
    </Box>
  );
}

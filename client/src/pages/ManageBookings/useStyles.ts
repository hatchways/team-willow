import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  bookingComponent: {
    border: '1px solid',
    borderRadius: 5,
    borderColor: 'lightgrey',
    padding: 10,
    margin: 15,
  },
  bookings: {
    width: '100%',
    justifyContent: 'space-between',
  },
  bookingTitle: {
    display: 'inline',
    paddingTop: 20,
    paddingLeft: 20,
  },
  bookingTitleDate: {
    padding: 15,
  },
  bookingIcon: {
    justifyContent: 'flex-end',
    bottom: 5,
    left: 5,
  },
  bookingContainer: {},
  bookingAvatar: {
    bottom: 10,
  },
  bookingAvatarName: {
    paddingLeft: 10,
  },
  bookingAvatarStatus: {
    color: 'grey',
    paddingLeft: 150,
    paddingBottom: 20,
  },
  paper: {
    paddingLeft: 5,
    paddingBottom: 0,
  },
  calendar: {
    width: '80%',
    borderRadius: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    boxShadow: '2px 2px 5px 2px',
  },
  nextBookingContainer: {},
  nextBookingIcon: {
    display: 'flex',
    justifyContent: 'flex-end',
    right: 0,
  },
});

export default useStyles;

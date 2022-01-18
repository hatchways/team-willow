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
    // position: 'absolute',
    justifyContent: 'center',
    borderRadius: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    border: 'none',
    width: '85%',
    height: '40%',
    mx: 'auto',
    my: 'auto',
    padding: 50,
    boxSizing: 'border-box',
    boxShadow:
      '1.6px 1.1px 2.1px rgba(0, 0, 0, 0.02),\
    3.8px 2.7px 5.1px rgba(0, 0, 0, 0.028),\
    7.1px 5px 9.6px rgba(0, 0, 0, 0.035),\
    12.7px 8.9px 17.2px rgba(0, 0, 0, 0.042),\
    23.8px 16.7px 32.2px rgba(0, 0, 0, 0.05),\
    57px 40px 77px rgba(0, 0, 0, 0.07)',
  },
  nextBookingContainer: {},
  nextBookingIcon: {
    display: 'flex',
    justifyContent: 'flex-end',
    right: 0,
  },
});

export default useStyles;

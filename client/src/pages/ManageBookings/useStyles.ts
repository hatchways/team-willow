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
    flexDirection: 'row',
  },
  bookingTitle: {
    paddingInline: 15,
    paddingTop: 15,
  },
  bookingTitleDate: {
    margin: 15,
  },
  bookingIcon: {
    justifyContent: 'flex-end',
  },
  bookingAvatar: {
    padding: 5,
  },
  bookingAvatarName: {
    padding: 5,
  },
  bookingAvatarStatus: {
    color: 'grey',
  },
  currentBookingContainer: {
    height: '45%',
  },
  paper: {
    paddingLeft: 5,
    paddingBottom: 0,
  },
  calender: {
    display: 'flex',
    width: 'inherit',
  },
});

export default useStyles;

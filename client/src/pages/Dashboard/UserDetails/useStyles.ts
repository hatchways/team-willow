import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  cardMedia: {
    width: 250,
    height: 250,
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '50%',
    margin: '0 auto',
  },
  userImage: {
    display: 'inline',
    height: '100%',
    margin: '0 auto',
  },
}));

export default useStyles;

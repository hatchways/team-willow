import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  imageCropper: {
    maxWidth: 250,
    height: 250,
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '50%',
    margin: '50px auto 10px auto',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
  },
  userImage: {
    margin: '0 auto',
    height: '100%',
    width: '100%',
  },
}));

export default useStyles;

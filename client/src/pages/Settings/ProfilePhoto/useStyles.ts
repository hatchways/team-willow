import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  imageCropper: {
    width: 150,
    height: 150,
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '50%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 50,
  },
  txt: {
    textAlign: 'center',
    color: '#8e8e8e',
    textTransform: 'none',
  },
  input: {
    margin: '50px auto',
  },
}));
export default useStyles;

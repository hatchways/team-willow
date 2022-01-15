import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  imageCropper: {
    width: 150,
    height: 150,
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '50%',
    margin: '50px auto',
  },
  img: {
    display: 'inline',
    margin: '0px auto',
    marginLeft: '-25%', //centers the image
    height: '100%',
    width: 'auto',
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
